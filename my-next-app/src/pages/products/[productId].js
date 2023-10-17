import { useRouter } from "next/router";

const ProductsDetails = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Products dynamic page: {router.query.productId}</h1>
        </div>
    );
};

export default ProductsDetails;