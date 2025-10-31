import type { Author } from "../types/Authors"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
        const authors: Author[] = responseJson.map((item: any) => ({
            	id: item.Id,
	            firstName: item.firstName,
	            lastName: item.lastName,
	            bio: item.bio,
	            birthYear: item.yearOfBirth,
	            country: item.country
        }))
        return authors
    },
    getAuthor: async (id: number): Promise<Author> => {
        const response = await fetch(`${API_BASE_URL}/api/Authors/${id}`)
        if (!response.ok) {
            throw new Error("Failed to fetch author")
        }
        const responseJson = await response.json()
        return responseJson
    },
    createAuthor: async (author: Author): Promise<Author> => {
        console.log(author)
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
        return responseJson
    }
}