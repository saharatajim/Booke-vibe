import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../../ui/BookCard'

const ListedReadList = ({sortingType}) => {

     const {storedBook}=useContext(BookContext)
        console.log(storedBook,"bookcontext")
    
 if(storedBook.length===0){
       return<p>no card added</p>
    }

    return (
        <div>
   
            {
            storedBook.map(book=><BookCard book={book}/>)
            }
        </div>
    );
};

export default ListedReadList;