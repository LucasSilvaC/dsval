import { ArrowLeft, Home, Store, TicketMinus, User } from "lucide-react";
import { OnHover } from "../atoms/OnHover/onHover";
import NavigationItem from "../atoms/NavigationItem/NavigationItem";

export default function Header() {
  return (
    <header className="relative w-full z-10 flex items-center justify-center h-[4rem] text-white bg-black/20 backdrop-blur-sm border-b border-red-600/30 shadow-[0_0_15px_rgba(255,70,85,0.2)]">
      <div className="w-[96%] h-full flex items-center justify-between">
        
        {/* Botão de voltar */}
        <div className="flex items-center gap-6">
          <OnHover>
            <button
              className="flex items-center gap-3 text-xl cursor-pointer hover:text-red-500 transition-all duration-200"
              aria-label="Voltar"
            >
              <ArrowLeft className="text-white" aria-hidden="true" />
              <span className="font-semibold">Voltar</span>
            </button>
          </OnHover>
        </div>

        {/* Botão central "Play" */}
        <div className="h-full flex items-center">
          <button
            className="relative h-full px-10 w-[200px] cursor-pointer font-bold tracking-widest uppercase text-white 
                       bg-gradient-to-br from-[#ff4655] shadow-[0_0_10px_rgba(255,70,85,0.6)] 
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,70,85,0.9)] 
                       active:scale-95 flex items-center justify-center"
            style={{ clipPath: "polygon(8% 0%, 100% 0, 92% 100%, 0 100%)" }}
            aria-label="Iniciar jogo"
          >
            <span className="text-2xl">Play</span>
          </button>
        </div>

        {/* Ícones de navegação à direita */}
        <div className="flex items-center gap-6">
          <NavigationItem icon={Home} ariaLabel="Início" />
          <NavigationItem icon={Store} ariaLabel="Loja" />
          <NavigationItem icon={TicketMinus} ariaLabel="Missões" />
          <NavigationItem icon={User} ariaLabel="Perfil" />
        </div>
      </div>
    </header>
  );
}