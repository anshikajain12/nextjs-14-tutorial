import { type NextRequest } from "next/server";
import { headers } from "next/headers";
export async function GET(request:NextRequest) {
    const requestHeader= new Headers(request.headers);
    const headerList= headers();
    console.log(requestHeader.get('Authorization'));
    console.log(headerList.get('Authorization'));
    return new Response("<h1>HeaderInRoute API Data</h1?",{
        headers:{
            "content-Type":"text/html"
        }
    });
}