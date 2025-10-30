import type { Book } from "../types/Book"

const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes"

const transformGoogleBook = (item: any): Book => {
	return {
		id: item.id,
		title: item.volumeInfo.title,
		authorId: item.volumeInfo.authors || [],
		description: item.volumeInfo.description || '',
		coverUrl: item.volumeInfo.imageLinks?.thumbnail || '',
        isbn: item.volumeInfo.industryIdentifiers[0].identifier,
        publishedYear: item.volumeInfo.publishedDate
	}
}



export const searchBooksByTitle = async (title: string): Promise<Book[]> => {
	try {
		const params = new URLSearchParams({
			q: `intitle:${title}`,
			country: "US",
			maxResults: "40",
		})

		const response = await fetch(`${GOOGLE_BOOKS_API}?${params}`)

		if (!response.ok) {
			throw new Error(`API request failed with status ${response.status}`)
		}

		const data = await response.json()
		// console.log("Response status:", data)

		if (!data.items || data.items.length === 0) {
			return []
		}

		return data.items.map(transformGoogleBook)
	} catch (error) {
		console.error("Error fetching books from Google Books API:", error)
		return []
	}
}