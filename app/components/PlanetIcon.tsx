export default function PlanetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <g
        transform="rotate(-18 16 16)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {/* Anillo trasero */}
        <path d="M3 16A13 5 0 0 1 29 16" />
      </g>
      {/* Planeta */}
      <circle cx="16" cy="16" r="7.5" fill="currentColor" />
      <circle cx="13.5" cy="13.5" r="2" fill="#fff" opacity="0.3" />
      <g
        transform="rotate(-18 16 16)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {/* Anillo delantero */}
        <path d="M3 16A13 5 0 0 0 29 16" />
      </g>
    </svg>
  );
}
