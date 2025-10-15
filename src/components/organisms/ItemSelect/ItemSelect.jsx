import CardItem from "../../cards/cardItem/CardItem";

export default function ItemSelect() {
    return (
        <div className="z-1 relative mt-8">
            <div className="flex gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide">
                {/* Array de cards vazios para simular seleção de agentes */}
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="flex-shrink-0">
                        <CardItem />
                    </div>
                ))}
            </div>
        </div>
    )
}