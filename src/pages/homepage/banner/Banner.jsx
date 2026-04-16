import React from 'react';

const Banner = () => {
    return (
        <div className='rounded-lg  container mx-auto bg-amber-400'>
            <div className="hero bg-base-500 min-h-[60vh]">

  <div className="hero-content flex-col lg:gap-48 lg:flex-row-reverse w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookself</h1>
     
      <button className="btn mt-10 btn-primary">View the list</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;