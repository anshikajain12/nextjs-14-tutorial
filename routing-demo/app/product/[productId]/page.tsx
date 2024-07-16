import { Metadata } from "next";

export const generateMetadata= async ({params}:props):Promise<Metadata>=>{
    const title= await new Promise(resolve=>{
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100);
    })
    return {
        title: `Product ${title}`,
    }
}
type props={
    params:{productId:string};
}
export default function DynamicProductDetails({params}:props) {
    return (
        <>
            Details about product {params.productId}
        </>
    )
}