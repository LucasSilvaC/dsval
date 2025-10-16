import CardItem from "../../cards/cardItem/CardItem";

export default function TasksSelection() {
  const agentes = [
    { nome: "Missoes", classe: "Duelista" },
    { nome: "Sova", classe: "Iniciador" },
    { nome: "Killjoy", classe: "Sentinela" },
    { nome: "Omen", classe: "Controlador" },
  ];

  return (
    <section className="relative flex flex-col gap-10 w-full">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white tracking-wide drop-shadow-[0_2px_6px_rgba(255,70,85,0.4)]">
          SELECIONE SEU AGENTE
        </h1>
      </header>

      <div className="flex gap-8 overflow-x-auto pb-6 px-4 scrollbar-hide justify-center">
        {agentes.map((agente, index) => (
          <div key={index} className="flex-shrink-0">
            <CardItem nome={agente.nome} classe={agente.classe} />
          </div>
        ))}
      </div>
    </section>
  );
}