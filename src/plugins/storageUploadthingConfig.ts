import { uploadthingStorage } from '@payloadcms/storage-uploadthing'

export const uploadthingConfig = uploadthingStorage({
  collections: {
    media: true,
  },
  options: {
    token: process.env.UPLOADTHING_TOKEN,
    acl: 'public-read',
  },
})
