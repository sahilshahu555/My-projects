"use client" // use client 👉 For Client Component

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'


const AddEmployee = () => {
    const router = useRouter();
    // Employee State 
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        address: "",
        salary: ""
    });

    // Create Add Employee Detail Function 
    const addEmployeeDetail = async () => {

      

        try {
           

            const res = await fetch(`/api/employee`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: employee.name,
                    email: employee.email,
                    address: employee.address,
                    salary: employee.salary
                })
            })
    
            // Create Data 
            const data = await res.json();
            alert(data?.message) // Success Message
            if(data?.message === "Employee created successfully"){
            router.push('/employee/employeelist')
            }
        } catch (error) {
            alert(error.message) // Error Message
            console.log(error)
        }
       
        // Destructure Data 
        // const { message, error } = data;

        // Condition 
        setEmployee({
            name: "",
            email: "",
            address: "",
            salary: ""
        })
           
            
        
    }

    return (
        <div className=' container bg-gray-400 w-full m-auto flex justify-center items-center h-screen'>
            {/* Main  */}
            <div className="form border shadow-md border-white  bg-blue-200 rounded-xl py-6 px-9  ">
                {/* Top  */}
                <div className="top">
                    {/* Top-Child  */}
                    <div className="flex gap-[40px] mb-5 items-center ">
                        {/* Link  */}
                        <Link href='/'>
                            {/* Svg Icon  */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </Link>

                        {/* Text  */}
                        <h1 className='text-xl -ml-5 traking-wider font-semibold'>
                            Add Employee Detail
                        </h1>
                    </div>
                </div>

                {/* Bottom  */}
                <div className="bottom m-5 lg:w-full">

                    {/* Employee Name Input  */}
                    <div className=" ">
                        <input
                            type="text"
                            name='employeeName'
                            placeholder='Enter name'
                            value={employee.name}
                            onChange={(e) => setEmployee({
                                ...employee,
                                name: e.target.value
                            })}
                            className='border border-gray-400 hover:border-gray-700 md:w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>

                    {/* Employee Email Input  */}
                    <div className="">
                        <input
                            type="email"
                            name='employeeEmail'
                            placeholder='Enter email'
                            value={employee.email}
                            onChange={(e) => setEmployee({
                                ...employee,
                                email: e.target.value
                            })}
                            className='border border-gray-400 hover:border-gray-700 md:w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>

                    {/* Employee Address Input  */}
                    <div className="">
                        <input
                            type="text"
                            name='employeeAddress'
                            placeholder='Enter address'
                            value={employee.address}
                            onChange={(e) => setEmployee({
                                ...employee,
                                address: e.target.value
                            })}
                            className='border border-gray-400 hover:border-gray-700 md:w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>

                    {/* Employee Salary Input  */}
                    <div className="">
                        <input
                            type="number"
                            name='employeeSalary'
                            placeholder='Enter salary'
                            value={employee.salary}
                            onChange={(e) => setEmployee({
                                ...employee,
                                salary: e.target.value
                            })}
                            className='border border-gray-400 hover:border-gray-700 md:w-96 px-1.5 py-1.5 rounded-md outline-none mb-8 placeholder-gray-400'
                        />
                    </div>

                    {/* Add Button  */}
                    <div>
                        <button onClick={addEmployeeDetail}
                            className=' bg-red-400 hover:bg-red-500  w-full py-1.5 border border-gray-400 rounded-md font-medium mb-5'>
                            Add Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployee;