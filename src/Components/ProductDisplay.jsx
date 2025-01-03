import { useContext } from "react"
import { Shopcontext } from "../Context/ShopContext"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"

export default function ProductDisplay(props){

    const {product} = props

    const {add} = useContext(Shopcontext)

    return(
        <div className="grid gis-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0">
            <div className="flex md:1/2 gap-4">
                <div className="flex flex-col gap-4 md:h-[500px]">
                     <img src={product.image} className="md:h-[163px] w-[100px]" />
                     <img src={product.image2} className="md:h-[163px] w-[100px]" />
                     <img src={product.image1} className="md:h-[163px] w-[100px]" />
                     <img src={product.image3} className="md:h-[163px] w-[100px]" />
                </div>
                <div>
                    <img src={product.image} className="md:h-[580px]" />
                </div>
            </div>
            <div className="flex md:1/2 flex-col mt-8 md:mt-0">
                <h1 className="text-[#3d3d3d] text-4xlfont-bold">
                {product.name}</h1>
                <div className="flex items-center gap-1 text-[#1c1c1c] text-lg mt-4">
                    <Star fill="red" />
                    <Star fill="red" />
                    <Star fill="red" />
                    <Star fill="red" />
                    <Star fill="gray" />
                    <p>(343)</p>
                </div>
                <div className="flex gap-5 font-semibold items-center">
                    <div className="text-gray-500 text-2xl line-through">R${product.old_price}</div>
                    <div className="text-gray-500 text-3xl">R${product.new_price}</div>
                </div>

                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus iste, totam doloribus similique in nulla error dolores amet. Nostrum quod ex magni similique minus recusandae quos veniam vitae! Sapiente, repellat?
                </div>
                <div>
                    <h1 className="font-semibold text-gray-400 text-2xl mt-2">Selecione o Tamanho</h1>
                    <div className="flex gap-4 items-center my-4">
                        <div className="border bg-gray-100 p-4">P</div>
                        <div className="border bg-gray-100 p-4">M</div>
                        <div className="border bg-gray-100 p-4">G</div>
                        <div className="border bg-gray-100 p-4">GG</div>
                        <div className="border bg-gray-100 p-4">XG</div>
                    </div>
                </div>
                <Link to='/cart'>
                    <button className="bg-red-500 text-[#fff] px-6 py-3 my-4 w-max" onClick={() => add(product.id)}>ADICIONAR AO CARRINHO</button>
                </Link>
                <p><span className="font-semibold">Categoria: </span> Mulheres, Camiseta, Crop top</p>
                <p><span className="font-semibold">Tags:</span> Moderno</p>
            </div>
        </div>
    )
}