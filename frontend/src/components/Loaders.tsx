import * as React from "react";
import { HyperlinkLogo } from "@/components/HyperlinkLogo";

type LoaderBaseProps = {
  message?: string;
  size: number;
  className?: string;
  showDots?: boolean;
};

function LoaderBase({
  message,
  size,
  className,
  showDots = false,
}: LoaderBaseProps) {
  const cssSize = `${size}px`;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`hyperlink-loader ${className ?? ""}`}
    >
      <span className="sr-only">{message ?? "Loading"}</span>
      <div
        className="hyperlink-loader-visual"
        style={{ ["--loader-size" as string]: cssSize }}
        aria-hidden="true"
      >
        <div className="hyperlink-loader-ring" />
        <HyperlinkLogo
          size={Math.round(size * 0.52)}
          className="hyperlink-loader-logo"
        />
      </div>
      {message && <p className="hyperlink-loader-message">{message}</p>}
      {showDots && (
        <div className="hyperlink-loader-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )}
    </div>
  );
}

type PrimaryLoaderProps = {
  message?: string;
};

export function PrimaryLoader({
  message = "Indexing your tools…",
}: PrimaryLoaderProps) {
  return (
    <div className="hyperlink-loader-shell">
      <LoaderBase
        size={160}
        className="hyperlink-loader--primary"
        message={message}
        showDots
      />
    </div>
  );
}

type InlineLoaderProps = {
  message?: string;
  className?: string;
};

export function InlineLoader({
  message = "Loading…",
  className,
}: InlineLoaderProps) {
  return (
    <LoaderBase
      size={96}
      className={`hyperlink-loader--inline ${className ?? ""}`}
      message={message}
      showDots={false}
    />
  );
}
