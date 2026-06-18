import { ImageResponse } from "next/og";
import { getTier, formatUSD } from "@/lib/crowdfund";

export const runtime = "edge";

interface CertificateParams {
  name: string;
  tierId: string;
  serial: string;
  date: string;
}

/**
 * Generates a personalized "Founding Backer" certificate as a PNG.
 *
 * Styled to evoke a classic stock certificate, but the language is explicit
 * that this is a symbolic reward — NOT a security, equity, or ownership.
 * Output: 1600x1131 (~A4 landscape @ ~150dpi) for crisp printing/sharing.
 */
export async function generateCertificate({
  name,
  tierId,
  serial,
  date,
}: CertificateParams) {
  const tier = getTier(tierId) ?? {
    name: "Founding Backer",
    amount: 0,
    tagline: "",
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #fbf8f0 0%, #f3ecda 100%)",
          fontFamily: "serif",
          color: "#1e438a",
          position: "relative",
        }}
      >
        {/* Ornamental border */}
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "3px double #1e438a",
            borderRadius: 8,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 40,
            border: "1px solid #bfa94e",
            borderRadius: 4,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "90px 110px",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  background: "#1e438a",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                }}
              >
                ✈
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
                  DOOBIE
                </div>
                <div
                  style={{
                    fontSize: 14,
                    letterSpacing: 4,
                    color: "#1d5fd8",
                    marginTop: 2,
                  }}
                >
                  DRONE DELIVERIES
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: 18,
                letterSpacing: 6,
                color: "#b8862a",
                marginTop: 26,
                textTransform: "uppercase",
              }}
            >
              Founding Backer Certificate
            </div>
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                marginTop: 14,
                letterSpacing: -1,
              }}
            >
              This certifies that
            </div>
          </div>

          {/* Name + tier */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                fontSize: 64,
                fontWeight: 700,
                fontStyle: "italic",
                color: "#0b1220",
                padding: "8px 60px",
                borderBottom: "2px solid #bfa94e",
                maxWidth: 1200,
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: 26,
                color: "#3a3a3a",
                marginTop: 28,
                maxWidth: 1100,
                lineHeight: 1.4,
              }}
            >
              is a <span style={{ fontWeight: 700 }}>{tier.name}</span> of Doobie
              Drone Deliveries — a homegrown Brooklyn company building fast,
              autonomous, zero-emission delivery for New York City.
            </div>
          </div>

          {/* Footer: serial, date, disclaimer, signatures */}
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: "100%",
                fontSize: 16,
                color: "#3a3a3a",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 12, letterSpacing: 2, color: "#888" }}>
                  CERTIFICATE NO.
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#1e438a" }}>
                  {serial}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: 200,
                    borderTop: "1px solid #1e438a",
                    paddingTop: 8,
                    fontSize: 18,
                    fontStyle: "italic",
                  }}
                >
                  The Doobie Team
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <div style={{ fontSize: 12, letterSpacing: 2, color: "#888" }}>
                  DATE
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#1e438a" }}>
                  {date}
                </div>
              </div>
            </div>

            {/* Disclaimer — critical: this is NOT a security */}
            <div
              style={{
                marginTop: 30,
                paddingTop: 16,
                borderTop: "1px solid #d4c79a",
                fontSize: 12,
                color: "#888",
                textAlign: "center",
                maxWidth: 1200,
                lineHeight: 1.5,
              }}
            >
              This is a symbolic, commemorative reward for a rewards-based
              crowdfunding contribution. It confers no equity, ownership, shares,
              dividends, or securities of any kind in Doobie Drone Deliveries.
              {tier.amount > 0
                ? ` Backer reward tier: ${tier.name} (${formatUSD(tier.amount)}).`
                : ""}
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1600, height: 1131 }
  );
}
