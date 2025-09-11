"use client";

import React, { useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, resolveValue, toast, Toast } from "react-hot-toast";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const ToastNotification: React.FC = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: Infinity, // manual control
      }}
    >
      {(t: Toast) => <ToastWithHoverControl toast={t} />}
    </Toaster>
  );
};

const ToastWithHoverControl: React.FC<{ toast: Toast }> = ({ toast: t }) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Start auto-dismiss after 5s unless paused
  useEffect(() => {
    if (!t.visible) return;
    timeoutRef.current = setTimeout(() => {
      toast.dismiss(t.id);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [t.id, t.visible]);

  const pauseTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const resumeTimer = () => {
    timeoutRef.current = setTimeout(() => {
      toast.dismiss(t.id);
    }, 3000); // shorter on resume
  };

  return (
    <Transition
      appear
      show={t.visible}
      className="transform p-4 flex bg-white rounded shadow-lg relative transition-all duration-150"
      enter="transition-all duration-150"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transition-all duration-150"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-75"
    >
      <div
        className="flex flex-col gap-2 text-[#0b0033] w-full"
        onMouseEnter={pauseTimer}
        onMouseLeave={resumeTimer}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ToastIcon toast={t} />
            <p className="px-2">
              {resolveValue(t.message?.toString().split("$")[0], t)}
            </p>
          </div>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="text-xl text-gray-500 hover:text-black px-2 transform transition-transform duration-200 hover:scale-125 hover:rotate-90"
            aria-label="Dismiss toast"
          >
            ×
          </button>
        </div>

        {!t.message?.toString().includes("code") && (
          <>
            {t.message?.toString().includes("Error") ? (
              <p className="px-7">Check console for error</p>
            ) : (
              <a
                className="px-7 hover:underline text-sm"
                href={resolveValue(t.message?.toString().split("$")[1], t)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View your TX on{" "}
                {resolveValue(t.message?.toString().split("$")[2], t)}
              </a>
            )}
          </>
        )}
      </div>
    </Transition>
  );
};
