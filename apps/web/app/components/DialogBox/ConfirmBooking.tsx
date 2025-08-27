"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ConfirmBookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  seatCount: number;
  totalPrice: number;
}

export const ConfirmBookingDialog: React.FC<ConfirmBookingDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  seatCount,
  totalPrice,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-100"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 text-gray-900 shadow-xl">
              <Dialog.Title className="text-lg font-semibold mb-4">
                Confirm Your Booking
              </Dialog.Title>
              <Dialog.Description className="mb-4 text-sm text-gray-700">
                You are about to book <strong>{seatCount}</strong> seat(s) for a total of <strong>{totalPrice} USD</strong>.
                <br />
                Once confirmed, your seats will be locked for <strong>15 minutes</strong>. You must complete the payment within this time.
              </Dialog.Description>

              <div className="flex justify-start gap-4 mt-6">
                <button
                  onClick={onConfirm}
                  className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
                >
                  Confirm & Lock Seats
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
