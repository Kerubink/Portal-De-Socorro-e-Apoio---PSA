import React, { useEffect, useRef } from 'react';
import styles from "./home.module.scss";
import Navbar from "../../components/Navbar";
import Statistics from "../../components/Statistics";
import iconMoney from "../../assets/icons/caixa-de-dinheiro.png"
import iconClothing from "../../assets/icons/guarda-roupa.png"
import iconFoods from "../../assets/icons/doacao-de-alimentos.png"
import iconServices from "../../assets/icons/servicos-profissionais.png"

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
        <div className={`${styles.content} text-white m-10 flex flex-col  gap-1`}>
          <h1 className="text-5xl">Portal de Socorro e Apoio</h1>
          <span className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident hic dolor quia enim libero? Eaque dolo</span>
        </div>
        <div ref={scrollRef} className={`${styles.details} h-2/5 w-full backdrop-blur bg-black/50 flex flex-nowrap overflow-x-auto divide-x divide-slate-800`}>
          <div className={`${styles.details_content} min-w-[150px] flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 `}>
            <div className={`${styles.detailds_title}`}>
              <img src={iconMoney} className="size-10 invert-0 dark:invert" alt="icone de dinheito" />
              <span className="text-xl">Valores arrecadados</span>
            </div>
            <div className={`${styles.detailds_text}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident hic dolor quia enim libero? Eaque dolo</div>
            <button type="button" class="py-3 px-4 w-1/2 inline-flex items-center justify-center text-sm font-medium rounded-3xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Saiba mais
            </button>
          </div>
          <div className={`${styles.details_content} min-w-[150px] flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}>
            <div className={`${styles.detailds_title}`}>
              <img src={iconClothing} className="size-10 invert-0 dark:invert" alt="icone de dinheito" />
              <span className="text-xl">Roupas recebidas</span>
            </div>
            <div className={`${styles.detailds_text}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident hic dolor quia enim libero? Eaque dolo</div>
            <button type="button" class="py-3 px-4 w-1/2 inline-flex items-center justify-center  text-sm font-medium rounded-3xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Saiba mais
            </button>
          </div>
          <div className={`${styles.details_content} min-w-[150px] flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}>
            <div className={`${styles.detailds_title}`}>
              <img src={iconFoods} className="size-10 invert-0 dark:invert" alt="icone de dinheito" />
              <span className="text-xl">Alimentos</span>
            </div>
            <div className={`${styles.detailds_text}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident hic dolor quia enim libero? Eaque dolo</div>
            <button type="button" class="py-3 px-4 w-1/2 inline-flex items-center justify-center  text-sm font-medium rounded-3xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Saiba mais
            </button>
          </div>
          <div className={`${styles.details_content} min-w-[150px] flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}>
            <div className={`${styles.detailds_title}`}>
              <img src={iconServices} className="size-10 invert-0 dark:invert" alt="icone de dinheito" />
              <span className="text-xl">Serviços</span>
            </div>
            <div className={`${styles.detailds_text}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident hic dolor quia enim libero? Eaque dolo</div>
            <button type="button" class="py-3 px-4 w-1/2 inline-flex items-center justify-center  text-sm font-medium rounded-3xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Saiba mais
            </button>
          </div>
        </div>
      </section>
      <section className="bg-slate-800 h-screen">
      </section>
      <Statistics />
      <section className="bg-slate-300 h-screen">
        a
      </section>

    </>
  );
}

export default Home;
