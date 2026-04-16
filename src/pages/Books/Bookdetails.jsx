
// import { use } from 'react';--method:1
import { useContext, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

// const booksPromise=fetch("/booksData.json").then(res=>res.json()) --method:1



const Bookdetails = () => {
    const { bookId: paramsId }=useParams()
    // console.log("this param is url id",paramsId)
    //   const books=use(booksPromise)--method:1
    // console.log(books)
    //    console.log(books)
     
    const books=useLoaderData()
    const expectedBook=books.find(book=>book.bookId==paramsId)
   const {bookName,image}=expectedBook
//  console.log(expectedBook)

    const {handleMarkAsRead,handleWishlist}=useContext(BookContext)



    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img className='h-100 w-80'
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleMarkAsRead(expectedBook)} className="btn btn-neutral">Mark as Read</button>
  
      <button onClick={()=>handleWishlist(expectedBook) } className="btn btn-primary">Add to Wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bookdetails;