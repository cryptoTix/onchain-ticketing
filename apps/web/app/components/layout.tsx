import { Header } from "../components/Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-red-600 top-0 w-svw p-4">
        <div className="flex gap-1 items-center justify-center">
          <h2 className="text-white text-sm font-semibold text-center">
            Due to an issue we are facing with our indexer, some users may experience issues migrating and unstaking their positions, and XP not being displayed correctly at the moment.
            Please be patient as we are working to resolve this issue as quickly as possible.
            All activity is recorded on-chain and fully traceable, and will be reflected correctly on the app after we apply the fix.
          </h2>
        </div>
      </div>
      <main className="flex flex-col items-center m-auto p-5 sm:p-10 min-h-screen max-w-[1300px]">
        <Header />
        {children}
      </main>
    </div>
  );
}
