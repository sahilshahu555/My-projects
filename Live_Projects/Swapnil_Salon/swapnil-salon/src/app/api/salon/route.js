import { connectDb } from "@/Database/db";
import { Status } from "@/Models/model";
import { NextResponse } from "next/server";


connectDb();
//ROUTE 1 : GET all status By Id [http://localhost:3000/api/salon]

// export async function GET (req){

//    try {
//     const getStatus= await Status.find()
//     return NextResponse.json(getStatus)
//    } catch (error) {
//     return NextResponse.json({error : "Failed to get Status"},{status:404})
//    }
// }
//ROUTE 2 : GET single status By Id [http://localhost:3000/api/salon/statusID]

export async function GET(reuest ) {
    
const statuseID='65c08ed2438003f526dcb4a4';


    try {
        // Create Get Single status
        const data = await Status.findById(statuseID)

        // Return getSingleEmployee and status 
        return NextResponse.json(
            {data},{ status: 200,}
        )
    } catch (error) {
        console.log(error);

        // Return Error And status 
        return NextResponse.json(
            {
                error: 'failed to get single employee',
            },
            {
                status: 404,
            }
        )
    }
}

//ROUTE 3 : UPDATE[PUT] Status Detail [http://localhost:3000/api/salon/statusID]

export async function PUT(req) {
    // Get employeeId From params 
    const statuseID='65c08ed2438003f526dcb4a4';

 
    // Get Data From Frontend 
    const { status } = await req.json();
 
    try {
        // Create Employee ( Get Employee By Id )
        let statusFound = await Status.findById(statuseID);
        // set employee name 
        statusFound.status = status;
       
 
        // Create Update Employee
        const updatedStatus = await statusFound.save();
        let afterUpdateStatus = await Status.findById(statuseID);
 
        // Return updatedEmployee, message and status 
        return NextResponse.json(
            { afterUpdateStatus, message: "Status Updated Successfully"},
            { status: 201}
        )
    } catch (error) {
        console.log(error)
 
        // Return Error And Status 
      return NextResponse.json( {error: 'failed to update Stutus',}, {status: 404,})
    }
 }