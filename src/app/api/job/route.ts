import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"
export const dynamic = 'force-dynamic';
export const revalidate = 0;


export async function GET(){
    try {
        const jobs = await prisma.job.findMany({
            orderBy : {
                createdAt : 'desc'
            }
        })
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