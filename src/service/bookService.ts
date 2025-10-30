import type { Book } from "../types/Book"

const API_BASE_URL = "https://easy-simple-users-rest-api.onrender.com"

export const api = {
    getBooks: async (): Promise<Book[]> => {
        const response = await fetch(`${API_BASE_URL}/api/Books`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (!response.ok) {
            throw new Error("Failed to fetch author")
        }
        const responseJson = await response.json()
        const data = responseJson.data
        console.log(data)
        return data
    },
    createBook: async (book: Book): Promise<Book> => {
        const response = await fetch(`${API_BASE_URL}/api/Books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book)
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