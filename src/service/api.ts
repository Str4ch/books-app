import type { Author } from "../types/Authors"
import type { Book } from "../types/Book"

const API_BASE_URL = "https://easy-simple-users-rest-api.onrender.com"

// http://localhost:3000

export const api = {
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
    },
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
    },
    
	/*getUsers: async (): Promise<User[]> => {
		const response = await fetch(`${API_BASE_URL}/api/users`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				my_key: "my_super_secret_phrase",
			},
		})
		if (!response.ok) {
			throw new Error("Failed to fetch users")
		}
		const responseJson = await response.json()
		const data = responseJson.data
		console.log(data)
		return data
	},

	getUser: async (id: number): Promise<User> => {
		const response = await fetch(`${API_BASE_URL}/users/${id}`)
		if (!response.ok) {
			throw new Error("Failed to fetch user")
		}
		return response.json()
	},

	createUser: async (userData: Omit<User, "id">): Promise<User> => {
		const response = await fetch(`${API_BASE_URL}/users`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userData),
		})
		if (!response.ok) {
			throw new Error("Failed to create user")
		}
		return response.json()
	},*/
}