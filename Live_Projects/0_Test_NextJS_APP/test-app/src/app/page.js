import Link from 'next/link';
import React from 'react';


const Home = () => {
  return (
    <div className=' flex flex-col  justify-center items-center  '>
      {/* main  */}
      <h1 className='m-10 bg-blue-300 p-5 font-bold rounded animate-bounce '>Employee Details App</h1>
      <div className="  p-10 font-semibold flex  gap-5 rounded-xl">
      {/* View Employee Details button */}
        <Link href='/employee/employeelist'>
          <button
            className='border w-36 lg:w-56 border-gray-400 hover:bg-red-500 bg-red-400 rounded-lg font-medium px-3 py-1.5 mx-2'>
            View Employee Details
          </button>
        </Link>

        {/* Add Employee button */}
        <Link href='/employee/addemployee'>
          <button
            className='border  border-gray-400 hover:bg-red-500 bg-red-400 rounded-lg font-medium px-3 py-1.5'>
            Add Employee
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Home;