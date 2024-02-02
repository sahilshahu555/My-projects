import Link from 'next/link';
import React from 'react';


const Home = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>
      {/* main  */}
      <div className="">
      {/* View Employee Details button */}
        <Link href='/employee/employeelist'>
          <button
            className='border border-gray-400 rounded-lg font-medium px-3 py-1.5 mx-2'>
            View Employee Details
          </button>
        </Link>

        {/* Add Employee button */}
        <Link href='/employee/addemployee'>
          <button
            className='border border-gray-400 rounded-lg font-medium px-3 py-1.5'>
            Add Employee
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Home;