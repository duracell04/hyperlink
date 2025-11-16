import * as React from "react";

type HyperlinkLogoProps = {
  size?: number;
  className?: string;
};

export function HyperlinkLogo({ size = 64, className }: HyperlinkLogoProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient
          id="hl-grad"
          x1="256"
          y1="0"
          x2="256"
          y2="512"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFE36E" />
          <stop offset="100%" stopColor="#FF9B3F" />
        </linearGradient>

        <g id="hl-arm" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M312 372 V256 H432"
            stroke="url(#hl-grad)"
            strokeWidth={44}
          />
          <circle
            cx={470}
            cy={256}
            r={26}
            stroke="url(#hl-grad)"
            strokeWidth={20}
          />
          <rect
            x={344}
            y={284}
            width={56}
            height={24}
            rx={12}
            fill="url(#hl-grad)"
          />
        </g>
      </defs>

      <g transform="rotate(45 256 256)">
        <use href="#hl-arm" transform="rotate(0 256 256)" />
        <use href="#hl-arm" transform="rotate(90 256 256)" />
        <use href="#hl-arm" transform="rotate(180 256 256)" />
        <use href="#hl-arm" transform="rotate(270 256 256)" />
      </g>
    </svg>
  );
}
