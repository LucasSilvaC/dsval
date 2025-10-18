export default function Card({ name, role, image, agentName, onClick }) {
  return (
    <div
      className="z-10 w-80 h-96 bg-gradient-to-b from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg relative overflow-hidden hover:border-gray-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
      onClick={onClick}
      role="button"
      aria-label={`Selecionar ${name}`}
    >
      {/* Linha decorativa superior */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        aria-hidden="true"
      />

      {/* Área da imagem e nome do agente */}
      <div className="h-48 bg-gradient-to-b from-gray-800/50 to-gray-900/50 flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={`Imagem do agente ${agentName}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl" aria-hidden="true">
                👤
              </span>
            )}
          </div>
          <p className="text-sm font-medium mt-2 text-white">{agentName}</p>
        </div>
      </div>

      {/* Conteúdo textual e ícones da função */}
      <div className="p-6 text-center">
        <h3 className="text-white font-semibold text-xl mb-2 mt-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{role}</p>

        {/* Ícones genéricos de habilidade ou categoria */}
        <div className="flex gap-3 justify-center">
          <div
            className="w-10 h-10 bg-gray-700 rounded border border-gray-600"
            aria-hidden="true"
          />
          <div
            className="w-10 h-10 bg-gray-700 rounded border border-gray-600"
            aria-hidden="true"
          />
          <div
            className="w-10 h-10 bg-gray-700 rounded border border-gray-600"
            aria-hidden="true"
          />
          <div
            className="w-10 h-10 bg-gray-700 rounded border border-gray-600"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Linha decorativa inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}