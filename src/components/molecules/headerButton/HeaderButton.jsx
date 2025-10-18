import { Play, Plus } from "lucide-react";
import GradientButton from "../../atoms/GradientButton/GradientButton";

export default function HeaderButton() {
  return (
    <div className="h-full items-center flex gap-4">
      {/* Botão para iniciar o jogo */}
      <GradientButton
        gradientFrom="from-blue-600 to-purple-600"
        gradientTo="hover:from-blue-700 hover:to-purple-700"
        aria-label="Iniciar jogo"
      >
        <Play className="w-4 h-4 mr-2" aria-hidden="true" />
        Jogar
      </GradientButton>

      {/* Botão para selecionar um agente */}
      <GradientButton
        gradientFrom="from-orange-500 to-red-500"
        gradientTo="hover:from-orange-600 hover:to-red-600"
        aria-label="Selecionar agente"
      >
        <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
        Selecionar Agente
      </GradientButton>
    </div>
  );
}