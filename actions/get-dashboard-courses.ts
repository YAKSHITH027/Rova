import { db } from '@/lib/db'
import { Category, Chapter, Course } from '@prisma/client'
import { getProgress } from '@/actions/get-progress'

type DashboardCourses = {
  completedCourses: CourseWithProgressWithCategory[]
  courseInProgress: CourseWithProgressWithCategory[]
}

type CourseWithProgressWithCategory = Course & {
  category: Category
  chapters: Chapter[]
  progress: number | null
}

export const getDashboardCourses = async (
  userId: string
): Promise<DashboardCourses> => {
  try {
    const purchasedCourses = await db.purchase.findMany({
      where: {
        userId: userId,
      },
      select: {
        course: {
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              },
            },
          },
        },
      },
    })

    const courses = purchasedCourses.map(
      (purchase) => purchase.course
    ) as CourseWithProgressWithCategory[]

    for (let course of courses) {
      const progress = await getProgress(userId, course.id)
      course['progress'] = progress
    }
    const completedCourses = courses.filter((course) => course.progress === 100)
    const courseInProgress = courses.filter(
      (course) => (course.progress ?? 0) < 100
    )
    return {
      completedCourses,
      courseInProgress,
    }
  } catch (error) {
    console.log('Get dashboard courses', error)
    return {
      completedCourses: [],
      courseInProgress: [],
    }
  }
}
