"use client";

import { Suspense } from "react";
import { MainPage } from "./components/Pages";
import { LandingLoader } from "./components/Loader/Loader";

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
    <Suspense fallback={<LandingLoader />}> 
      <Page />
    </Suspense>
  );
}
