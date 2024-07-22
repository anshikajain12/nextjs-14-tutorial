type Product = {
    id: number,
    title: string,
    price: number,
    description: string
};

export default async function ProductPage() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const response = await fetch("http://localhost:3001/products");
    const products = await response.json();
    return (
        <div className="grid grid-cols-2 gap-2 p-4">
            {products.map((product: Product) => (
                <div
                    key={product.id}
                    className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600"
                >
                    <div className="flex flex-col space-y-1">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-sm ">${product.price}</p>
                    </div>
                    <div className="flex flex-col space-y-1 items-end">
                        <div className="text-md">{product.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}