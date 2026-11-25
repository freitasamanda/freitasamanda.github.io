export function HeroOrganicBackdrop({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Top overlapping terracotta ellipse */}
      <ellipse
        cx="228"
        cy="122"
        rx="168"
        ry="98"
        transform="rotate(-10 228 122)"
        fill="#D65E33"
        className="organic-float-a"
      />
      {/* Middle wider organic ellipse */}
      <ellipse
        cx="248"
        cy="264"
        rx="184"
        ry="108"
        transform="rotate(9 248 264)"
        fill="#D65E33"
        className="organic-float-b"
      />
      {/* Bottom counter-tilted ellipse */}
      <ellipse
        cx="205"
        cy="398"
        rx="172"
        ry="96"
        transform="rotate(-7 205 398)"
        fill="#D65E33"
        className="organic-float-c"
      />
    </svg>
  );
}

export function ContactOrganicStack({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Three stacked overlapping organic ellipses directly echoing the brand reference */}
      <ellipse
        cx="460"
        cy="78"
        rx="410"
        ry="136"
        transform="rotate(-4.5 460 78)"
        fill="#D65E33"
        className="organic-float-a"
      />
      <ellipse
        cx="500"
        cy="220"
        rx="450"
        ry="154"
        transform="rotate(3.5 500 220)"
        fill="#C24E25"
        className="organic-float-b"
      />
      <ellipse
        cx="440"
        cy="362"
        rx="420"
        ry="138"
        transform="rotate(-3.5 440 362)"
        fill="#D65E33"
        className="organic-float-c"
      />
    </svg>
  );
}

export function OrganicAccentPebble({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <ellipse
        cx="54"
        cy="34"
        rx="44"
        ry="24"
        transform="rotate(-9 54 34)"
        fill="#D65E33"
      />
      <ellipse
        cx="72"
        cy="44"
        rx="38"
        ry="20"
        transform="rotate(8 72 44)"
        fill="#D65E33"
        fillOpacity="0.88"
      />
    </svg>
  );
}
