import { useContext, useEffect } from "react"
import {Shopcontext} from "../Context/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrum from "./Breadcrum"
import ProductDisplay from "../Components/ProductDisplay"
import Descript from "./Descript"
import NewCollection from "./NewColletion"

export default function SingleProduct(){

    const {all_product} = useContext(Shopcontext)

    const {productId} = useParams()

    const product = all_product.find((e) => e.id === Number(productId))

    useEffect(() => {
        window.scroll(0,0)
    })

    return(
        <div className="max-w-7xl mx-auto mb-32 mt-32">
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <Descript />
            <NewCollection />
        </div>
    )
}