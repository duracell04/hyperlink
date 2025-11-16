import { ImageResponse } from "next/og";

export const size = {
  width: 128,
  height: 128,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, hsl(215, 30%, 60%), hsl(215, 25%, 50%))",
          color: "white",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: -2,
          borderRadius: 36,
        }}
      >
        H
      </div>
    ),
    {
      ...size,
    },
  );
}
