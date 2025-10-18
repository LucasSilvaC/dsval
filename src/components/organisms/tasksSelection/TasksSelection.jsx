import { useState } from "react";
import Card from "../../molecules/Card/Card";
import MissionsOverlay from "../missionsOverlay/MissionsOverlay";
import jettImage from "../../../assets/agents/jett.png";
import omenImage from "../../../assets/agents/omen.png";
import gekkoImage from "../../../assets/agents/gekko.png";
import vyseImage from "../../../assets/agents/vyse.png";

export default function TasksSelection() {
  const [isMissionsOpen, setIsMissionsOpen] = useState(false);

  // Lista de tarefas exibidas em cards
  const taskItems = [
    { title: "Missions", role: "Duelist", image: jettImage, agentName: "Jett" },
    {
      title: "Inventory",
      role: "Initiator",
      image: gekkoImage,
      agentName: "Gekko",
    },
    { title: "Camera", role: "Sentinel", image: vyseImage, agentName: "Vyse" },
    { title: "Maps", role: "Controller", image: omenImage, agentName: "Omen" },
  ];

  // Abre o overlay de missões
  const openMissions = () => {
    setIsMissionsOpen(true);
  };

  // Fecha o overlay de missões
  const closeOverlay = () => {
    setIsMissionsOpen(false);
  };

  return (
    <section
      className="relative flex flex-col gap-10 w-full"
      aria-labelledby="tasks-title"
    >
      {/* Cabeçalho da seção */}
      <header className="text-center mb-8">
        <h1
          id="tasks-title"
          className="text-2xl sm:text-5xl font-bold text-white tracking-wide drop-shadow-[0_2px_6px_rgba(255,70,85,0.4)] sm:text-3xl"
        >
          SELECIONE SUA FUNÇÃO
        </h1>
      </header>

      {/* Lista de cards de funções */}
      <div className="flex flex-col sm:flex-row gap-8 pb-6 px-4 justify-center items-center">
        {taskItems.map((task, index) => (
          <div key={index} className="flex-shrink-0">
            <Card
              name={task.title}
              role={task.role}
              image={task.image}
              agentName={task.agentName}
              onClick={task.title === "Missions" ? openMissions : undefined}
              aria-label={`Selecionar ${task.title}`}
            />
          </div>
        ))}
      </div>

      {/* Overlay de missões (renderizado apenas quando aberto) */}
      <MissionsOverlay isOpen={isMissionsOpen} onClose={closeOverlay} />
    </section>
  );
}
