// export const fetchCache = "default-cache";
import { cookies } from "next/headers";
type Product = {
    id: number,
    title: string,
    price: number,
    description: string
};

/**
 * npm run dev
 * node server
 * @returns this will reload when you will refresh the page
 */
// export default async function ProductPage() {
//     const response = await fetch("http://localhost:3001/products", {
//         cache: "no-store",
//     });
//     const products = await response.json();
//     return (
//         <div className="grid grid-cols-2 gap-2 p-4">
//             {products.map((product: Product) => (
//                 <div
//                     key={product.id}
//                     className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600"
//                 >
//                     <div className="flex flex-col space-y-1">
//                         <h2 className="text-lg font-semibold">{product.title}</h2>
//                         <p className="text-sm ">${product.price}</p>
//                     </div>
//                     <div className="flex flex-col space-y-1 items-end">
//                         <div className="text-md">{product.description}</div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

/**
 * npm run dev
 * node server
 * @returns
 * this will update once the products/1 
 * after when ever you refresh the page this request will not load again and again
 */
// export default async function ProductPage() {
//     const detailResponse = await await fetch("http://localhost:3001/products/1");
//     const detail = await detailResponse.json();
    
//     const response = await fetch("http://localhost:3001/products", {
//         cache: "no-store",
//     });
//     const products = await response.json();
//     return (
//         <div className="grid grid-cols-2 gap-2 p-4">
//             {products.map((product: Product) => (
//                 <div
//                     key={product.id}
//                     className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600"
//                 >
//                     <div className="flex flex-col space-y-1">
//                         <h2 className="text-lg font-semibold">{product.title}</h2>
//                         <p className="text-sm ">${product.price}</p>
//                         <p className="text-sm ">Particular product price: ${detail.price}</p>
//                     </div>
//                     <div className="flex flex-col space-y-1 items-end">
//                         <div className="text-md">{product.description}</div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default async function ProductPage() {
//         const response = await fetch("http://localhost:3001/products");
//         const products = await response.json();

//         const cookieStore= cookies();
//         const theme = cookieStore.get("theme");

//         const detailResponse = await fetch("http://localhost:3001/products/1");
//         const detail = await detailResponse.json();

//         return (
//             <div className="grid grid-cols-2 gap-2 p-4">
//                 {products.map((product: Product) => (
//                     <div
//                         key={product.id}
//                         className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600"
//                     >
//                         <div className="flex flex-col space-y-1">
//                             <h2 className="text-lg font-semibold">{product.title}</h2>
//                             <p className="text-sm ">Detail price:  ${detail.price}</p>
//                         </div>
//                         <div className="flex flex-col space-y-1 items-end">
//                             <div className="text-md">{product.description}</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         )
// }

/**
 * Revalidation
 */

export default async function ProductPage() {
    const response = await fetch("http://localhost:3001/products",{
        next:{
            revalidate:10,
        },
    });
    const products = await response.json();
    return (
        <div className="grid grid-cols-2 gap-2 p-4">
            {products.map((product: Product) => (
                <div
                    key={product.id}
                    className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600"
                >
                    <div className="flex flex-col space-y-1">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-sm ">${product.price}</p>
                    </div>
                    <div className="flex flex-col space-y-1 items-end">
                        <div className="text-md">{product.description}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}