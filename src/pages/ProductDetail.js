import { useParams } from "react-router";

function ProductDetailPage(){
    const params = useParams();
    return(
        <>
        <h1>Products Detail!</h1>
        <p>{params.productId}</p>
        </>
    )
}

export default ProductDetailPage;