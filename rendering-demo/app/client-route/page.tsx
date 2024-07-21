"use client";

/**
 * When you use "use client" then you cannot use the serverSideFunction()
 * because it is only for server-only 
*/


// import { serverSideFunction } from "@/utils/server-utils";
// import { ImageSlider } from "@/components/imageSlider";
// export default function ClientRoutePage(){
//     console.log("client Route render")
//     // const result = serverSideFunction();
//     return (
//         <>
//             <h1>Client Route Page</h1>
//             {/* <p>{result}</p> */}
//             {/* <ImageSlider/> */ }
//         </>
//     )
// }

import { useTheme } from "@/components/theme-provider";

export default function ClientRoutePage() {
    const theme = useTheme();
    const settings = {
        dots: true,
    }
    console.log("client Route render")
    return (
        <>
            <h1 style={{
                color: theme.colors.secondary
            }}>Client Route Page</h1>
        </>
    )
}