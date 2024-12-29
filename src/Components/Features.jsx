import { Clock, Lock, RotateCcw, Truck } from "lucide-react"

export default function Features(){

    const features = [
        {
            id: 1,
            icon: Truck,
            text: 'Frete Grátis',
            subText: 'Em Pedidos acima de R$100'
        },
        {
            id: 2,
            icon: Lock,
            text: 'Pagamento Seguro',
            subText: '100% Protegidos'
        },
        {
            id:3,
            icon: RotateCcw,
            text: 'Devoluções Fáceis',
            subText: 'Política de Devolução de 30 dias'
        },
        {
            id: 4,
            icon: Clock,
            text: 'Suporte 24hrs',
            subText: 'Atendimento ao cliente delicado'
        }
    ]

    return(
        <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-col-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                    {
                        features.map((f) => {
                            return <div key={f.id} className="flex items-center justify-center text-center sm:text-left">
                                <f.icon className="flex-shrink-0 h-10 w-10 text-gray-600" aria-hidden="true" />
                                <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{f.text}</p>
                                    <p className="mt-1 text-sm text-gray-500">{f.subText}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}