import React, { useEffect, useRef } from 'react';
import styles from "./home.module.scss";
import Navbar from "../../components/Navbar";
import Statistics from "../../components/Statistics";
import iconMoney from "../../assets/icons/caixa-de-dinheiro.png"
import iconClothing from "../../assets/icons/guarda-roupa.png"
import iconFoods from "../../assets/icons/doacao-de-alimentos.png"
import iconServices from "../../assets/icons/servicos-profissionais.png"
import imgVolunteer from "../../assets/group-different-people-volunteering-foodbank-poor-people.jpg"

function Home() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const startScrolling = () => {
      const scroll = () => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          const maxScrollLeft = scrollWidth - clientWidth;

          if (scrollLeft >= maxScrollLeft) {
            scrollRef.current.scrollLeft = 0; 
          } else {
            scrollRef.current.scrollLeft += 1; 
          }
        }
      };

      const intervalId = setInterval(scroll, 30); 

      return () => clearInterval(intervalId); 
    };

    const timeoutId = setTimeout(startScrolling, 5000); 

    return () => clearTimeout(timeoutId); 
  }, []);

  return (
    <>

      

      <Navbar />
      <section className={`${styles.home} overflow-hidden flex flex-col justify-end text-white bg-slate-600 bg-center h-screen`}>
        <div className={`${styles.content} text-white m-10 flex flex-col items-center gap-1`}>
          <h1 className="text-5xl">Portal de Socorro e Apoio</h1>
          <span className="text-sm">Bem-vindo ao Portal de Socorro e Apoio (PSA). Somos uma plataforma inovadora e integrada dedicada a fornecer assistência rápida e eficaz para pessoas em situação de vulnerabilidade.</span>
        </div>
        <div ref={scrollRef} className={`${styles.details} h-2/5 w-full backdrop-blur bg-black/50 flex flex-nowrap overflow-x-auto divide-x divide-slate-800`}>
          <div className={`${styles.details_content} min-w-[150px] flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 `}>
            <div className={`${styles.detailds_title}`}>
              <div className={styles.icons}>
                <img src={iconMoney} className="size-10 invert-0 dark:invert" alt="icone de dinheito" />
              </div>
              <span className="text-xl">Valores arrecadados</span>
            </div>
            <div className={`${styles.detailds_text}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident hic dolor quia enim libero? Eaque dolo</div>
            <button type="button" className="py-3 px-4 w-1/2 inline-flex items-center justify-center text-sm font-medium rounded-3xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Saiba mais
            </button>
          </div>
          <div className={`${styles.details_content} min-w-[150px] flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}>
            <div className={`${styles.detailds_title}`}>
            <div className={styles.icons}>
              <img src={iconClothing} className="size-10 invert-0 dark:invert" alt="icone de roupas" />
            </div>
              <span className="text-xl">Roupas recebidas</span>
            </div>
            <div className={`${styles.detailds_text}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident hic dolor quia enim libero? Eaque dolo</div>
            <button type="button" className="py-3 px-4 w-1/2 inline-flex items-center justify-center  text-sm font-medium rounded-3xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Saiba mais
            </button>
          </div>
          <div className={`${styles.details_content} min-w-[150px] flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}>
            <div className={`${styles.detailds_title}`}>
            <div className={styles.icons}>
              <img src={iconFoods} className="size-10 invert-0 dark:invert" alt="icone de alimentos" />
            </div>
              <span className="text-xl">Alimentos</span>
            </div>
            <div className={`${styles.detailds_text}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident hic dolor quia enim libero? Eaque dolo</div>
            <button type="button" className="py-3 px-4 w-1/2 inline-flex items-center justify-center  text-sm font-medium rounded-3xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Saiba mais
            </button>
          </div>
          <div className={`${styles.details_content} min-w-[150px] flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}>
            <div className={`${styles.detailds_title}`}>
            <div className={styles.icons}>
              <img src={iconServices} className="size-10 invert-0 dark:invert" alt="icone de serviços" />
            </div>
              <span className="text-xl">Serviços</span>
            </div>
            <div className={`${styles.detailds_text}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident hic dolor quia enim libero? Eaque dolo</div>
            <button type="button" className="py-3 px-4 w-1/2 inline-flex items-center justify-center  text-sm font-medium rounded-3xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Saiba mais
            </button>
          </div>
        </div>
      </section>
      <section className={`${styles.about} h-screen flex items-center justify-around`}>
        <div className={`${styles.img_about} flex items-center`}>
          <img src={imgVolunteer} className={`${styles.img_mask}`} alt="Pessoas voluntarias" />
        </div>
        <div className={`${styles.content_about} flex flex-col justify-center items-baseline gap-5`}>
          <h1 className={`${styles.indexes} w-22`}>
            <span>Sobre nós</span>
          </h1>
          <h1 className=" font-bold text-3xl">A Força da União em Prol da Esperança.</h1>
          <p>Nosso objetivo é facilitar a gestão de recursos e a coordenação de ajuda humanitária, conectando doadores, voluntários e organizações de apoio para maximizar o impacto das ações de socorro.</p>
          <p> Se você deseja saber mais sobre o Portal de Socorro e Apoio ou tem interesse em se tornar um parceiro, não hesite em entrar em contato conosco. Juntos, podemos fazer a diferença na vida de muitas pessoas.</p>
          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-3xl border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-medium-modal">
            Saiba mais
          </button>
        </div>

        {/* Janela modal do about */}
        <div id="hs-medium-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
          <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto h-[calc(100%-3.5rem)]">
            <div class="max-h-full  overflow-hidden flex flex-col border shadow-sm rounded-xl pointer-events-auto backdrop-blur-sm">
              <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                <h3 class="font-bold text-gray-800 dark:text-white">
                  Sobre a PSA
                </h3>
                <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-medium-modal">
                  <span class="sr-only">Fechar</span>
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div class="p-4 overflow-y-auto">
                <div class="space-y-4">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Missão:</h3>
                    <p class="mt-1 text-gray-800 dark:text-neutral-400">
                    O PSA tem como missão salvar vidas e aliviar o sofrimento de pessoas afetadas por desastres, promovendo a solidariedade e a cooperação comunitária. A plataforma busca ser um ponto central de apoio, garantindo que recursos vitais cheguem rapidamente a quem mais precisa e que os esforços de ajuda sejam coordenados de forma eficaz e transparente.                    </p>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">O que fazemos:</h3>
                    <p class="mt-1 text-gray-800 dark:text-neutral-400">
                    No PSA, transformamos a solidariedade em ação através de uma rede forte e eficiente de socorro e apoio em tempos de crise. Nossa plataforma permite a gestão integrada de recursos, facilitando a doação de bens essenciais, a mobilização de voluntários e a coordenação com outras organizações humanitárias. Trabalhamos incansavelmente para assegurar que as respostas a emergências sejam rápidas, bem-organizadas e impactantes.
                    </p>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Como funciona:</h3>
                    <p class="mt-1 text-gray-800 dark:text-neutral-400">
                    O PSA opera como um ponto central de coordenação durante emergências. Doadores podem oferecer recursos financeiros ou bens materiais através da nossa plataforma. Voluntários podem se cadastrar e ser designados para áreas onde sua ajuda é mais necessária. Organizações parceiras podem acessar informações atualizadas sobre as necessidades em diferentes locais, permitindo uma resposta ágil e direcionada. Além disso, utilizamos tecnologias avançadas para monitorar a distribuição de recursos e garantir transparência em todas as etapas do processo de ajuda humanitária.                    </p>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Nossa Visão:</h3>
                    <p class="mt-1 text-gray-800 dark:text-neutral-400">
                    Aspiramos ser reconhecidos como a principal plataforma de apoio em emergências, onde a solidariedade encontra a ação, e onde cada contribuição faz uma diferença significativa. Acreditamos que juntos podemos construir um mundo mais resiliente e preparado para enfrentar as adversidades, garantindo que nenhum pedido de ajuda fique sem resposta.                    </p>
                  </div>
                </div>
              </div>
              <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-medium-modal">
                  Fechar
                </button>
                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  Fazer uma Doação
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="bg-slate-300 h-screen">
        a 
      </section>


    
    </>
  );
}

export default Home;
