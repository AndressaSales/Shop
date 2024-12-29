import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { FaFaceFrown, FaTwitter } from "react-icons/fa6"
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa"

export default function Footer(){
    return(
        <div className="bg-gray-900 text-gray-200 py-10">
            <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to='/'>
                     <img src={logo} alt="logo" className="w-32" />
                    </Link>
                    <p className="mt-2 text-sm">Roupas sustentáveis e de alta qualidade e preços acessíveis.</p>
                    <p className="mt-2 text-sm">Rua das Calçadas, n° 2025 </p>
                    <p className="text-sm">Email: suport@email.com</p>
                    <p className="text-sm">Telefone: (81) 8768-9826</p>
                </div>
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold">Atendimento ao Cliente</h3>
                    <ul className="mt-2 text-sm space-y-2">
                        <li>Entre em Contato Conosco</li>
                        <li>Envio & Devolução</li>
                        <li>Perguntas Frequentes</li>
                        <li>Acompanhamento de Pedidos</li>
                        <li>Guia de Tamanhos</li>
                    </ul>
                </div>
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold">Siga-nos</h3>
                    <div className="flex space-x-4 mt-2">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter/>
                        <FaPinterest/>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Fique por Dentro</h3>
                    <p className="mt-2 text-sm">Inscreva-se para receber ofertas especiais, brinde grátis e muito mais</p>
                    <form className="mt-4 flex">
                        <input 
                            type="text" 
                            placeholder="Seumail@gmail.com"
                            className="w-full  p-2 rounded-md bg-gray-600 text-gray-200 focus:outline-none focus:right-2 focus:ring-gray-500"
                        />
                        <button className="bg-red-600 text-[#fff] px-4 rounded-r-md hover:bg-red-700">Inscreva-se</button>
                    </form>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
                <p> &copy;{new Date().getFullYear()} <span className="text-red-500">Web Shop</span> Todos os direitos reservados</p>
            </div>
        </div>
    )
}