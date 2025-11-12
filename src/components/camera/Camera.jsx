import { useState, useRef, useEffect } from 'react';

export default function Camera({ onTakePicture, onClose }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [picture, setPicture] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        startCam();
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    const startCam = async () => {
        try {
            setError(null);
            setIsLoading(true);
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    facingMode: 'environment'
                }
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.onloadedmetadata = () => {
                    setIsLoading(false);
                };
            }
        } catch (error) {
            console.error("Erro ao acessar a câmera", error);
            setError("Não foi possível acessar a câmera. Verifique as permissões.");
            setIsLoading(false);
        }
    };

    const takePicture = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (!video || !canvas) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const image = canvas.toDataURL("image/jpeg", 0.9);
        setPicture(image);

        if (onTakePicture) {
            onTakePicture(image);
        }
    };

    const restart = () => {
        setPicture(null);
        startCam();
    };

    return (
        <div className="w-full max-w-2xl font-poppins mx-auto flex flex-col gap-8 p-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">
                    {picture ? 'Foto Capturada' : 'Câmera'}
                </h2>
                <p className="text-slate-600">
                    {picture ? 'Sua foto foi salva na galeria' : 'Posicione e capture sua foto'}
                </p>
            </div>

            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                {isLoading && !error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
                        <div className="text-center">
                            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-white text-sm">Iniciando câmera...</p>
                        </div>
                    </div>
                )}
                
                {error ? (
                    <div className="aspect-video flex flex-col items-center justify-center text-red-400 p-8">
                        <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <p className="text-center text-lg font-medium mb-4">{error}</p>
                        <button
                            onClick={startCam}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                            Tentar Novamente
                        </button>
                    </div>
                ) : picture ? (
                    <img
                        src={picture}
                        alt="Foto tirada"
                        className="w-full h-auto max-h-96 object-contain"
                    />
                ) : (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        aria-label='Fluxo da câmera'
                        className="w-full h-auto max-h-96"
                    />
                )}

                {!picture && !error && (
                    <div className="absolute inset-0 pointer-events-none border-2 border-white/20 rounded-xl"></div>
                )}
            </div>

            <div className="flex gap-4 justify-center mt-4">
                {picture ? (
                    <>
                        <button
                            type="button"
                            onClick={restart}
                            className="flex-1 max-w-xs px-8 py-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Nova Foto
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 max-w-xs px-8 py-4 cursor-pointer bg-slate-600 hover:bg-slate-700 text-white rounded-xl transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Concluir
                        </button>
                    </>
                ) : (
                    <button
                        type="button"
                        onClick={takePicture}
                        disabled={isLoading || error}
                        className="px-12 py-4 cursor-pointer bg-green-600 hover:bg-green-700 disabled:bg-slate-400 text-white rounded-xl transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 min-w-[200px] justify-center"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Tirar Foto
                    </button>
                )}
            </div>
            
            <canvas ref={canvasRef} className="hidden"></canvas>
        </div>
    );
}