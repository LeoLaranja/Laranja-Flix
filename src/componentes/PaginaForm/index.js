import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaginaForm.css';
import Cabecalho from '../Cabecalho';

function PaginaForm({ onVideoSubmit }) {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagemUrl, setImagemUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [descricao, setDescricao] = useState('');
    const [videoUrlError, setVideoUrlError] = useState('');
    const navigate = useNavigate();  // Hook para navegação

    const handleGuardarClick = () => {
        // Verificar se os campos obrigatórios estão preenchidos
        if (!titulo || !categoria || !videoUrl) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Verificar se o link do vídeo é válido
        if (videoUrlError) {
            alert('Por favor, insira um link de vídeo válido do YouTube.');
            return;
        }

        // Montar objeto com os dados do vídeo
        const novoVideo = {
            titulo: titulo,
            categoria: categoria,
            imagemUrl: imagemUrl,
            videoUrl: videoUrl,
            descricao: descricao
        };

        // Chamar a função de callback para enviar os dados para o componente pai (App.js)
        onVideoSubmit(novoVideo);

        // Limpar os campos do formulário após guardar
        setTitulo('');
        setCategoria('');
        setImagemUrl('');
        setVideoUrl('');
        setDescricao('');

        // Redirecionar para a página principal
        navigate('/');
    };

    // Função para extrair o ID do vídeo do link do YouTube
    const extrairVideoId = (url) => {
        // Verifica se o URL é do formato de embed (https://www.youtube.com/embed/VIDEO_ID)
        const regexEmbed = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

        // Verifica se o URL é do formato normal (https://www.youtube.com/watch?v=VIDEO_ID)
        const regexNormal = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/;

        // Tenta fazer o match com os regex
        let match = url.match(regexEmbed) || url.match(regexNormal);

        // Retorna o ID do vídeo ou null se não encontrar
        return match ? match[1] : null;
    };

    // Função para formatar o URL do vídeo para o formato de embed
    const formatarEmbedUrl = (url) => {
        const videoId = extrairVideoId(url);
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return null;
    };

    // Handler para validar o URL do vídeo ao perder o foco do input
    const handleVideoUrlBlur = () => {
        const embedUrl = formatarEmbedUrl(videoUrl);
        if (embedUrl) {
            setVideoUrl(embedUrl);
            setVideoUrlError('');
        } else {
            setVideoUrlError('Por favor, insira um link de vídeo válido do YouTube.');
        }
    };

    return (
        <>
            <Cabecalho />
            <section className='area_Title_Container'>
                <div className='title_Geral'>
                    <h1>NOVO VÍDEO</h1>
                    <h2>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</h2>
                </div>

                <div className='area_Form_Container'>
                    <div className='form_Geral'>
                        <div className='form_title_h3'>
                            <h3>Criar Card</h3>
                        </div>

                        <form className='form'>
                            <div className='form_Input'>
                                <label>Título *</label>
                                <input type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder='Insira um título'></input>
                            </div>
                            <div className='form_Input'>
                                <label>Categoria *</label>
                                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                    <option value='' hidden>Selecione uma categoria</option>
                                    <option>Front-End</option>
                                    <option>Back-End</option>
                                    <option>Mobile</option>
                                </select>
                            </div>
                        </form>

                        <form className='form'>
                            <div className='form_Input'>
                                <label>Imagem</label>
                                <input type='text' value={imagemUrl} onChange={(e) => setImagemUrl(e.target.value)} placeholder='Insira a Url da imagem'></input>
                            </div>
                            <div className='form_Input'>
                                <label>Video *</label>
                                <input type='text' value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} onBlur={handleVideoUrlBlur} placeholder='Digite o link do vídeo'></input>
                                {videoUrlError && <p className='error'>{videoUrlError}</p>}
                            </div>
                        </form>

                        <form className='form'>
                            <div className='textArea'>
                                <label>Descrição</label>
                                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder='Sobre o que é esse vídeo?' rows="10" cols="50"></textarea>
                            </div>
                        </form>

                        <div className='area_button'>
                            <div className='button_element'>
                                <button onClick={handleGuardarClick}>GUARDAR</button>
                                <button type="reset">LIMPAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PaginaForm;
