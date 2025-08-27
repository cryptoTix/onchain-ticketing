import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { isAddress } from "viem";

interface CustomOwnerAddressDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (addr : string) => void;
}

export const CustomOwnerAddressDialog: React.FC<CustomOwnerAddressDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [value, setValue] = useState<string>(null)
  const [isValidInput, setIsValidInput] = useState<boolean>(false)

  useEffect(() => {
    if (isAddress(value)) {
      setIsValidInput(true)
    } else {
      setIsValidInput(false)
    }
  }, [value])
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
                Enter ticket owner address
              </Dialog.Title>
              <Dialog.Description className="mb-4 text-sm text-gray-700">
                This address will be used as ticket owner and to validate the ticket.
              </Dialog.Description>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="0x....."
                className="p-3 w-full rounded-md bg-white/10 text-black text-xs placeholder-gray-400 border-b border-gray-500 focus:outline-none focus:ring-0 focus:border-b-purple-500 hover:border-b-white transition-all duration-200"
              />
              <div className="flex justify-start gap-4 mt-6">
                 <button
                  onClick={() => onConfirm(value)}
                  disabled={!isValidInput}
                  title="Sets the owner address as the input address"
                  className={`px-4 py-2 border text-white rounded-xl transition-all duration-150 ${
                    !isValidInput
                      ? "bg-red-800 border-gray-500 cursor-not-allowed"
                      : "bg-purple-600 border-gray-300 hover:bg-purple-700"
                  }`}
                >
                  {isValidInput ? "Confirm" : "Invalid Address"}
                </button>
                <button
                  onClick={onClose}
                  title="Resets the owner address to connected wallet address"
                  className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
                >
                  Reset
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
