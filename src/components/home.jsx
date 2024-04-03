import React from "react";

function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-app-bg'>
      <div className='flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg bg-ui-elt-bg'>
        <img
          src='/portfolio/obouhlel.png'
          alt='avatar'
          className='rounded-full w-32 h-32'
        />
        <div className='md:ml-4 mt-4 md:mt-0'>
          <h1 className='text-4xl font-bold text-high-contrast-text'>BOUHLEL Oussama</h1>
          <h2 className='text-xl text-low-contrast-text'>Software developper</h2>
          <div className='mt-4 flex space-x-2'>
            <button className='px-4 py-2 bg-solid-bg hover:bg-hover-solid-bg text- rounded'>
              <a href='https://github.com/obouhlel'>Github</a>
            </button>
            <button className='px-4 py-2 bg-solid-bg hover:bg-hover-solid-bg text- rounded'>
              <a href='https://www.linkedin.com/in/oussama-bouhlel-7a9152294/'>LinkedIn</a>
            </button>
            <button className='px-4 py-2 bg-solid-bg hover:bg-hover-solid-bg text- rounded'>
              <a href='/portfolio/CV_BOUHLEL_Oussama.pdf'>Mon CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;