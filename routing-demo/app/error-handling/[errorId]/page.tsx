import { Metadata } from "next";

export const generateMetadata= async ({params}:props):Promise<Metadata>=>{
    const title= await new Promise(resolve=>{
        setTimeout(() => {
            resolve(`iPhone ${params.errorId}`)
        }, 100);
    })
    return {
        title: `error ${title}`,
    }
}
type props={
    params:{errorId:string};
}
export default function DynamicerrorDetails({params}:props) {
    return (
        <>
            Details about error {params.errorId}
        </>
    )
}