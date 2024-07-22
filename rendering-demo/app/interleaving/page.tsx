import { ClientComponentOne } from "@/components/client-component-one";
import { ClientComponentTwo } from "@/components/client-component-two";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterLeaving() {
    return (
        <>
            <h1>Interleaving page</h1>
            <ClientComponentTwo/>
            <ServerComponentOne />
        </>
    )
}