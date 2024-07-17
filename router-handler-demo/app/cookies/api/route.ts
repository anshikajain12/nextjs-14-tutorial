import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeader = new Headers(request.headers);
    const headerList = headers();

    cookies().set("resultsPerPage", "20");
    const theme = request.cookies.get('theme');

    console.log(requestHeader.get('Authorization'));
    
    return new Response("<h1>CookiesInRoute API Data</h1?", {
        headers: {
            "content-Type": "text/html",
            "Set-Cookies": "theme=dark"
        }
    });
}