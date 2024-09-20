import { useState } from "react";
import Menu from "../assets/hamburguer.svg";
import Close from "../assets/close.svg";
import Logo from "../assets/logo.svg";
import Button from "../components/Button";

import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/buttons.css";
import "../styles/section.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <>
            <header className="container py-sm">

                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Quintalhação" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Esse é o quadrado bonitão pra desktop" />
                </span>
                <img src={HeroRectangleOne} alt="Outro quadrado, só que mais estiloso" />
                <div className="container content">
                    <p>Tá vendo esse retângulo? Só pra dar um charme.</p>
                    <h1>Bem-vindo ao futuro! Ou pelo menos, à nossa página inicial.</h1>
                    <p>Se você está no mobile, parabéns, chegou ao lugar certo.</p>
                    <div>
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Clique aqui e descubra o mistério" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id="random-solution" className="container py-lg" style={{ backgroundColor: "var(--bg-color)", color: "var(--primary-color)" }}>
                <div className="text-center">
                    <h2>💡 A Solução Que Você Nem Sabia Que Precisava</h2>
                    <p className="mt-sm">Às vezes, a gente nem sabe o que tá faltando na vida, né? Deixa que o Quintalhação resolve pra você!</p>
                </div>

                <div className="even-columns items-center mt-lg">
                    <div className="flex-1 text-center">
                        <img src="data:image/jpeg;base64,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"
                            alt="Ícone da solução aleatória" style={{ borderRadius: "50%", marginBottom: "1rem" }} />
                        <h3>Organizador de Tarefas que Faz Café!</h3>
                        <p>Gerencie suas tarefas enquanto o cheirinho de café invade sua tela (ainda estamos trabalhando na parte do café, mas as tarefas são organizadas de verdade).</p>
                    </div>
                </div>

                <div className="text-center mt-lg">
                    <button className="btn-primary">Quero Testar</button>
                </div>
            </section>

            <section id="testimonials">
                <h2>O que nossos clientes dizem</h2>
                <div className="testimonial-grid">
                    <div className="testimonial">
                        <p>"Este produto mudou minha vida! Altamente recomendável."</p>
                        <p>- Cliente satisfeito</p>
                    </div>
                    <div className="testimonial">
                        <p>"O melhor serviço ao cliente que já experimentei."</p>
                        <p>- Outro cliente feliz</p>
                    </div>
                </div>
            </section>

            <section id="faq">
                <h2>Perguntas Frequentes</h2>
                <div className="faq-item">
                    <h3>Como posso adquirir o produto?</h3>
                    <p>Você pode adquirir através do nosso site ou em lojas parceiras.</p>
                </div>
                <div className="faq-item">
                    <h3>Qual é o prazo de entrega?</h3>
                    <p>O prazo de entrega é de 3 a 5 dias úteis para capitais.</p>
                </div>
            </section>

            <section id="cta-final">
    <h2>Pronto para começar?</h2>
    <p>Junte-se a centenas de clientes satisfeitos e adquira o nosso produto agora mesmo.</p>
    <button className="btn-primary">Compre Agora</button>
</section>

        </>
    )
}
