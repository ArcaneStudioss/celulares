// Celulares de costas, desenhados em SVG (sem foto, sem marca de terceiros). Entram de fora da tela, se juntam e ficam flutuando.
// Tudo em CSS (globals.css, bloco .hero-cel): sem JS, e com "menos movimento" eles ja aparecem no lugar, parados.

type Aparelho = { cor: string; luz: string; esq: string; topo: string; larg: string; dx: string; dy: string; r0: string; r1: string; atraso: number; ciclo: number };

const APARELHOS: Aparelho[] = [
  { cor: "#e9e5dc", luz: "#fbfaf6", esq: "2%", topo: "20%", larg: "21%", dx: "-70vw", dy: "-10vh", r0: "-40deg", r1: "-14deg", atraso: 300, ciclo: 7 },
  { cor: "#7fcf9a", luz: "#c4f0d1", esq: "20%", topo: "36%", larg: "23%", dx: "-60vw", dy: "40vh", r0: "30deg", r1: "-8deg", atraso: 450, ciclo: 8 },
  { cor: "#f26a21", luz: "#ffa56b", esq: "40%", topo: "8%", larg: "30%", dx: "10vw", dy: "-70vh", r0: "25deg", r1: "6deg", atraso: 150, ciclo: 9 },
  { cor: "#3b4968", luz: "#6d7fa6", esq: "70%", topo: "26%", larg: "25%", dx: "70vw", dy: "20vh", r0: "50deg", r1: "13deg", atraso: 600, ciclo: 7.5 },
];

function Traseira({ cor, luz, id }: { cor: string; luz: string; id: string }) {
  return (
    <svg viewBox="0 0 120 250" className="block size-full drop-shadow-[0_22px_28px_rgba(20,20,30,0.28)]" aria-hidden>
      <defs>
        <linearGradient id={`c${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={luz} />
          <stop offset="0.55" stopColor={cor} />
          <stop offset="1" stopColor={cor} stopOpacity="0.82" />
        </linearGradient>
        <linearGradient id={`m${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#000" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="116" height="246" rx="26" fill={`url(#c${id})`} />
      <rect x="2.75" y="2.75" width="114.5" height="244.5" rx="25.5" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
      <rect x="11" y="11" width="62" height="64" rx="17" fill={`url(#m${id})`} />
      <rect x="11" y="11" width="62" height="64" rx="17" fill="none" stroke="#fff" strokeOpacity="0.4" />
      {[[29, 29], [55, 29], [42, 55]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="11.5" fill="#15161a" />
          <circle cx={x} cy={y} r="7.5" fill="#23252d" />
          <circle cx={x - 2.5} cy={y - 2.5} r="2" fill="#fff" fillOpacity="0.55" />
        </g>
      ))}
      <circle cx="62" cy="55" r="3.2" fill="#15161a" fillOpacity="0.55" />
    </svg>
  );
}

export function HeroCelulares({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-cel relative ${className}`} aria-hidden>
      {APARELHOS.map((a, i) => (
        <div
          key={i}
          className="hero-cel-entra absolute"
          style={
            {
              left: a.esq,
              top: a.topo,
              width: a.larg,
              aspectRatio: "120 / 250",
              "--dx": a.dx,
              "--dy": a.dy,
              "--r0": a.r0,
              "--r1": a.r1,
              "--atraso": `${a.atraso}ms`,
            } as React.CSSProperties
          }
        >
          <div className="hero-cel-flutua size-full" style={{ "--ciclo": `${a.ciclo}s`, "--atraso-f": `${a.atraso + 1400}ms` } as React.CSSProperties}>
            <Traseira cor={a.cor} luz={a.luz} id={String(i)} />
          </div>
        </div>
      ))}
    </div>
  );
}
