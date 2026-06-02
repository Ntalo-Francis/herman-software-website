import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "HERMAN Software Solutions";
  const subtitle = searchParams.get("subtitle") || "Engineered Software, Measurable Results";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A1F3F",
          padding: "80px",
        }}
      >
        {/* Hexagon Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexWrap: "wrap",
            opacity: 0.05,
          }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <svg key={i} width="60" height="60" viewBox="0 0 60 60">
              <path
                d="M30 2l24 14v28L30 58 6 44V16L30 2z"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          ))}
        </div>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <svg width="64" height="64" viewBox="0 0 40 40" fill="none">
            <polygon
              points="20,2 36,11 36,29 20,38 4,29 4,11"
              stroke="#00C2BA"
              strokeWidth="2"
              fill="none"
            />
            <line x1="14" y1="12" x2="14" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="26" y1="12" x2="26" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="14" y1="20" x2="26" y2="20" stroke="#00C2BA" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>HERMAN</span>
            <span style={{ fontSize: "10px", letterSpacing: "4px", color: "#a0aec0" }}>
              SOFTWARE SOLUTIONS
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "24px",
            color: "#a0aec0",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          {subtitle}
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#00C2BA",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}