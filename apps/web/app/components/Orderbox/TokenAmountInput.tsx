interface Props {
  action: string;
  token: string;
  amount: string;
  maxAmount: string;
  onChange: (amount: string) => void;
  loading?: boolean;
}
export const TokenAmountInput: React.FC<Props> = ({
  action,
  token,
  amount,
  maxAmount,
  onChange,
  loading,
}) => {
  return (
    <div>
      <p className="text-light-black mb-1 text-sm">
        AMOUNT TO {action.toUpperCase()}
      </p>
      <div className="relative flex h-16 w-full">
        {loading ? (
          <div className="!absolute top-[1.15rem] right-24 animate-pulse space-x-4 w-[4rem]">
            <div className="rounded-md bg-gray-300 h-6 w-full" />
          </div>
        ) : (
          <p className="!absolute top-[1.15rem] right-24 text-light-black font-bold">
            {token}
          </p>
        )}
        <button
          className="!absolute right-3 top-4 z-10 select-none rounded bg-gradient-to-r from-orange-600 to-orange-300 py-1 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white hover:shadow-lg hover:brightness-75 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          onClick={() => onChange(maxAmount)}
        >
          MAX
        </button>
        <input
          type="text"
          className="h-full w-full rounded border-0.2 border-primary-orange bg-transparent px-3 py-4 pr-40 font-sans text-xl font-normal text-light-black outline outline-0 transition-all placeholder-light-black disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="0"
          required
          value={amount}
          onChange={(v) => {
            try {
              if (Number.isNaN(Number(v.target.value))) {
                return;
              }
            } catch {
              return;
            }
            onChange(v.target.value);
          }}
        />
      </div>
    </div>
  );
};
