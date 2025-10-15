import { Play, Plus } from "lucide-react";
import GradientButton from "../../atoms/GradientButton/GradientButton";

export default function HeaderButton() {
    return (
        <div className="h-full items-center flex gap-4">
            <GradientButton
                gradientFrom="from-blue-600 to-purple-600"
                gradientTo="hover:from-blue-700 hover:to-purple-700"
            >
                <Play className="w-4 h-4 mr-2" />
                Jogar
            </GradientButton>
            
            <GradientButton
                gradientFrom="from-orange-500 to-red-500"
                gradientTo="hover:from-orange-600 hover:to-red-600"
            >
                <Plus className="w-4 h-4 mr-2" />
                Selecionar Agente
            </GradientButton>
        </div>
    )
}