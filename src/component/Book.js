import React, { useEffect } from 'react'
import BookCard from './BookCard'
import { useDispatch, useSelector } from 'react-redux'
import { books } from '../features/books/booksSlice';
import Loading from '../utility/Loading';
import Error from '../utility/Error';

function Book() {
    const dispatch = useDispatch();
    const { books: book, isError, isLoading } = useSelector(state => state.books);
    useEffect(() => {
        dispatch(books({}));
    }, [dispatch])


    let content;
    if (isLoading) content = <Loading />
    if (isError) content = <Error />
    if (book.length <= 0) content = <h1>Data Not Found...</h1>
    if (!isLoading && !isError) content = book.map(item => (
        <BookCard key={item.id} book={item} />
    ))

    console.log(book.length);

    return (
        <div className="lws-bookContainer">
            {content}
        </div>
    )
}

export default Book