"use client"
/**
 * this method only show the error message
 * @param param0 
 * @returns 
 */
// export default function ErrorBoundary({ error }: {
//     error: Error
// }) {
//     return (
//         <div>
//             error message: {error.message}
//         </div>
//     )
// }

/**
 * this method shows error message and try to resolve the error
 * @param param0 
 * @returns 
 */
export default function ErrorBoundary({ error,reset }: {
    error: Error,
    reset:()=>void;
}) {
    return (
        <div>
            {error.message} 
            <button onClick={reset}>Try again</button>
        </div>
    )
}