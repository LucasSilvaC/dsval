import Header from "../../components/header/header"
import ItemSelect from "../../components/organisms/ItemSelect/ItemSelect"

export default function Lobby() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-0"></div>
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1614730321147-d160b7f905a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="relative z-10 pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
              SELECIONE SEU AGENTE
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Escolha seu agente favorito e personalize suas habilidades para dominar o campo de batalha
            </p>
          </div>

          {/* Agent selection cards */}
          <ItemSelect />
        </div>
      </div>
    </div>
  )
}
