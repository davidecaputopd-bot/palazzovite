"use client";

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="it">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          background: "#F4EFE4",
          color: "#2B2419",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <h1 style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", margin: "0 0 16px", fontWeight: 600 }}>
          Qualcosa è andato storto
        </h1>
        <p style={{ color: "#4A4233", maxWidth: "28rem", margin: "0 0 32px", lineHeight: 1.6 }}>
          Si è verificato un errore imprevisto. Riprova o scrivici a palazzovite@gmail.com.
        </p>
        <button
          type="button"
          onClick={() => unstable_retry()}
          style={{
            background: "#2B2419",
            color: "#F4EFE4",
            border: "none",
            borderRadius: "9999px",
            padding: "16px 32px",
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Riprova
        </button>
      </body>
    </html>
  );
}
