import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import Mux from '@mux/mux-node'

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!,
)
export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }
    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    })
    if (!course) {
      return new NextResponse('Not found', { status: 404 })
    }
    for (const chapter of course.chapters) {
      console.log('asestid', chapter.muxData?.assetId)
      if (chapter.muxData?.assetId) {
        await Video.Assets.del(chapter.muxData.assetId)
      }
    }
    await db.attachment.deleteMany({
      where: {
        courseId: params.courseId,
      },
    })
    await db.chapter.deleteMany({
      where: {
        courseId: params.courseId,
      },
    })
    await db.purchase.deleteMany({
      where: {
        courseId: params.courseId,
      },
    })

    const deletedCourse = await db.course.delete({
      where: {
        id: params.courseId,
      },
    })
    console.log('deleted', deletedCourse)
    return NextResponse.json(deletedCourse)
  } catch (error) {
    console.log('course delete', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const { userId } = auth()
    const { courseId } = params
    const values = await req.json()
    if (!userId) return new NextResponse('Unauthorized', { status: 401 })
    const course = await db.course.update({
      where: { id: courseId, userId },
      data: { ...values },
    })
    return NextResponse.json(course)
  } catch (error) {
    console.log('Couseid', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
