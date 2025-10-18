import { useState } from "react";
import { questions } from "../data/missionData/MissionData";

export function useMissionsOverlay() {
  // ID da questão atualmente ativa
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  // Armazena as respostas do usuário, indexadas pelo ID da questão
  const [userAnswers, setUserAnswers] = useState({});

  // Registra se cada questão foi respondida corretamente
  const [isCorrect, setIsCorrect] = useState({});

  // Controla a exibição da mensagem de sucesso
  const [showSuccess, setShowSuccess] = useState({});

  // Define qual questão está ativa ao clicar em um card
  const handleCardClick = (questionId) => {
    setActiveQuestionId(questionId);
  };

  // Valida e envia a resposta da questão
  const handleSubmit = (questionId, e) => {
    e.preventDefault();
    const question = questions.find((q) => q.id === questionId);
    const userAnswer = userAnswers[questionId] || "";

    const correct =
      userAnswer.trim().toLowerCase() ===
      question.respostaCorreta.toLowerCase();

    setIsCorrect((prev) => ({ ...prev, [questionId]: correct }));
    setShowSuccess((prev) => ({ ...prev, [questionId]: correct }));

    // Oculta a mensagem de sucesso após 2 segundos
    if (correct) {
      setTimeout(() => {
        setShowSuccess((prev) => ({ ...prev, [questionId]: false }));
      }, 2000);
    }
  };

  // Atualiza a resposta do usuário conforme ele digita
  const handleAnswerChange = (questionId, value) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: value }));

    // Reseta o estado de correção caso o usuário altere a resposta
    if (isCorrect[questionId]) {
      setIsCorrect((prev) => ({ ...prev, [questionId]: false }));
    }
  };

  // Retorna o status visual da questão (ativa, concluída ou inativa)
  const getQuestionStatus = (questionId) => {
    if (isCorrect[questionId]) return "completed";
    if (activeQuestionId === questionId) return "active";
    return "inactive";
  };

  // Retorna o texto descritivo do status da questão
  const getQuestionStatusText = (questionId) => {
    if (isCorrect[questionId]) return "Concluído";
    return "Clique para responder";
  };

  return {
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
  };
}