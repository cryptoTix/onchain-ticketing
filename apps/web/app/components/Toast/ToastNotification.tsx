"use client";

import React from "react";
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, resolveValue } from "react-hot-toast";

// Use $ as demiliter for toast notification info.
// In the success case, $ will delimit the message to display, tx block explorer link, and the block explorer name
export const ToastNotification: React.FC = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
      }}
    >
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-4 flex bg-white rounded shadow-lg"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <ToastIcon toast={t} />
              <p className="px-2">
                {resolveValue(t.message?.toString().split("$")[0], t)}
              </p>
            </div>
            {!t.message?.toString().includes("code") && (
              <>
                {t.message?.toString().includes("Error") ? (
                  <p className="px-7">Check console for error</p>
                ) : (
                  <a
                    className="px-7 hover:underline"
                    href={resolveValue(t.message?.toString().split("$")[1], t)}
                    target="_blank"
                  >
                    View your TX on{" "}
                    {resolveValue(t.message?.toString().split("$")[2], t)}
                  </a>
                )}
              </>
            )}
          </div>
        </Transition>
      )}
    </Toaster>
  );
};
