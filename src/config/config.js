
const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwrite_databseId: String(import.meta.env.VITE_APPWRITE_DATABSE_ID),
    appwrite_collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwrite_bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default config