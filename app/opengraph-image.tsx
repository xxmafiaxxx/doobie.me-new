import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamically generated Open Graph / Twitter share image. Branded gradient
 * card with the Doobie name + tagline. No static asset to maintain.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #1e438a 0%, #2576eb 45%, #05c890 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            ✈
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.5 }}>
              Doobie
            </div>
            <div
              style={{
                fontSize: 16,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#bfe2fe",
              }}
            >
              Drone Deliveries
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            Drone delivery, delivered in minutes.
          </div>
          <div style={{ fontSize: 30, color: "#eff8ff", maxWidth: 820 }}>
            Autonomous, zero-emission delivery across New York City.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 22,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <span>⚡ ~15 min delivery</span>
          <span>🌱 Zero emissions</span>
          <span>🛡️ Safe & autonomous</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
