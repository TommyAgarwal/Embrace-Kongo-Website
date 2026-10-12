"use client";

import React from "react";
import { Image as ImageIcon } from "@phosphor-icons/react";

interface ImagePlaceholderProps {
  label?: string;
  subtext?: string;
  aspectRatio?: string;
  height?: string | number;
  className?: string;
}

export default function ImagePlaceholder({
  label = "IMAGE PLACEHOLDER",
  subtext,
  aspectRatio = "16 / 9",
  height,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`orange-image-placeholder ${className}`}
      style={{
        aspectRatio: height ? undefined : aspectRatio,
        height: height || undefined,
      }}
    >
      <div className="placeholder-inner">
        <div className="placeholder-icon-badge">
          <ImageIcon size={28} weight="fill" />
        </div>
        <span className="placeholder-label">{label}</span>
        {subtext && <span className="placeholder-subtext">{subtext}</span>}
      </div>
    </div>
  );
}
