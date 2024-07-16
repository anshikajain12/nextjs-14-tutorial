"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("placing your order successfully!!");
        router.push("/");
        // router.replace("/");
        // router.back();
        // router.forward();
    }
    return (<>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place order</button>
    </>
    );
}