"use client" // use client 👉 For Client Component

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
    // Employee State 
    const [employee, setEmployee] = useState([]);

    // Get Employee List Function 
    const getEmployeeList = async () => {
        // Fetch data from api 
        const res = await fetch(`/api/employee`)

        // Create data
        const data = await res.json();

        // Store data in employee state through setEmployee()
        setEmployee(data)
    }

    // Delete Employee Function 
    const deleteEmployee = async (_id) => {
        const res = await fetch(`/api/employee/${_id}`, {
            method: 'DELETE'
        })

        // Create Data 
        const data = await res.json();
        // console.log(data)

        // Destructure data
        const { message, error } = data

        // Condition
        if (error) {
            alert(error) // Error Message
        }
        else {
            alert(message) // Success Message
        }

        getEmployeeList(); // Call GetEmployeeList Function
    }


    useEffect(() => {
        // Call getEmployeeList Function
        getEmployeeList();
    }, []);
    // console.log(employee)
    return (
        <div className=' flex     m-auto lg:w-full  justify-center items-center '>
            {/* Main  */}
            <div className="flex flex-col">
                {/* Main-Child 1  */}
                <div className="-m-1.5 ">
                    {/* Main-Child 2  */}
                    <div className="p-1.5   ">
                        {/* Main-Child 3  */}
                        <div className="border rounded-lg shadow  ">
                            {/* Top [Svg Icon And Text]  */}
                            <div className="p-2 flex-col bg-gray-50 border-b flex gap-2 items-center">
                                {/* link */}
                                <Link href='/'>
                                    {/* svg icon  */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </Link>

                                {/* Text  */}
                                <h1 className=' text-center text-2xl font-semibold'>
                                    Employee Detail List
                                </h1>
                            </div>

                            {/* Table  */}
                            <table className="  lg:w-full bg-red-300 divide-y divide-gray-200 ">
                                {/* Thead  */}
                                <thead className="bg-gray-50 w-36 ">
                                    <tr>
                                        {/* S.No. */}
                                        <th
                                            scope="col"
                                            className="px-1  py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            S.No.
                                        </th>

                                        {/* Employee Name */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Name
                                        </th>

                                        {/* Email */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Email
                                        </th>

                                        {/* Address  */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Address
                                        </th>

                                        {/* Salary */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Salary
                                        </th>

                                        {/* Action  */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Action
                                        </th>

                                        {/* Action */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {employee?.map((item, index) => {
                                    const { _id, name, email, address, salary } = item
                                    return (
                                        // tbody 
                                        <tbody key={index} className="divide-y divide-gray-200 w-36 ">
                                            <tr className='hover:bg-blue-200'>
                                                {/* S.No  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                                    {index + 1}.
                                                </td>

                                                {/* Name  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                                    {name}
                                                </td>

                                                {/* Email  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    {email}
                                                </td>

                                                {/* Address  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    {address}
                                                </td>

                                                {/* Salary  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    ₹ {salary}
                                                </td>

                                                {/* Edit Button */}
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link href={`/employee/${_id}`} className="text-green-600">
                                                        Edit
                                                    </Link>
                                                </td>

                                                {/* Delete Button */}
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="text-red-600 cursor-pointer " onClick={() => {
                                                        deleteEmployee(_id)
                                                    }}>
                                                        Delete
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeList;