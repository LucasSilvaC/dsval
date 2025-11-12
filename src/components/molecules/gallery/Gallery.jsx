import { useState } from "react";
import Camera from "../../camera/Camera";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery() {
    const [pictures, setPictures] = useState(() => {
        const saved = localStorage.getItem("pictures");
        return saved ? JSON.parse(saved) : [];
    });

    const addPicture = (newPicture) => {
        const newPictures = [...pictures, newPicture];
        setPictures(newPictures);
        localStorage.setItem("pictures", JSON.stringify(newPictures));
    };

    const clearGallery = () => {
        if (!confirm("Tem certeza que deseja excluir todas as suas fotos?")) return;
        localStorage.removeItem("pictures");
        setPictures([]);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">
                        Galeria de Fotos
                    </h1>
                    <p className="text-slate-600 text-lg font-poppins">
                        Capture e visualize suas melhores fotos
                    </p>
                </div>

                <section className="justify-center items-center flex rounded-2xl shadow-lg p-8 mb-12 border border-slate-200">
                    <Camera onTakePicture={addPicture} />
                </section>

                <section className="bg-white font-poppins rounded-2xl shadow-lg p-8 border border-slate-200">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-800">
                                Suas Fotos
                            </h2>
                            <p className="text-slate-500 mt-1">
                                {pictures.length} {pictures.length === 1 ? 'foto' : 'fotos'} na galeria
                            </p>
                        </div>
                        
                        {pictures.length > 0 && (
                            <button 
                                onClick={clearGallery}
                                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-200 font-medium shadow-md hover:shadow-lg flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Limpar Galeria
                            </button>
                        )}
                    </div>

                    {pictures.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-slate-600 mb-2">
                                Nenhuma foto ainda
                            </h3>
                            <p className="text-slate-500">
                                Use a câmera acima para capturar sua primeira foto
                            </p>
                        </div>
                    ) : (
                        <Box sx={{ width: '100%', height: 500, overflowY: 'scroll' }}>
                            <ImageList variant="masonry" cols={3} gap={12}>
                                {pictures.map((f, i) => (
                                    <ImageListItem key={i}>
                                        <img
                                            src={f}
                                            alt={`Foto ${i + 1}`}
                                            loading="lazy"
                                            className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                    )}
                </section>
            </div>
        </main>
    );
}