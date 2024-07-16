"use client"
import { notFound } from "next/navigation"

// function getRandomInt(count: number) {
//     return Math.floor(Math.random() * count);
// }

export default function ReviewDetails({ params, }: {
    params: {
        errorId: string,
        reviewId: string
    };
}) {
    // const random = getRandomInt(2);

    // if (random === 1) {
    //     console.log("random is 1")
    //     throw new Error("Error Loading review!")
    // }
    
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <>
            Review: {params.reviewId} for error: {params.errorId}
        </>
    )
}