import type { Author } from "../types/Authors"

const API_BASE_URL = "https://easy-simple-users-rest-api.onrender.com"

export const authorService = {
    getAuthors: async (): Promise<Author[]> =>{
        const response = await fetch(`${API_BASE_URL}/api/Authors`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (!response.ok) {
            throw new Error("Failed to fetch authors")
        }
        const responseJson = await response.json()
        const data = responseJson.data
        console.log(data)
        return data
    },
    getAuthor: async (id: number): Promise<Author> => {
        const response = await fetch(`${API_BASE_URL}/api/Authors/${id}`)
        if (!response.ok) {
            throw new Error("Failed to fetch author")
        }
        const responseJson = await response.json()
        const data = responseJson.data
        console.log(data)
        return data
    },
    createAuthor: async (author: Author): Promise<Author> => {
        const response = await fetch(`${API_BASE_URL}/api/Authors`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(author)
        })
        if (!response.ok) {
            throw new Error("Failed to fetch author")
        }
        const responseJson = await response.json()
        const data = responseJson.data
        console.log(data)
        return data
    }
}