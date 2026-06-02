"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface ThemedImageProps {
  src: string;
  darkSrc?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function ThemedImage({ src, darkSrc, alt, className = "", width, height }: ThemedImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <img src={src} alt={alt} className={className} width={width} height={height} />;
  }

  const currentSrc = resolvedTheme === "dark" && darkSrc ? darkSrc : src;

  return <img src={currentSrc} alt={alt} className={className} width={width} height={height} />;
}