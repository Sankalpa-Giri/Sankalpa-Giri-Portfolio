"use client";

import type { ComponentType, PropsWithChildren, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

type NextThemesProviderWithChildren = ComponentType<ThemeProviderProps & { children?: ReactNode }>;
const ThemeProvider = NextThemesProvider as NextThemesProviderWithChildren;

export function Providers({
  children,
}: PropsWithChildren<{}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}