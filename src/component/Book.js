import React, { useState } from 'react'
import { useGetBookQuery, useGetBooksQuery } from '../services/book/apiSlice'
import BookCard from './BookCard'
import Loading from '../utility/Loading';
import Error from '../utility/Error';

function Book() {
    const { data: book = [], isError, isLoading } = useGetBooksQuery();
    const {data: getBook, } = useGetBookQuery();
    const [isEdit, setIsEdit] = useState(false);

    const handleEditClick = (id) => {
        alert(id)
    }

    let content;
    if (isLoading) content = <Loading />
    if (isError) content = <Error />
    if (!isLoading && !isError) content = book.map(item => (
        <BookCard key={item.id} book={item} editHandler={handleEditClick} />
    ))

    return (
        <div className="lws-bookContainer">
            {content}
        </div>
    )
}

export default Book