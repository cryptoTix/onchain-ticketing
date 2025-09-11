"use client";

import { MainPage } from "./components/Pages";
import Analytics from "./analytics";
import { Route, Navigate, Routes } from "react-router-dom";

export default function Page(): JSX.Element {
  return (
    <>
      {typeof window !== undefined && (
        <>
          <Analytics />
          {/* <Routes>

            <Route path="/" element={<Navigate to="/order-history" replace/>}>

            </Route>
          </Routes> */}
          <MainPage />
        </>
      )}
    </>
  );
}
