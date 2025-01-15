import { prisma } from "@/lib/db"
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const body =await  req.json()
        const job = await prisma.job.create({
            data : {
                imageUrl : body.imageUrl,
                jobTitle  : body.jobTitle,
                jobDescription : body.jobDescription,
                companyName : body.companyName,
                location : body.location,
                jobType : body.jobType,
                minSalary : body.minSalary,
                maxSalary : body.maxSalary
            }
        })

        return NextResponse.json(
            { message: 'Job created successfully', job }, 
            { status: 201 }
          );
        
    } catch (error) {
        console.log('[JOB_CREATION_ERROR]',error)
        return NextResponse.json({
            error : 'Error creating a job',

        }, {
            status : 500
        })
        
    }

}


export async function GET(){
    try {
        const jobs = await prisma.job.findMany()
        return NextResponse.json({
            message :"Fetched Job SuccessFully", jobs
        })
        
    } catch (error) {
        console.log('[JOB_FETCH_ERROR]',error)
        return NextResponse.json({
            error : 'Error Fetching Jobs'
        }, {
            status : 500
        }
    )
        
    }
}