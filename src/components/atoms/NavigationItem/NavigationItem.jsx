import { OnHover } from "../OnHover/onHover"

const NavigationItem = ({ icon: Icon }) => (
    <OnHover>
        <div className="flex items-center gap-2 text-white cursor-pointer">
            <Icon className="w-5 h-5" />
        </div>
    </OnHover>
);

export default NavigationItem;