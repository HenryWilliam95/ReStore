import { Product } from "../../app/models/product"

interface Props {
    products: Product[];
    addProducts: () => void;
}

export default function Catalog({products, addProducts}: Props) {
    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
            <button onClick={addProducts}>Add Products</button>
        </>
    )
}