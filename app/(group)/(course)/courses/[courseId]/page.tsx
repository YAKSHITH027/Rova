import { db } from '@/lib/db'
import { Donegal_One } from 'next/font/google'
import { redirect } from 'next/navigation'
import { Controller } from 'react-hook-form'

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        orderBy: {
          position: 'asc',
        },
      },
    },
  })
  if (!course) {
    return redirect('/dashboard')
  }
  return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`)
}
export default CourseIdPage
