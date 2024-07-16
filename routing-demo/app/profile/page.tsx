import { Metadata } from "next"

export const metadata:Metadata={
    title:{
        absolute:"Profile", //when you use absolute in metadata it properly ignored the template which was added in the app/layout.tsx file
    }
}
export default function Profile() {
    return (
        <>
            My Profile
        </>
    )
}