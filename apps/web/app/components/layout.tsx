import { Header } from "../components/Header/Header";
import { Footer } from "./Footer/Footer";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="flex flex-col items-center m-auto p-2 sm:p-5 min-h-screen max-w-[1300px]">
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        {children}
        <Footer/>
      </main>
    </div>
  );
}
