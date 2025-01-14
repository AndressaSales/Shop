import { useContext } from "react"
import bannerWomen from "../assets/bannerWomen.png"
import {Shopcontext} from "../Context/ShopContext"
import Item from "../Components/Item"

export default function Womens(){

    const {all_product} = useContext(Shopcontext)

    const womenProduct = all_product.filter((product) => product.category === 'women')

    return(
        <div className="md:mt-32 mt-20 max-w-7xl mx-auto">
            <div>
                <img src={bannerWomen} className="w-screen px-6" />
            </div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bols tracking-tight text-gray-900 text-center md:text-start">Coleção Feminina</h2>
                <div className="mt-6 grid gris-col-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        womenProduct.map((product) => {
                            return <Item key={product.id} product={product} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}