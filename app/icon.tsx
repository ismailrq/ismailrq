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
          alignItems: "center",
          background: "#101318",
          border: "3px solid #7691FF",
          color: "#F1F0EA",
          display: "flex",
          fontSize: 23,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-2px",
          width: "100%",
        }}
      >
        IR
      </div>
    ),
    size,
  );
}
