import { cookies } from "next/headers"

export default function DMPage() {
    const cookiesStore = cookies();
    const theme = cookiesStore.get("theme");
    console.log(theme);
    console.log("Dynamic rendering server component")
    return <h1>Dynamic Rendering Page {new Date().toLocaleTimeString()}</h1>
}