import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';


const Books = () => {

     const {storedBook,wishlist}=useContext(BookContext)
        // console.log(storedBook,wishlist,"bookcontext")

        const [sortingType,setSortingType]=useState("")

        console.log(sortingType)
    return (
        <div>
             <br />
           
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Sort the product</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>setSortingType('price')}><a> By Price</a></li>
    <li onClick={()=>setSortingType('rating')}><a>By Rating</a></li>
  </ul>
</div>

             <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2> Read list:{storedBook.length}</h2>
    <ListedReadList sortingType={sortingType}/>
    </TabPanel>
    <TabPanel>
      <h2> Wish list:{wishlist.length}</h2>
    <ListedWishList sortingType={sortingType}/>
    </TabPanel>
  </Tabs>
        </div>
        
    );
};

export default Books;