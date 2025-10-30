// import type { Author } from "../types/Authors"
import type { BookSearchResult } from "../types/BookSearchResult"

interface BookSearchResultsProps {
	searchResults: BookSearchResult[]
	// authors: Author[]
	onSelectBook: (book: BookSearchResult) => void
	onClearResults: () => void
}

const BookSearchResults = ({
	searchResults,
	// authors,
	onSelectBook,
	onClearResults,
}: BookSearchResultsProps) => {

	return (
		<div className="absolute z-20 left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
			<div className="flex justify-end p-2">
				<button
					onClick={onClearResults}
					className="text-xs text-gray-500 hover:text-gray-700"
				>
					Clear
				</button>
			</div>
			{searchResults.map((book) => (
				<div
					key={book.id}
					className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 transition-colors"
					onClick={() => onSelectBook(book)}
				>
					<div className="flex gap-3">
						{book.thumbnail && (
							<img
								src={book.thumbnail}
								alt={book.title}
								className="w-12 h-16 object-cover rounded"
								onError={(e) => (e.currentTarget.style.display = "none")}
							/>
						)}
						<div className="flex-1">
							<p className="font-medium text-sm text-gray-800">{book.title}</p>
							<p className="text-xs text-gray-600 mt-1">
								{book.author || "Unknown author"}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default BookSearchResults
