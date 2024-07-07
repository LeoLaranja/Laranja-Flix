import React, { useState } from 'react';
import './Videos.css';
import { TiDelete } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import Modal from '../Modal';

function Videos({ video, onDelete, onUpdate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => {
        onDelete(video);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = (updatedVideo) => {
        onUpdate(updatedVideo);
    };

    const getCategoryClass = (categoria) => {
        switch (categoria) {
            case 'Front-End':
                return 'front-end';
            case 'Back-End':
                return 'back-end';
            case 'Mobile':
                return 'mobile';
            default:
                return '';
        }
    };

    return (
        <div className='videos_area'>
            <div className={`iframe_Video ${getCategoryClass(video.categoria)}`}>
                <iframe
                    width="420"
                    height="315"
                    src={video.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <div className='button_area'>
                    <div>
                        <button className='button_deletar' onClick={handleDelete}><TiDelete /></button>
                        <h4 onClick={handleDelete}>DELETAR</h4>
                    </div>
                    <div>
                        <button className='button_editar' onClick={openModal}><CiEdit /></button>
                        <h4 onClick={openModal}>EDITAR</h4>
                    </div>
                </div>
            </div>
            <div className='video_info'>
                <h4>{video.titulo}</h4>
                <p>{video.descricao}</p>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} video={video} onSave={handleSave} />
        </div>
    );
}

export default Videos;
