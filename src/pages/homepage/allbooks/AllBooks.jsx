import React, { use } from 'react';
import { Link } from 'react-router';
import BookCard from '../../../ui/BookCard';

const booksPromise=fetch("/booksData.json").then(res=>res.json())

const AllBooks = () => {
    const books=use(booksPromise)
    // console.log(books)
    
    return (
        <div className='text-center py-10 container mx-auto'>
            <h1>books</h1>
              <div className='grid gap-8 justify-center items-center lg:grid-cols-3'>
            {
                books.map(book=>
<BookCard book={book} key={book.bookId} />
                )
            }
            </div>
        </div>
    );
};

export default AllBooks;