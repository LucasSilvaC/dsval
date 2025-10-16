import { ArrowLeft, Home, Store, TicketMinus, User, Play } from "lucide-react";
import { OnHover } from "../atoms/OnHover/onHover";
import NavigationItem from "../atoms/NavigationItem/NavigationItem";

export default function Header() {
  return (
    <header className="relative w-full z-10 justify-center h-[4rem] items-center flex text-white bg-black/20 backdrop-blur-sm border-b border-red-600/30 shadow-[0_0_15px_rgba(255,70,85,0.2)]">
      <div className="w-[96%] h-full justify-between flex items-center">
        <div className="flex items-center gap-6">
          <OnHover>
            <div className="h-auto w-auto flex gap-3 text-xl items-center cursor-pointer hover:text-red-500 transition-all duration-200">
              <ArrowLeft className="text-white" />
              <span className="font-semibold">Voltar</span>
            </div>
          </OnHover>
        </div>

        <div className="h-full w-auto">
          <button
            className="relative h-full px-10 w-[200px] cursor-pointer font-bold tracking-widest uppercase
            text-white bg-gradient-to-br from-[#ff4655]
            shadow-[0_0_10px_rgba(255,70,85,0.6)] 
            transition-all duration-300 
            hover:scale-105 hover:shadow-[0_0_20px_rgba(255,70,85,0.9)] 
            active:scale-95 flex items-center justify-center"
            style={{
              clipPath: "polygon(8% 0%, 100% 0, 92% 100%, 0 100%)",
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">Play</span>
            </div>
          </button>

        </div>

        <div className="flex items-center gap-6">
          <NavigationItem icon={Home} />
          <NavigationItem icon={Store} />
          <NavigationItem icon={TicketMinus} />
          <NavigationItem icon={User} />
        </div>
      </div>
    </header>
  );
}
