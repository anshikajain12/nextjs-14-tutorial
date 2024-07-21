import { Suspense } from "react"

import { Product } from "@/components/product"
import { Reviews } from "@/components/review"

export default function ProductDetailsPage() {
    return (
        <>
            <h1>Product Detail Page</h1>
            <Suspense fallback={<p>Loading Product Details..</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading Reviews..</p>}>
                <Reviews />
            </Suspense>
        </>
    )
}