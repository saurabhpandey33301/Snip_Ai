import { NextResponse } from "next/server";
import { inngest } from "../../../inngest/client";

export async function POST(req){
    const formData = await req.json();
    const result = await inngest.send({
        name:"generate-video-data",
        data:{
            ...formData
        }
    })
    return NextResponse.json({result})
}