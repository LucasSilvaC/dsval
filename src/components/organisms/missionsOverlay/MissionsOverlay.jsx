import { useMissionsOverlay } from "../../../hooks/useMissionsOverlay";

export default function MissionsOverlay({ isOpen, onClose }) {
  const {
    activeQuestionId,
    userAnswers,
    isCorrect,
    showSuccess,
    questions,
    handleCardClick,
    handleSubmit,
    handleAnswerChange,
    getQuestionStatus,
    getQuestionStatusText,
  } = useMissionsOverlay();

  // Não renderiza o overlay se estiver fechado
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Missões"
    >
      {/* Botão para fechar o overlay */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 z-50 p-2 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg transition-colors backdrop-blur-sm border border-gray-600"
        aria-label="Fechar"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Container principal das missões */}
      <div className="w-full max-w-6xl max-h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
          {questions.map((question) => (
            <div
              key={question.id}
              onClick={() => handleCardClick(question.id)}
              className={`relative w-56 h-56 bg-gradient-to-b from-gray-900/70 to-gray-800/60 border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 backdrop-blur-sm font-poppins
                ${
                  getQuestionStatus(question.id) === "active"
                    ? "border-blue-500 shadow-[0_0_15px_2px_rgba(37,99,235,0.25)] scale-[1.04]"
                    : "border-gray-700 hover:border-gray-600 hover:shadow-[0_0_10px_1px_rgba(37,99,235,0.15)]"
                }`}
              role="button"
              aria-label={`Missão: ${question.titulo}`}
            >
              {/* Camada de gradiente para leitura do texto */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Título e subtítulo da missão */}
              <div className="absolute top-3 left-3 right-3 z-20">
                <h3 className="text-sm font-semibold text-white leading-tight mb-0.5">
                  {question.titulo}
                </h3>
                <p className="text-blue-400 text-[11px] font-medium">
                  {question.missao}
                </p>
              </div>

              {/* Área de conteúdo dinâmico (formulário ou status) */}
              <div className="absolute bottom-3 left-3 right-3 z-20">
                {activeQuestionId === question.id ? (
                  <form
                    onSubmit={(e) => handleSubmit(question.id, e)}
                    className="space-y-2"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Responder à missão ${question.titulo}`}
                  >
                    {/* Descrição da missão */}
                    <p className="text-gray-300 text-[11px] leading-snug mb-1">
                      {question.descricao}
                    </p>

                    {/* Campo de resposta e botão de envio */}
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={userAnswers[question.id] || ""}
                        onChange={(e) =>
                          handleAnswerChange(question.id, e.target.value)
                        }
                        placeholder="Digite sua resposta..."
                        className="flex-1 px-2 py-1.5 bg-gray-900/50 border border-gray-600 text-white placeholder-gray-500 text-[11px] focus:outline-none focus:border-blue-500 transition-all"
                        aria-label="Campo de resposta"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] transition-colors"
                      >
                        OK
                      </button>
                    </div>

                    {/* Feedback de resposta incorreta */}
                    {isCorrect[question.id] === false && (
                      <div className="flex justify-center mt-2">
                        <img
                          src="/src/assets/stickers/breachError.webp"
                          alt="Resposta incorreta"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    )}

                    {/* Feedback de resposta correta */}
                    {showSuccess[question.id] && (
                      <div className="flex justify-center mt-2">
                        <img
                          src="/src/assets/stickers/wingmanWin.gif"
                          alt="Resposta correta"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    )}
                  </form>
                ) : (
                  // Estado padrão do card
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <p className="text-gray-400 text-[11px]">
                      {getQuestionStatusText(question.id)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
