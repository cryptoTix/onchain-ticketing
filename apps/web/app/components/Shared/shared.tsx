"use client";

import { Dispatch, SetStateAction } from "react";

export const ArrowLeft: React.FC = () => {
  return (
    <svg
      className="h-7 w-7 text-light-black"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="5" y1="12" x2="11" y2="18" />{" "}
      <line x1="5" y1="12" x2="11" y2="6" />
    </svg>
  );
};

export const ArrowRight: React.FC = () => {
  return (
    <svg
      className="h-7 w-7 text-light-black"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="13" y1="18" x2="19" y2="12" />{" "}
      <line x1="13" y1="6" x2="19" y2="12" />
    </svg>
  );
};

export function ModalCloseIcon() {
  return (
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      className="h-5 w-5"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" /> <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg
      className="h-5 w-5 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg
      className="h-5 w-5 text-black"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export function ChevronLeftIcon() {
  return (
    <svg
      className="h-5 w-5 text-black"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6"  />
    </svg>
  )
}

export function DarkChevronDownIcon() {
  return (
    <svg
      className="h-6 w-6 text-black"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function SmallSearchIcon() {
  return (
    <svg
      className="w-4 h-4 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
}

export function FilterIcon() {
  return (
    <svg
      className="h-6 w-6 text-black"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="14" cy="6" r="2" />{" "}
      <line x1="4" y1="6" x2="12" y2="6" />{" "}
      <line x1="16" y1="6" x2="20" y2="6" /> <circle cx="8" cy="12" r="2" />{" "}
      <line x1="4" y1="12" x2="6" y2="12" />{" "}
      <line x1="10" y1="12" x2="20" y2="12" /> <circle cx="17" cy="18" r="2" />{" "}
      <line x1="4" y1="18" x2="15" y2="18" />{" "}
      <line x1="19" y1="18" x2="20" y2="18" />
    </svg>
  );
}

interface Props {
  selected: boolean;
  setLayoutType: Dispatch<SetStateAction<string>>;
}

export const GridIcon: React.FC<Props> = ({ selected, setLayoutType }) => {
  return (
    <div
      className={`${selected ? `bg-white` : `bg-transparent`} p-[2px] rounded-sm`}
      onClick={() => setLayoutType("grid")}
    >
      <svg
        className={`h-5 w-5 ${selected ? `text-black` : `text-gray-500`} hover:opacity-75 hover:cursor-pointer`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    </div>
  );
};

export const ListIcon: React.FC<Props> = ({ selected, setLayoutType }) => {
  return (
    <div
      className={`${selected ? `bg-white` : `bg-transparent`} p-[2px] rounded-sm`}
      onClick={() => setLayoutType("list")}
    >
      <svg
        className={`h-5 w-5 ${selected ? `text-black` : `text-gray-500`} hover:opacity-75 hover:cursor-pointer`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    </div>
  );
};

interface SpinnerProps {
  small?: boolean;
  type?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ small, type }) => {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      className={`${type === 'table' ? 'absolute top-[60%] left-[50%] animate-spin h-12 w-12' : `animate-spin ${small ? 'h-3 w-3' : 'h-5 w-5'}`}`}
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
    </svg>
  );
};
