"use client";

import { MainPage } from "./components/Pages";
import Analytics from "./analytics";

export default function Page(): JSX.Element {
  return (
    <>
      {typeof window !== undefined && (
        <>
          <Analytics />
          <MainPage />
        </>
      )}
    </>
  );
}
