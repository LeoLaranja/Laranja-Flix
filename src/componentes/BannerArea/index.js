import "./BannerArea.css"

function BannerArea () {

    return (
        <div className='text_and_img_Container'>
            <div className='text_and_img_Area'>

                <div className='text_Area'>
                    <div className='button'>
                        <a href='/'> FRONT-END</a>
                    </div>
                    <div className='title'>
                        <h1>SEO com React</h1>
                    </div>
                    <div className='text'>
                        <h2>  Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </h2>
                    </div>
                </div>


                <div className='video'>
                <iframe src="https://www.youtube.com/embed/c8mVlakBESE?si=6DodcCqI2qIQpXmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>        
        </div>
    )
}

export default BannerArea