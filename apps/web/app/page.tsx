"use client";

import { Suspense } from "react";
import { MainPage } from "./components/Pages";

function Page(): JSX.Element {
  return (
    <>
      {typeof window !== undefined && (
        <>
          <MainPage />
        </>
      )}
    </>
  );
}

export default function Main() {
  return (
    <Suspense fallback={<></>}> 
      <Page />
    </Suspense>
  );
}