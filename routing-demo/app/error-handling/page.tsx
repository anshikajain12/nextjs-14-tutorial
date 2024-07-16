import Link from "next/link";

export default function ErrorList() {
    const errorId=100;
    return (
        <>
        <Link href='/'>Home</Link>
            <h1>error list</h1>
            <ol>
                {/* normal format of linking */}
                <li><Link href='error-handling/1'>error 1</Link></li>
                <li><Link href='error-handling/2'>error 2</Link></li>
                {/* when you use the replace property you will click on back arrow you will redirect to the home or starting page*/}
                <li><Link href='error-handling/3' replace>error 3</Link></li> 
                {/* linking to dynamic linking */}
                <li><Link href={`error-handling/${errorId}`}>error {errorId}</Link></li>
            </ol>
        </>
    )
}