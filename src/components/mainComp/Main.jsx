import './cmain.css'
import Image from '../../assets/back.avif'
export default function Main() {
    return(
        <div className="main">
            <section className='container-1'>

                <p>Uma nova <strong>versão</strong>. Um novo <strong id="colored">propósito.</strong></p>
                <h1>console.log("Welcome...")</h1>
                <div className='things-what-i-do'>
                    <p>felipe@liandro-server:</p>
                    <p>~$ </p>
                    <p>Coder | Design | Músico | Playboy... e muito mais!</p>
                </div>
                <ul className="buttons-container-1">
                    <button>Conhecer Mais</button>
                    <button>Linkedin</button>
                </ul>
            </section>

            <hr />
            <section className='container-2'>
                
                <section className='aboutMe'><p>Eae, como que vai?👋

    Eu me chamo Felipe Liandro! Sou um programador, apaixonado por tecnologia, inovação, arte, jogos, música, literatura e mais 9999 coisas!

    Apaixonado por criar coisas novas e entregar ao mundo mudanças e evolução. Hoje estou no meio dessa jornada, ao qual ao longo do caminho desejo realizar coisas extraordinárias!

    Conheça um pouco da minha "pequena" carreira. 👇</p></section>

                <section className='history'>
                    <h1>Sobre Mim</h1>
                    <p>Se você está aqui, é por que algo em minha pessoa lhe chamou a atenção... Gostaria de ficar encantado e curioso em pensar o que o traz até a mim, o que lhe faz querer saber ou conhecer mais. Porém vamos ser sinceros?! Eu sou <strong>DEMAIS</strong> o suficiente para deixar uma icógnita até mesmo em você. Então vou lhe poupar de histórinhas bobas ou emocionantes e vamos direto ao ponto.</p>

                    <h1>Um Pouco de HISTÓRIA!</h1>
                    <h2>(E das boas...)</h2>
                    <p>Assim como a maioria das pessoas de onde eu vim, estudei em escolas públicas. Iniciando minha jornada de aprendizado, na qual sinceramente eu odiava.</p>
                    <p>E assim fui levando a vida até 2020. Onde tudo mudaria. Seria a divisão completa da minha vida. Para todos o fim do fundamental significa ter que começar uma nova jornada, e para mim era como começar uma nova vida. Eu não sabia para onde iria, não queria frequentar ensino médio público e se quer tinha chances de passar em uma federal. Então o que me aguardaria?</p>
                    <p>O que me aguardava agora era um ensino médio ténico, um curso e 200 questões sobre mim mesmo. Como uma história de ficção ou coaching, após encontrar um folhete de "SE-INSCREVA AGORA" da escola ETEC, resolvi fazer a prova mesmo sabendo que não passaria, apenas pela pressão da sociedade. E adivinha só?</p>
                    <h1>BOOOOOOOOM! EU PASSEI.</h1>
                    <p>Pois é... ser inteligente e narcisista já estava no meu sangue desde cedo. (Se você pretende me recrutar, então acredite... eu não sou nem um pouco narcisista, eu acho).</p>
                    <h1>2023 - Deadsec, CodeForm, Friday & Formatura</h1>
                    <p>Sem dúvidas, 2023 foi um longo ano. A alguns meses tinha começado a aprender programação e como qualquer iniciante, comecei a desenvolver inúmeros softwares que naquela época eram relíquias e vitórias. Olhando hoje em dia, são apenas alguns emaranhados de linhas de código que a qualquer momento podem explodir.</p>

                    <h1>2024 - Faculdade e Emprego</h1>
                    <p>Pois é, depois de passar por um dos anos mais dificéis hoje eu curso Eng. da Computação na UNIVESP. E trabalho em Marketing na Coocerqui. Que revira volta não?!</p>
                </section>

                <section className="projetos">
                    <h1>Projetos:</h1>
                    <p>Conheça alguns dos pequenos projetos que já realizei.</p>

                    <div className="gridOfProjects">
                        <div className="imageAhref">
                            <figure></figure>
                            <div className="bottomImageAhrefs">
                                <h1>Friday</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque consequatur porro placeat error cum? Animi nam iste voluptatum id sunt!</p>
                            </div>
                        </div>
                        <div className="imageAhref">
                            <figure></figure>
                            <div className="bottomImageAhrefs">
                                <h1>Econômetro</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque consequatur porro placeat error cum? Animi nam iste voluptatum id sunt!</p>
                            </div>
                        </div>
                        <div className="imageAhref">
                            <figure></figure>
                            <div className="bottomImageAhrefs">
                                <h1>Pingo WebPage</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque consequatur porro placeat error cum? Animi nam iste voluptatum id sunt!</p>
                            </div>
                        </div>

                        <div className="Ahref">
                            <h1>Nome do prd</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi illum assumenda ad commodi animi mollitia. Repudiandae dolore odio quo!</p>
                        </div>
                        <div className="Ahref">
                            <h1>Nome do prd</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi illum assumenda ad commodi animi mollitia. Repudiandae dolore odio quo!</p>
                        </div>
                        <div className="Ahref">
                            <h1>Nome do prd</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi illum assumenda ad commodi animi mollitia. Repudiandae dolore odio quo!</p>
                        </div>

                    </div>

                </section>

                <section className="redesSociais">
                    <p>Ok, chega de baboseira, né?! Ta afim de ver meu rostinho lindo ou entrar em contato?! Da um click em alguns desses links aqui embaixo.</p>
                </section>

            </section>
        </div>
    )
}