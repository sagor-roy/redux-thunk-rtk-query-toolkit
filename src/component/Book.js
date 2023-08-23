import React, { useEffect } from 'react'
import BookCard from './BookCard'
import { useDispatch, useSelector } from 'react-redux'
import { books } from '../features/books/booksSlice';

function Book() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.books);
    useEffect(() => {
        dispatch(books());
    }, [dispatch])

    console.log(data);
    return (
        <div className="lws-bookContainer">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />

        </div>
    )
}

export default Book