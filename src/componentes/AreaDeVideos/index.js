import React from 'react';
import './AreaDeVideos.css';
import Videos from '../Videos';

function AreaDeVideos({ videos, onDelete, onUpdate }) {
    const categorias = ['Front-End', 'Back-End', 'Mobile'];

    const handleDeleteVideo = (videoToDelete) => {
        // Filtra os vídeos mantendo apenas aqueles que não correspondem ao vídeo a ser deletado
        const novosVideos = videos.filter(video => video !== videoToDelete);
        // Atualiza a lista de vídeos
        onDelete(novosVideos);
    };

    return (
        <section className='area_videos_container'>
            {categorias.map((categoria) => (
                <div className='area_videos_display' key={categoria}>
                    <h3 data-categoria={categoria}>{categoria}</h3>
                    <div className='area_videos'>
                        {videos.filter(video => video.categoria === categoria).map((video, index) => (
                            <Videos key={index} video={video} onDelete={handleDeleteVideo} onUpdate={onUpdate} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default AreaDeVideos;
