import React from 'react';
import { IconContext } from 'react-icons';
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare } from 'react-icons/fa';
import './Salao.css';

function Salao() {
  return (
    <div >
      <header>
            <div className="logo-container">
                <img className="logo-image" src="image/LOGO2.fw.png" alt="" />         
            </div>       
            <nav>
                <div className="burger-container">
                    <input type="checkbox" id="checkbox-menu" />
                    <label for="checkbox-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <ul className="header-list">
                    <li>Home</li>
                    <li>Quem Somos</li>
                    <li>Fotos</li>
                    <li>Noivas</li>
                    <li>Serviços</li>
                    <li>Cursos</li>
                    <li>Blog</li>
                    <li>Contato</li>
                    <li>Minha Conta</li>
                </ul>
            </nav>
        </header>

        <div className="banner-container">
            <img className="banner-image" src="image/Modelo-Full.jpg" alt="" />
        </div>


        <section className="float-container">
            <article className="float-content">
                <h1>A beleza da Mulher</h1>
                <p>Toda mulher é única na sua essência, especial no seu conjunto e
                naturalmente bela. E beleza de mulher é igual a aurora que todo
                o dia desperta o mundo em sussurro, e como o ocaso que o adormece.
                Beleza de mulher é sublime e rara, é recheio de amor, de carinho. 
                É um conjunto de formas, de curvas e contracurvas onde, com tinta 
                vermelha de paixão, se escreve o conto da criação.
                Beleza de mulher é arte, é poesia, são todas as notas da mais bela melodia, 
                são encantos de mistério e loucura onde se guarda a origem da vida.
                <br />
                Nós da <strong>BELLA'S Hair Salon</strong> trabalhamos todos os dias, para que cada mulher se sinta ÚNICA.
                </p>
            </article>
            <div className="float-pb-container">
                <div className="float-branca">
                    <p>Venha nos fazer uma visita</p>
                </div>
                <div className="float-preta">
                    <img className="float-logo-image" src="image/LOGO2.fw.png" alt="" />
                </div>
            </div>
        </section>

        <div className="blank-space"></div>


        <div className="company-container">
            <div className="company-title">
                <h1>Conheça nossas linhas de produtos</h1>
            </div>
            <div className="company-logo-container">
                <div className="company-logo-content">
                    <img className="company-logo" src="image/marcas/LOreal-Logo-300.png" alt="karastase" />
                </div>
                <div className="company-logo-content">
                    <img className="company-logo" src="image/marcas/lanza-logo-300.png" alt="karastase" />
                </div>
                <div className="company-logo-content">
                    <img className="company-logo" src="image/marcas/Wella-Logo-300.png" alt="karastase" />
                </div>
            </div>
            <div className="company-logo-container">
                <div className="company-logo-content">
                    <img className="company-logo" src="image/marcas/Kerastase-Logo-300.png" alt="karastase" />
                </div>
                <div className="company-logo-content">
                    <img className="company-logo" src="image/marcas/Joico-Logo-300.png" alt="karastase" />
                </div>
                <div className="company-logo-content">
                    <img className="company-logo" src="image/marcas/probelle-logo-300.png" alt="karastase" />
                </div>
            </div>
        </div>
        
            <div className="cards-container">
                <div className="cards-content">
                    <div className="card-text black-box">Cabelo</div>
                    <div className="card-image-container"><img className="card-image" src="image/cabelo.png" alt="Foto Cabelo" /></div>
                    <div className="card-text">Maquiagem</div>
                    <div className="card-image-container"><img className="card-image" src="image/maquiagem.png" alt="Foto Maquiagem" /></div>
                    <div className="card-text black-box">Depilação</div>
                    <div className="card-image-container"><img className="card-image" src="image/depilação.png" alt="Foto Depilação" /></div>
                </div>
                <div className="cards-content">
                    <div className="card-image-container"><img className="card-image" src="image/noiva.png" alt="" /></div>
                    <div className="card-text black-box">Noivas</div>
                    <div className="card-image-container"><img className="card-image" src="image/manicure.png" alt="" /></div>
                    <div className="card-text">Manicure</div>
                    <div className="card-image-container"><img className="card-image" src="image/barbearia.png" alt="" /></div>
                    <div className="card-text black-box">Barbearia</div>
                </div>
            </div>
        
            <video className="video-container" width="600" poster="Facebook-icon.png" controls autoplay>
                <source src="video/happy-woman.mp4" type="video/mp4" /> 
            </video>

        <footer>
            <div className="container-das-listas">
                <ul className="lista-do-footer">
                    <li>Home</li>
                    <li>Planos</li>
                    <li>Vantagens</li>
                    <li>Plataforma</li>
                </ul>
                <ul className="lista-do-footer">
                    <li>Planos</li>
                    <li>Contato</li>
                    <li>Quem Somos</li>
                    <li>Especial Noivas</li>
                </ul>
                <ul className="lista-do-footer">
                    <li>Produtos</li>
                    <li>Trabalhe Conosco</li>
                    <li>Perguntas Frequentes</li>
                    <li>Nossos Fornecedores</li>
                </ul>
                <ul className="redes-sociais">
                    <IconContext.Provider value={{ className: "redes-sociais-icone" }}>
                        <li className="redes-sociais-container"><FaFacebookSquare /></li>
                        <li className="redes-sociais-container"><FaInstagram /></li>
                        <li className="redes-sociais-container"><FaYoutubeSquare /></li>
                    </IconContext.Provider>
                </ul>
            </div>
            <div className="logomarca">
                <img className="logo" src="image/ad-logo.fw.png" alt="logo-empresa" />
            </div>
        </footer>
    </div>
  );
}

export default Salao;
