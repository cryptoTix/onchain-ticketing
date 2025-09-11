"use client";

import { ConnectKitButton } from "connectkit";

export const ConnectButton: React.FC = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        if (!isConnected) {
          return (
            <button
              className={`bg-purple-700 text-white px-3 py-3 rounded-xl hover:bg-purple-500 transition`}
              onClick={show}
            >
              Connect Wallet
            </button>
          );
        }
        return (
          <div className="flex items-center gap-2">
            <button
              className={`bg-white shadow-md text-light-black hover:brightness-95 py-2 px-4 rounded font-nunito font-bold disabled:cursor-not-allowed disabled:opacity-50`}
              onClick={show}
            >
              {ensName ?? truncatedAddress}
            </button>
          </div>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
