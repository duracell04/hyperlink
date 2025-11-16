import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050c16",
        }}
      >
        <svg
          viewBox="0 0 512 512"
          width="48"
          height="48"
          role="img"
          aria-label="Hyperlink logo"
        >
          <defs>
            <linearGradient
              id="hyperlink-icon-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFE36E" />
              <stop offset="100%" stopColor="#FF9B3F" />
            </linearGradient>

            <g id="hyperlink-icon-arm">
              <path
                d="M312 372 V256 H432"
                strokeWidth="44"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="url(#hyperlink-icon-gradient)"
                fill="none"
              />
              <circle
                cx="470"
                cy="256"
                r="26"
                strokeWidth="20"
                stroke="url(#hyperlink-icon-gradient)"
                fill="none"
              />
              <rect
                x="344"
                y="284"
                width="56"
                height="24"
                rx="12"
                fill="url(#hyperlink-icon-gradient)"
              />
            </g>
          </defs>

          <g transform="rotate(45 256 256)">
            <use href="#hyperlink-icon-arm" transform="rotate(0 256 256)" />
            <use href="#hyperlink-icon-arm" transform="rotate(90 256 256)" />
            <use href="#hyperlink-icon-arm" transform="rotate(180 256 256)" />
            <use href="#hyperlink-icon-arm" transform="rotate(270 256 256)" />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    },
  );
}
