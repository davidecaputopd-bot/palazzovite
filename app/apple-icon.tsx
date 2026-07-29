import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#B8C3B1",
          color: "#2B2419",
          fontSize: 92,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.04em",
        }}
      >
        PV
      </div>
    ),
    { ...size },
  );
}
