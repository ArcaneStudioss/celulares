"use client";

import { useLayoutEffect, useRef } from "react";
import { Aparelho } from "./Aparelho";

// Abertura + topo animado: um selo no centro, os aparelhos flutuam em volta e depois se juntam
// ao lado do título. Tudo é CSS (ver "abertura" em globals.css), então funciona sem JS e com
// movimento reduzido já aparece pronto. O JS só evita repetir a abertura na mesma sessão
// (clicar no logo e voltar para a home não toca a animação de novo).
const APARELHOS = [
  { nome: "creme", topo: "#f1ece2", base: "#cfc7b8" },
  { nome: "verde", topo: "#a9ecb4", base: "#4fb872" },
  { nome: "laranja", topo: "#ff8a3d", base: "#e5500f" },
  { nome: "azul", topo: "#56658a", base: "#232d4a" },
];

export function HeroAparelhos({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const feito = useRef(false);
  useLayoutEffect(() => {
    if (feito.current) return; // o modo estrito do desenvolvimento roda o efeito duas vezes
    feito.current = true;
    try {
      if (sessionStorage.getItem("abertura-vista")) ref.current?.classList.add("sem-abertura");
      else sessionStorage.setItem("abertura-vista", "1");
    } catch {
      /* navegação privada: toca a abertura mesmo assim */
    }
  }, []);

  return (
    <section ref={ref} className="hero-aparelhos relative -mt-px flex items-start overflow-hidden bg-fundo lg:items-center">
      <div className="abertura" aria-hidden>
        <span className="abertura-selo">
          <span className="abertura-anel" />
          <span className="abertura-nome">Loja Modelo</span>
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {APARELHOS.map((a, i) => (
          <span key={a.nome} className={`ap ap-${i + 1}`}>
            <span className="ap-in">
              <Aparelho topo={a.topo} base={a.base} className="block w-full drop-shadow-[0_24px_28px_rgb(18_19_21/0.22)]" />
            </span>
          </span>
        ))}
      </div>
      {children}
    </section>
  );
}
