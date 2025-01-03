import { useContext } from "react"
import { Shopcontext } from "../Context/ShopContext"
import Item from "../Components/Item"

export default function NewColletion(){

    const {new_collections} = useContext(Shopcontext)

    return(
        <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center font-serif">Nova Coleção</h2>
            <p className="text-center mt-3 md:px-56">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className="mt-10 grid grid-cols-1 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               {
                new_collections.map((product) => {
                    return <Item key={product.id} product={product} />
                })
               }
            </div>
        </div>
    )
}