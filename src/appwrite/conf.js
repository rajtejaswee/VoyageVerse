import config from "../config/config";
import { Client, ID, Databases, Storage, Query} from "appwrite";

export class conf {
    client = new Client();
    databases;
    bucket;
    
    constructor() {
        this.client.setEndpoint(config.appwriteUrl);
        this.client.setEndpointRealtime(config.appwrite_projectId);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredimage, status, userId }) {
        try {
            return await this.database.createDocument(config.appwrite_databseId, config.appwrite_collectionId, slug, {
                title,
                content,
                featuredimage,
                status,
                userId,
            })
        } catch (error) {
           throw error 
        }
    }

    async updatePost(slug, { title, featuredimage, status }) {
        try {
            return await this.database.updateDocument(config.appwrite_databseId, config.appwrite_collectionId, slug, {
                title,
                content,
                featuredimage,
                status,
            });
        } catch (error) {
            console.log("Appwrite error :: updatePost :: error", error)
        }

    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(config.appwrite_databseId, config.appwrite_collectionId, slug) 
            return true;
        } catch (error) {
            console.log("Appwrite error :: deletePost :: error", error)  
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(config.appwrite_databseId, comfig.appwrite_collectionId, slug)
        } catch (error) {
            console.log("Appwrite error :: getPost :: error", error)
            return false;
            
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(config.appwrite_databseId, config.appwrite_collectionId, queries)
        } catch (error) {
            console.log("Appwrite error :: getPosts :: error", error)
            return false
        }
    }

    // file upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.appwrite_bucketId, ID.unique(), file)
        } catch (error) {
            console.log("Appwrite error :: uploadFile :: error", error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(config.appwrite_bucketId, fileId)
            return true
        } catch (error) {
            console.log("Appwrite error :: deletefile :: error", error);
            return false
        }
    }
    
    getfilePreview(fileId) {
       return this.bucket.getFilePreview(config.appwrite_bucketId, fileId)
    }

}

export default conf;