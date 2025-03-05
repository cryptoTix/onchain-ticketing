"use client";

import karakXP from "../../assets/karak-xp.svg";
import Image from "next/image";
import { formatXP } from "../../utils/helpers";
import { ToolTip } from "../ToolTip/ToolTip";
import { UserXpData } from "../../types/types";

interface Props {
  userXpData: UserXpData;
  isPending: boolean;
  isError: boolean;
}

export const UserInfo: React.FC<Props> = ({
  userXpData,
  isPending,
  isError,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full sm:w-[31rem]">
      <div className="flex flex-col items-start bg-white border border-light-gray-border rounded-md w-full h-[19rem] py-8 px-8">
        <div className="flex gap-2 items-center">
          <Image src={karakXP} alt="karak-logo" className="size-10" />
          <p className="text-light-black text-2xl ml-1">Karak XP</p>
          <div>
            <ToolTip
              text="Your total XP rewards earned by restaking assets on Karak. PHASE 1 is XP earned before 4/8/2024. PHASE 2 is XP earned after 4/8/2024."
              dark
              long
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start mt-8">
          <div className="flex gap-2">
            <p className="font-semibold text-sm text-light-black opacity-70">
              PHASE 1
            </p>
            {isPending || isError ? (
              <div className="animate-pulse flex space-x-4 w-24">
                <div className="rounded-md bg-gray-300 h-5 w-full" />
              </div>
            ) : (
              <p className="font-bold text-sm">
                {formatXP(BigInt(Math.floor(userXpData.xpByPhase.phase1)))}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <p className="font-semibold text-sm text-light-black opacity-70">
              PHASE 2
            </p>
            {isPending || isError ? (
              <div className="animate-pulse flex space-x-4 w-24">
                <div className="rounded-md bg-gray-300 h-5 w-full" />
              </div>
            ) : (
              <p className="font-bold text-sm">
                {formatXP(BigInt(Math.floor(userXpData.xpByPhase.phase2 + userXpData.v2Points)))}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <p className="font-semibold text-sm text-light-black opacity-70">
              REFERRALS
            </p>
            {isPending || isError ? (
              <div className="animate-pulse flex space-x-4 w-24">
                <div className="rounded-md bg-gray-300 h-5 w-full" />
              </div>
            ) : (
              <p className="font-bold text-sm">
                {formatXP(BigInt(Math.floor(userXpData.usersReferred)))}
              </p>
            )}
          </div>
        </div>
        <div className="mt-8 flex py-3 px-4 border border-light-gray-border rounded-md w-full justify-between">
          <p className="text-lg font-nunito tracking-wide font-semibold">
            TOTAL
          </p>
          {isPending || isError ? (
            <div className="animate-pulse flex space-x-4 w-full">
              <div className="rounded-md bg-gray-300 h-6 w-5/12 ml-auto" />
            </div>
          ) : (
            <p className="text-lg font-nunito tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400 font-bold">
              {formatXP(BigInt(Math.floor(userXpData.v1Points + userXpData.v2Points)))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
