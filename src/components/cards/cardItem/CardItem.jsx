export default function CardItem() {
    return (
        <div className="z-10 w-80 h-96 bg-gradient-to-b from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg relative overflow-hidden hover:border-gray-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
            {/* Top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            
            {/* Agent placeholder area */}
            <div className="h-48 bg-gradient-to-b from-gray-800/50 to-gray-900/50 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                    </div>
                    <p className="text-sm">Agente</p>
                </div>
            </div>
            
            {/* Agent info area */}
            <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-1">Nome do Agente</h3>
                <p className="text-gray-400 text-sm mb-3">Classe do Agente</p>
                
                {/* Abilities placeholder */}
                <div className="flex gap-2 justify-center">
                    <div className="w-8 h-8 bg-gray-700 rounded border border-gray-600"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded border border-gray-600"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded border border-gray-600"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded border border-gray-600"></div>
                </div>
            </div>
            
            {/* Bottom border gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
    )
}