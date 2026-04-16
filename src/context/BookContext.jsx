import React, { useState } from 'react';
import { createContext } from 'react';

export const BookContext=createContext()


 const BookProvider= ({children})=>{

        const [storedBook,setStoredBook]=useState([])
        const [wishlist,setWishlist]=useState([])

const handleMarkAsRead=(currentBook)=>{
    console.log(currentBook,"currentBook")

  const isExistBook=storedBook.find(book=>book.bookId==currentBook.bookId) 
  if(isExistBook){
    alert("already exist")
    
  
  }
  else{
    setStoredBook([...storedBook,currentBook])
    alert(`${currentBook.bookName} is addeed`)
  }

}
const handleWishlist=(currentBook)=>{
    console.log(currentBook,"currentBook")

const isExistReadList=storedBook.find(book=>book.bookId===currentBook.bookId)

if(isExistReadList){
  alert("ehis book is already in  read list")
  return
}
const isExistBook=wishlist.find(book=>book.bookId==currentBook.bookId)

  if(isExistBook){
    alert("already exist")
    
  
  }
  else{
    setWishlist([...wishlist,currentBook])
    alert(`${currentBook.bookName} is addeed`)
  }

}

const data={
  storedBook,
  setStoredBook,
  handleMarkAsRead,
  setWishlist,
  wishlist,handleWishlist
}

return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;