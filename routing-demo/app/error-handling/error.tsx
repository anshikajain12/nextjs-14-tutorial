"use client"

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
            <h2>error.tsx in errorId folder for handling layout.tsx error</h2>
            {error.message} 
            <button onClick={reset}>Try again in layout</button>
        </div>
    )
}