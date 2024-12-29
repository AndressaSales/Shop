import banner from "../assets/background-one.jpg"

export default function BannerPart02(){
    return(
        <div className="bg-gray-100 py-24">
            <div className="relative max-w-7xl mx-auto md:rounded-2xl bg-cover h-[550px] md:h-[600px]" style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
                <div className="absolute inset-0 bg-[#000] bg-opacity-50 md:rounded-2xl flex flex-col items-center justify-center">
                    <div className="text-center text-[#fff] px-4">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 ">Coleção de Inverno 2025</h1>
                        <p className="text-lg md:text-xl mc-6">Descubra as tendências mais quentes para a estação. Oferta por tempo limitado: 20% de desconto em todas as novidades</p>
                        <button className="bg-red-500 hover:bg-red-600 text-[#fff] font-semibold py-2 px-4 mt-3 md:px-6 rounded-lg transition duration-300">Compre Agora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}