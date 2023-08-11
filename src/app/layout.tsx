import { type ReactNode } from "react";
import { RootLayout } from "external-package/foo";

export const dynamic = "force-dynamic";

export default function AppLayout({ children }: { children: ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
