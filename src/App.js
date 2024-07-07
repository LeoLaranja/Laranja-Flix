import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import AreaDeVideos from './componentes/AreaDeVideos';
import Banner from './componentes/Banner';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import PaginaForm from './componentes/PaginaForm';

function App() {
  const [videos, setVideos] = useState([
    // Vídeos existentes
    {
      titulo: 'Gerenciando SCRIPTS PYTHON',
      categoria: 'Front-End',
      imagemUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/KEvGwUzQp0Q?si=llMaIOeJdt93DUdO',
      descricao: 'Abordagem sobre Linguagem de Programação Python'
    },
    {
      titulo: 'IA da Google',
      categoria: 'Front-End',
      imagemUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/tuuptHa1VPo?si=qAYm4kXVVOQy9ji_',
      descricao: 'Testei a IA da Google que VÊ MINHA CÂMERA E TELA!'
    },
    {
      titulo: 'NFT PARA VENDER NA OPENSEA',
      categoria: 'Front-End',
      imagemUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/VtBofEmUnw0?si=ZaKV6t1IsYCGSzKD',
      descricao: 'COMO CRIAR UM NFT PARA VENDER NA OPENSEA'
    },
    {
      titulo: 'Analisando PORTFÓLIOS ',
      categoria: 'Back-End',
      imagemUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/d8MReiqqElE?si=Crdn-eUqTDDUX3xD',
      descricao: 'Esse vídeo analisa portfólios de forma gratuita'
    },
    {
      titulo: 'Analisando PORTFÓLIOS ',
      categoria: 'Back-End',
      imagemUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/d8MReiqqElE?si=Crdn-eUqTDDUX3xD',
      descricao: 'Esse vídeo analisa portfólios de forma gratuita'
    },
    {
      titulo: 'Analisando PORTFÓLIOS ',
      categoria: 'Back-End',
      imagemUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/d8MReiqqElE?si=Crdn-eUqTDDUX3xD',
      descricao: 'Esse vídeo analisa portfólios de forma gratuita'
    },
    {
      titulo: ' IA GRATUITA que faz Deepfake ',
      categoria: 'Mobile',
      imagemUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/l626Wc3nBuU?si=nor80JIEhacD3er-',
      descricao: 'Neste vídeo tutorial eu ensino como utilizar a nova inteligência artificial para geração de vídeos animados a partir de uma foto chamada Hallo. '
    },
    {
      titulo: ' IA GRATUITA que faz Deepfake ',
      categoria: 'Mobile',
      imagemUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/l626Wc3nBuU?si=nor80JIEhacD3er-',
      descricao: 'Neste vídeo tutorial eu ensino como utilizar a nova inteligência artificial para geração de vídeos animados a partir de uma foto chamada Hallo. '
    },
    {
      titulo: ' IA GRATUITA que faz Deepfake ',
      categoria: 'Mobile',
      imagemUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/l626Wc3nBuU?si=nor80JIEhacD3er-',
      descricao: 'Neste vídeo tutorial eu ensino como utilizar a nova inteligência artificial para geração de vídeos animados a partir de uma foto chamada Hallo. '
    }
  ]);

  const handleVideoSubmit = (novoVideo) => {
    setVideos([...videos, novoVideo]);
  };

  const handleDeleteVideo = (novosVideos) => {
    setVideos(novosVideos);
  };

  const handleUpdateVideo = (updatedVideo) => {
    const updatedVideos = videos.map((video) =>
      video.videoUrl === updatedVideo.videoUrl ? updatedVideo : video
    );
    setVideos(updatedVideos);
  };

  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <AreaDeVideos videos={videos} onDelete={handleDeleteVideo} onUpdate={handleUpdateVideo} />
          </>
        } />
        <Route path="/novo-video" element={<PaginaForm onVideoSubmit={handleVideoSubmit} />} />
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;