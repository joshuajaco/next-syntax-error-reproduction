import { type ReactNode, Suspense } from "react";

export async function getCurrentContext() {
  await fetch("https://www.google.com");
}

interface Props {
  children: ReactNode;
}

export async function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <Suspense>
          <Suspense>
            <IntercomSupport />
          </Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}

async function IntercomSupport() {
  await getCurrentContext();
  return null;
}
