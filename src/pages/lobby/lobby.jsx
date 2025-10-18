import Header from "../../components/header/header";
import TasksSelection from "../../components/organisms/tasksSelection/TasksSelection";

export default function Lobby() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Vídeo de fundo com fallback e descrição acessível */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Animação de fundo do menu principal"
      >
        <source src="" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      {/* Gradiente de sobreposição para melhorar contraste e leitura */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"
        aria-hidden="true"
      />

      {/* Cabeçalho principal da aplicação */}
      <Header />

      {/* Área principal do lobby */}
      <main
        className="flex flex-col z-10 justify-center items-center flex-1 px-4 py-12 sm:py-8"
        role="main"
        aria-label="Área principal do lobby"
      >
        {/* Seção com título e componente de seleção de tarefas */}
        <section
          className="w-full mx-auto flex flex-col gap-12 items-center sm:gap-8"
          aria-labelledby="tasks-section-title"
        >
          {/* Título da seção para leitores de tela */}
          <h1
            id="tasks-section-title"
            className="text-2xl sm:text-3xl font-bold text-white text-center"
          >
            Selecione uma tarefa para começar
          </h1>

          {/* Componente responsável pela exibição das tarefas */}
          <TasksSelection />
        </section>
      </main>
    </div>
  );
}