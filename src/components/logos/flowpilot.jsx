import React from "react";
import { cn } from "@/lib/utils";

export default function FlowPilotLogo({
  className,
  size = 28,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="FlowPilot logo"
    >
      {/* Outer ring - subtle */}
      <circle
        cx="14"
        cy="14"
        r="13"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1"
      />
      {/* Main flow arc */}
      <path
        d="M7 14C7 10.134 10.134 7 14 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
      {/* Secondary arc */}
      <path
        d="M7 14C7 17.866 10.134 21 14 21C17.866 21 21 17.866 21 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      {/* Pilot dot — accent */}
      <circle cx="14" cy="7" r="2.5" fill="currentColor" />
      {/* Arrow tip at 3 o'clock */}
      <path
        d="M19 12L21 14L19 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
