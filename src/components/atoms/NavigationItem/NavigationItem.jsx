import { OnHover } from "../OnHover/onHover"

const NavigationItem = ({ icon: Icon, label }) => (
    <OnHover>
        <div className="flex items-center gap-2 text-white cursor-pointer">
            <Icon className="w-5 h-5" />
            <span className="text-sm">{label}</span>
        </div>
    </OnHover>
);

export default NavigationItem;