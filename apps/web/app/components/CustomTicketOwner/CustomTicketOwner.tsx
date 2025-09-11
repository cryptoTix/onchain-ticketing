import React, { useState } from "react";
import { Address } from "viem";
import { CustomOwnerAddressDialog } from "../DialogBox/OwnerAddress";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { trimAddress } from "../../utils/helpers";

interface CustomTicketOwnerProps {
  ticketOwner: Address;
  resetTicketOwner: () => void;
  setTicketOwner: (addr : string) => void;
}

export const CustomTicketOwner: React.FC<CustomTicketOwnerProps> = ({
  ticketOwner,
  resetTicketOwner,
  setTicketOwner
}) => {
  const [openCustomOwnerInputBox, setOpenCustomOwnerInputBox] = useState<boolean>(false)
  return (
    <div className="w-full">
    <CustomOwnerAddressDialog isOpen={openCustomOwnerInputBox}
      onClose={() => {
        setOpenCustomOwnerInputBox(false)
        resetTicketOwner()
      }} 
      onConfirm={(address : string) => {
        setOpenCustomOwnerInputBox(false)
        setTicketOwner(address)
      }}
    />
    {!ticketOwner ?
      <button
        className="text hover:underline mt-2"
        onClick={() => setOpenCustomOwnerInputBox(true)}
        >
        Need custom ticket owner?
      </button> :
      <div className="w-1/2 flex justify-between mt-2 mx-1">
        <div className="justify-start text-xs">
          <div className="text text-white">Sucessfully set ticket owner as:</div>
          <div className="text text-white">{trimAddress(ticketOwner)}</div>
        </div>
        <button className="rounded hover:bg-purple-500 transition"
          onClick={() => setOpenCustomOwnerInputBox(true)}>
            <HiOutlinePencilAlt className="text-purple-700 w-8 h-8"/>
        </button>
      </div>
    }
    </div>

  )
}