import Header from "../../components/header/header";
import TasksSelection from "../../components/organisms/tasksSelection/TasksSelection";

export default function Lobby() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/menuTheme.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      <Header />

      <main className="flex flex-col z-10 justify-center items-center flex-1 px-4 py-12">
        <div className="w-full mx-auto flex flex-col gap-12 items-center">
          <TasksSelection />
        </div>
      </main>
    </div>
  );
}