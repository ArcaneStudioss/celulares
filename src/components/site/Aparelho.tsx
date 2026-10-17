import { useId } from "react";

// Ilustração genérica de aparelho (vista de trás), só vetor: não é foto do produto nem de marca.
export function Aparelho({ topo, base, className = "" }: { topo: string; base: string; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 100 206" className={className} aria-hidden focusable="false">
      <defs>
        <linearGradient id={`c${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={topo} />
          <stop offset="1" stopColor={base} />
        </linearGradient>
        <linearGradient id={`b${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.38" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="97" height="203" rx="21" fill={`url(#c${id})`} />
      <rect x="1.5" y="1.5" width="97" height="203" rx="21" fill={`url(#b${id})`} />
      <rect x="1.5" y="1.5" width="97" height="203" rx="21" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="1.2" />
      <rect x="-1" y="38" width="3" height="14" rx="1.5" fill={base} />
      <rect x="98" y="50" width="3" height="24" rx="1.5" fill={base} />
      <rect x="9" y="9" width="46" height="46" rx="12" fill="#fff" fillOpacity="0.16" stroke="#fff" strokeOpacity="0.4" />
      {[[22, 22], [22, 42], [41, 32]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="8.2" fill="#111318" stroke="#fff" strokeOpacity="0.35" />
          <circle cx={x} cy={y} r="4.2" fill="#243350" />
          <circle cx={x - 1.4} cy={y - 1.4} r="1.1" fill="#fff" fillOpacity="0.7" />
        </g>
      ))}
      <circle cx="46" cy="16" r="2.6" fill="#f6ead0" />
    </svg>
  );
}
