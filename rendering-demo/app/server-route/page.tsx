import { ImageSlider } from "@/components/imageSlider";
import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoutePage() {
    console.log("Server Route render")
    const result = serverSideFunction();
    return (
        <>
            <h1>ServerRoute Page</h1>
            <p>{result}</p>
            <ImageSlider />
        </>
    )
}