import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create, updateBook } from '../features/books/booksSlice';

function Form() {
    const { book: single } = useSelector(state => state.books)
    const isSingleEmpty = Object.keys(single).length === 0;
    const dispatch = useDispatch();
    const [book, setBook] = useState(!isSingleEmpty ? single : {
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false
    })

    useEffect(() => {
        if (!isSingleEmpty) setBook(single)
    }, [isSingleEmpty, single])


    const handleFrom = (e) => {
        e.preventDefault();
        if (isSingleEmpty) {
            dispatch(create(book))
        } else {
            dispatch(updateBook(book))
        }
        setBook({
            name: "",
            author: "",
            thumbnail: "",
            price: "",
            rating: "",
            featured: false
        });
    }

    return (
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form className="book-form" onSubmit={handleFrom}>
                <div className="space-y-2">
                    <label htmlFor="name">Book Name</label>
                    <input defaultValue={book.name} onChange={e => setBook(prevBook => ({ ...prevBook, name: e.target.value }))} required className="text-input" type="text" id="input-Bookname" name="name" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="category">Author</label>
                    <input required defaultValue={book.author} onChange={e => setBook(prevBook => ({ ...prevBook, author: e.target.value }))} className="text-input" type="text" id="input-Bookauthor" name="author" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="image">Image Url</label>
                    <input required defaultValue={book.thumbnail} onChange={e => setBook(prevBook => ({ ...prevBook, thumbnail: e.target.value }))} className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                </div>

                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label htmlFor="price">Price</label>
                        <input required defaultValue={book.price} onChange={e => setBook(prevBook => ({ ...prevBook, price: e.target.value }))} className="text-input" type="number" id="input-Bookprice" name="price" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="quantity">Rating</label>
                        <input required defaultValue={book.rating} onChange={e => setBook(prevBook => ({ ...prevBook, rating: e.target.value }))} className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                    </div>
                </div>

                <div className="flex items-center">
                    <input id="input-Bookfeatured" checked={book.featured} onChange={e => setBook(prevBook => ({ ...prevBook, featured: e.target.checked }))} type="checkbox" name="featured" className="w-4 h-4" />
                    <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
                </div>

                <button type="submit" className="submit" id="submit">{!isSingleEmpty ? 'Update Book' : 'Add Book'}</button>
            </form>
        </div>
    )
}

export default Form