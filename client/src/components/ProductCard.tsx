interface ProductProps {
    name: String
    price: Number
}

export default function ProductCard({ name, price }: ProductProps) {
    return (
        <div className="p-10 bg-gray-300 transition-colors cursor-pointer hover:bg-gray-400 motion-reduce:transform-none">
            <img src="" alt="" />
            <h1>{ name }</h1>
            <p>{ price.toString() }</p>
        </div>
    )
}