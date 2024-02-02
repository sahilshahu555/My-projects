"use client" // use client 👉 For Client Component

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

const EditEmployee = ({ params }) => {
    // Crreate Router 
    const router = useRouter()

    //Create Employee State 
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        address: "",
        salary: ""
    });

    // Destructure EmployeeId from params
    const { employeeid } = params
    // console.log(params)

    // Create Get Employee By Id Function
    const getEmployeeById = async () => {
        const res = await fetch(`http://localhost:3000/api/employee/${employeeid}`, {
            method: 'GET',
        })

        // Create Data
        const data = await res.json();
        //  console.log(data.getSingleEmployee)

        // Set Employee Data
        setEmployee({
            name: data.getSingleEmployee?.name,
            email: data.getSingleEmployee?.email,
            address: data.getSingleEmployee?.address,
            salary: data.getSingleEmployee?.salary
        })
    }


    // Create Update Employee Function
    const updateEmployee = async () => {

        const res = await
            fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/employee/${employeeid}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
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
        // console.log(data)

        // Destructure Data 
        const { message, error } = data;

        // Condition
        if (error) {
            alert(error) // Error Message
        }
        else {
            alert(message) // Success Message
            router.push('/employee/employeelist') // navigate (/employee/employeelist) route
        }
    }

    useEffect(() => {
        // Call getEmployeeById Function 
        getEmployeeById();
    }, [employeeid]);
    return (
        <div className=' container mx-auto flex justify-center items-center h-screen'>
            {/* Main  */}
            <div className="form shadow-md border border-gray-400 rounded-xl py-6 px-9  ">
                {/* Top  */}
                <div className="top">
                    {/* Top-Child  */}
                    <div className="flex gap-[40px] mb-5 items-center">
                        {/* link  */}
                        <Link href='/'>
                            {/* Svg icon  */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </Link>

                        {/* text  */}
                        <h1 className='text-2xl font-semibold'>Edit Employee Detail</h1>
                    </div>
                </div>

                {/* Bottom  */}
                <div className="bottom">
                    {/* Employee Name Input   */}
                    <div className="">
                        <input
                            type="text"
                            name='employeeName'
                            placeholder='Enter name'
                            value={employee.name}
                            onChange={(e) => setEmployee({
                                ...employee,
                                name: e.target.value
                            })}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
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
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
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
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
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
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-8 placeholder-gray-400'
                        />
                    </div>

                    {/* Update Button  */}
                    <div>
                        <button onClick={()=>{updateEmployee()}} className=' bg-gray-100 hover:bg-gray-200 w-full py-1.5 border border-gray-400 rounded-md font-medium mb-5'>Edit Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditEmployee;