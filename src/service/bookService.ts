import type { Book } from "../types/Book"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const bookService = {
    getBooks: async (): Promise<Book[]> => {
        const response = await fetch(`${API_BASE_URL}/api/Books`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (!response.ok) {
            throw new Error("Failed to fetch book")
        }
        const responseJson = await response.json()
        const books: Book[] = responseJson.map((item: any) => ({
            id: item.Id,
            title: item.bookName,
            authorId: item.authorId, 
            isbn: item.isbn,
            publishedYear: item.bookYear,
            description: item.description,
            coverUrl: item.coverUrl,
        }))

        return books
    },
    createBook: async (book: Book): Promise<Book> => {
        const body = {
            "bookName": book.title,
            "bookYear": book.publishedYear,
            "authorId": book.authorId,
            "isbn": book.isbn,
            "description": book.description,
            "coverUrl": book.coverUrl
        }
        const response = await fetch(`${API_BASE_URL}/api/Books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            throw new Error("Failed to fetch book")
        }
        
        const responseJson = await response.json()
        console.log(responseJson)
        return book
    }
}