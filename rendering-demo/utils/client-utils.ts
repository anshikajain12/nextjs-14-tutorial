import "client-only"
export const clientSideFunction = () => {
    console.log(
        `use window objects,
            use localStorage`
    );
    return "Client result";
}