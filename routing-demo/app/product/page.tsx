import Link from "next/link";

export default function ProductList() {
    const productId=100;
    return (
        <>
        <Link href='/'>Home</Link>
            <h1>Product list</h1>
            <ol>
                {/* normal format of linking */}
                <li><Link href='product/1'>Product 1</Link></li>
                <li><Link href='product/2'>Product 2</Link></li>
                {/* when you use the replace property you will click on back arrow you will redirect to the home or starting page*/}
                <li><Link href='product/3' replace>Product 3</Link></li> 
                {/* linking to dynamic linking */}
                <li><Link href={`product/${productId}`}>Product {productId}</Link></li>
            </ol>
        </>
    )
}