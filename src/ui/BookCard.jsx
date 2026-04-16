import React from 'react';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <div>
     <Link to={`/bookDetails/${book.bookId}`} className='container mx-auto'>
         <div className="card active:scale-95 my-10 bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-80 h-96'
      src={book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-left">             <p>{book.bookName}</p></h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                    </Link>
        </div>
    );
};

export default BookCard;