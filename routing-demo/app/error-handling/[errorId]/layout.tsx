

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ErrorDetailsLayout({
    children,
}:{
    children: React.ReactNode
}){
    const random = getRandomInt(3);
    console.log("random is:",random)

    if (random === 1 || random===2) {
        throw new Error("Error Loading ErrorId!")
    }
    return (
        <>
        {children}
        <h2>Feature errors</h2>
        </>
    )
}