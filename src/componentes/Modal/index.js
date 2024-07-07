import React, { useState, useEffect } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import './Modal.css';

function Modal({ isOpen, onClose, video, onSave }) {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagemUrl, setImagemUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo);
            setCategoria(video.categoria);
            setImagemUrl(video.imagemUrl);
            setVideoUrl(video.videoUrl);
            setDescricao(video.descricao);
        }
    }, [video]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedVideo = { titulo, categoria, imagemUrl, videoUrl, descricao };
        onSave(updatedVideo);
        onClose();
    };

    const handleClear = () => {
        setTitulo('');
        setCategoria('');
        setImagemUrl('');
        setVideoUrl('');
        setDescricao('');
    };

    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <button className='modal-close' onClick={onClose}><AiOutlineCloseCircle /></button>
                <div className='modal-area'>
                    <h1>EDITAR CARD:</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Título</label>
                            <input type='text' placeholder='Insira o título do vídeo' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Categoria</label>
                            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                <option value='' hidden>Selecione uma opção</option>
                                <option>Front-End</option>
                                <option>Back-End</option>
                                <option>Mobile</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>Imagem</label>
                            <input type='text' placeholder='Insira a URL da imagem' value={imagemUrl} onChange={(e) => setImagemUrl(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Vídeo</label>
                            <input type='text' placeholder='Insira a URL do vídeo' value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Descrição</label>
                            <textarea rows='5' cols='10' placeholder='Insira a descrição' value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                        </div>
                        <div className='form-buttons'>
                            <button type='submit'>GUARDAR</button>
                            <button type='button' onClick={handleClear}>LIMPAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;
