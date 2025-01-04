import { useContext, useEffect } from "react"
import { Shopcontext } from "../Context/ShopContext"
import cart from "../assets/cartEmpty.png"
import { X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Cart(){

    const {getTotalCart, all_product, cartItems, remove, totalcartItems} = useContext(Shopcontext)

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return(
        <div className="mt-32">
            <div className="max-w-7xl mx-auto my-10 p-4">
              {totalcartItems() === 0 ? (
                <div className="flex items-center justify-center">
                    <img src={cart}  />
                </div>
              ):(
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4">
                        <p>Produtos</p>
                        <p>Título</p>
                        <p className="hidden md:block">Preço</p>
                        <p className="hidden md:block">Qualidade</p>
                        <p className="hidden md:block"T>Total</p>
                        <p className="hidden md:block">Remover</p>
                    </div>
                    <hr className="bg-gray-300 border-0 h-[2px] mt-2" />
                    {all_product.map((e) => {
                        if(cartItems[e.id] > 0){
                            return(
                                <div key={e.id}>
                                    <div className="text-gray-500 font-semibold text-sm sm:text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4 gap-2">
                                        <img src={e.image} className="h-16 w-16 object-cover" />
                                        <p>{e.name}</p>
                                        <p className="hidden md:block">R$ {e.new_price}</p>
                                        <button className="w-16 h-12 bg-[#fff] border border-gray-300">{cartItems[e.id]}</button>
                                        <p className="hidden md:block">R$ {e.new_price * cartItems[e.id]}</p>
                                        <X className="cursor-pointer text-[#f00]" onClick={() => {remove(e.id)}} />
                                    </div>
                                    <hr className="bg-gray-300 border-0 h-[2px] my-2" />
                                </div>
                            )
                        }
                        return null
                    })}
                    <div className="flex flex-col lg:flex-row my-12 gap-10 md:gap-32">
                        <div className="flex-1 flex flex-col gap-4">
                            <h1 className="text-lg font-bold">Totais do Carrinho</h1>
                            <div>
                                <div className="flex justify-between py-2">
                                    <p>Subtotal</p>
                                    <p>R$ {getTotalCart()}</p>
                                </div>
                                <hr className="bg-gray-300 border-0 h-[2px] mt-2" />
                                <div className="flex justify-between py-2">
                                    <p>Taxa de Envio</p>
                                    <p>Grátis</p>
                                </div>
                                <hr className="bg-gray-300 border-0 h-[2px] my-2" />
                                <div className="flex justify-between text-xl font-semibold">
                                    <h3>Total</h3>
                                    <h3>R$ {getTotalCart()}</h3>
                                </div>
                            </div>
                            <Link to='/login'>
                                <button className="w-full bg-w-64 h-14 bg-[#f00] text-[#fff] font-semibold text-lg">FAZER O CHECK-OUT</button>
                            </Link>
                        </div>
                        <div className="flex-1 w-full  text-lg font-semibold">
                            <p className="text-gray-600">Se você tiver um código promocional, insira-o aqui:</p>
                            <div className="w-full lg:w-80 mt-2 flex">
                                <input type="text" placeholder="CÒDIGO" className="flex-1 h-14 p-2 bg-gray-200" />
                                <button className="h-14 w-32 bg-[#000] text-[#fff]">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
              )}
            </div>
        </div>
    )
}