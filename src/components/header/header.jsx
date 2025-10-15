import { ArrowLeft, Home, Store, TicketMinus, User } from 'lucide-react';
import { OnHover } from "../atoms/OnHover/onHover"
import HeaderButton from '../molecules/headerButton/HeaderButton';
import NavigationItem from '../atoms/NavigationItem/NavigationItem';

export default function Header() {
    return (
        <header className="relative w-full z-1 justify-center h-[4rem] items-center flex text-white bg-black/20 backdrop-blur-sm">
            <div className="w-[96%] h-full justify-between flex items-center">
                <div className="flex items-center gap-6">
                    <OnHover>
                        <div className="h-auto w-auto flex gap-3 text-xl items-center">
                            <ArrowLeft className="text-white" />
                            <span className="text-white">Voltar</span>
                        </div>
                    </OnHover>
                </div>

                <div className="h-full w-auto">
                    <HeaderButton />
                </div>

                <div className="flex items-center gap-6">
                    <NavigationItem icon={Home} label="Início" />
                    <NavigationItem icon={Store} label="Loja" />
                    <NavigationItem icon={TicketMinus} label="Passaporte" />
                    <NavigationItem icon={User} label="Perfil" />
                </div>
            </div>
        </header>
    )
}