import Header from "../../components/header/header";
import ItemSelect from "../../components/organisms/ItemSelect/ItemSelect";

export default function Lobby() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
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

      <div className="relative z-10 pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
              SELECIONE SEU AGENTE
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Escolha seu agente favorito e personalize suas habilidades para
              dominar o campo de batalha
            </p>
          </div>

          <ItemSelect />
        </div>
      </div>
    </div>
  );
}