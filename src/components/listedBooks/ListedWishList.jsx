import React, { useContext } from 'react';
import BookCard from '../../ui/BookCard';
import { BookContext } from '../../context/BookContext';

const ListedWishList = ({sortingType}) => {
     const {wishlist}=useContext(BookContext)
        console.log(wishlist,"bookcontext")

    if(wishlist.length===0){
      return <p>no card added</p>
    }
    return (
        <div>
   
            {
            wishlist.map(book=><BookCard book={book}/>)
            }
        </div>
    )}

export default ListedWishList;