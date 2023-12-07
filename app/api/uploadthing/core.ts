import { auth } from '@clerk/nextjs'
import { createUploadthing, type FileRouter } from 'uploadthing/next'

const f = createUploadthing()

const handleAuth = () => {
  const { userId } = auth()
  console.log('userid', userId)
  if (!userId) throw new Error('Unathorized')
  return { userId }
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  courseImage: f({
    image: { maxFileSize: '4MB', maxFileCount: 1 },
  }).onUploadComplete(() => {}),
  courseAttachment: f([
    'text',
    'image',
    'video',
    'audio',
    'pdf',
  ]).onUploadComplete(() => {}),
  chapterVideo: f({
    video: { maxFileCount: 1, maxFileSize: '512MB' },
  }).onUploadComplete(() => {}),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
