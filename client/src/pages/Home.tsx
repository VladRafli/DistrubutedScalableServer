import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="grid grid-cols-6">
                <ProductCard name={"Test"} price={10} />
                <ProductCard name={"Test"} price={10} />
                <ProductCard name={"Test"} price={10} />
            </main>
            <Footer />
        </>
    )
}