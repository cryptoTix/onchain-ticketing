interface Props {
  text: string;
  dark?: boolean;
  long?: boolean;
  small?: boolean;
}

export const ToolTip: React.FC<Props> = ({ text, dark, long, small }) => {
  return (
    <span className="group relative z-30">
      <div
        className={`absolute top-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block ${long ? "w-[20rem]" : "w-auto"}`}
      >
        <div
          className={`top-full right-0 rounded bg-black px-4 py-2 text-sm text-white text-center ${long ? "whitespace-normal" : "whitespace-nowrap"}`}
        >
          {text}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className={`${small ? "w-5 h-5" : "w-6 h-6"} ${dark ? "text-light-black" : "text-gray-100"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    </span>
  );
};
