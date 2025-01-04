import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function Login(){

    const [password, setPassword] = useState(false)

    const tooglePassword = () => {
        setPassword(!password)
    }

    return(
       <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
            <div className="w-full max-w-md p-8 space-y-4 bg-[#fff] shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold text-center text-gray-800">Entre na Sua Conta</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Endereço de Email:</label>
                        <input 
                            type="text" placeholder="Seuemaill@gmail.com"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-red-300 focus:outline-none"
                            required
                         />
                         <div className="relative">
                            <label htmlFor="password" className="block mb-2 font-medium text-gray-600">Senha</label>
                            <input 
                                type={password ? "text" : "password"} 
                                className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-red-300 focus:outline-none"
                            />
                            <button type="button" onClick={tooglePassword} className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700">
                                {password ? <Eye className="w-5 h-4" /> : <EyeOff className="w-5 h-5" />}
                            </button>
                         </div>
                    </div>
                    <button type="button" className="w-full px-4 py-2 text-[#fff] bg-[#f00] rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300">Conecte-se</button>
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Não tem uma conta? {""}
                        <a href="#" className="text-red-500 hover:underline">Inscrever-se</a>
                    </p>
                </div>
            </div>
       </div>
    )
}