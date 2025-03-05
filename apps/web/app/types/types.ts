import { Address, Chain, Hex } from "viem";

export type UserXpData = {
  v2Points: number;
  v1Points: number;
  xpByPhase: {
    phase1: number;
    phase2: number;
    phase3: number;
  };
  usersReferred: number;
};

export type V1PortfolioData = {
  xp: number;
  xpByPhase: {
    phase1: number;
    phase2: number;
    phase3: number;
  };
  usersReferred: number;
  assetInfo: {
    BTC?:
      | {
          restakedRaw: string;
          referredRaw: string;
        }
      | undefined;
    ETH?:
      | {
          restakedRaw: string;
          referredRaw: string;
        }
      | undefined;
    USD?:
      | {
          restakedRaw: string;
          referredRaw: string;
        }
      | undefined;
    BNB?:
      | {
          restakedRaw: string;
          referredRaw: string;
        }
      | undefined;
    BLAST?:
      | {
          restakedRaw: string;
          referredRaw: string;
        }
      | undefined;
    ARB?:
      | {
          restakedRaw: string;
          referredRaw: string;
        }
      | undefined;
    ETHFI?:
      | {
          restakedRaw: string;
          referredRaw: string;
        }
      | undefined;
    MKR?:
      | {
          restakedRaw: string;
          referredRaw: string;
        }
      | undefined;
    FXS?:
      | {
          restakedRaw: string;
          referredRaw: string;
        }
      | undefined;
  };
};

export type IncentivizedType = "Incentivized" | "NotIncentivized";

export type RTEVault = {
  vaultAddress: Address;
  chainId: number;
};

export type OperatorVault = {
  name: string;
  vaultAddress: Address;
  operatorId: string; // operator id in format chainId.address
}

export type Asset = {
  address: Address;
  chain: Chain;
  symbol: string;
  decimals: number;
  operatorVaults: OperatorVault[];
}

export type ChainAssets = { [chainId: number]: Asset[] }; // key is chainId

export type OperatorItem = {
  name: string;
  dssCount: number;
  networks: number[];
};

export type DSSItem = {
  name: string;
  img: string;
  alt: string;
  numOperators: number;
  networks: string[]; // network logos
  // rewards: string;
};

export type UserPosition = {
  index: number;
  amount: bigint;
  assetAddress: Address;
  assetSymbol: string;
  assetDecimals: number;
  operatorName: string;
  chain: Chain;
  vaultAddress: Address;
  withdrawalKey?: Hex;
  readyToFinish?: boolean; // set if position is a withdrawal and ready to withdraw
}

export type V1Position = {
  chainId: number;
  vault: string;
  underlyingTokenAddress: string;
  underlyingTokenDecimals: number;
  totalBalance: string;
  activeBalance: string;
  withdrawingBalance: string;
  tokenizedBalance: string;
  nonTokenizedBalance: string;
};

export type MigrateV1Position = {
  index: number;
  v1VaultSupervisorAddress: Address;
  v1VaultAddress: Address;
  asset: Asset;
  amount: bigint; // this will be active balance
  nonTokenizedBalance: bigint;
  withdrawingBalance: bigint;
}


// The following are trpc related types
export type AllowlistedAsset = {
  id: string;
  chainId: number;
  asset: Address;
  slashingHandler: Address;
}

type Operator = {
  id: string;
  name: string | null;
  chainId: number;
  address: Address;
}

export type VaultWithOperator = {
  id: string;
  owner: Address;
  name: string | null;
  underlyingToken: string;
  chainId: number;
  assetName: string;
  assetSymbol: string;
  assetAddress: Address;
  address: Address;
  decimals: number;
  totalBalance: string;
  activeBalance: string;
  withdrawingBalance: string;
  operator: Operator | null;
}

export type ActivePosition = {
  chainId: number;
  operator: string;
  vault: string;
  user: string;
  id: string;
  totalBalance: string;
  activeBalance: string;
  withdrawingBalance: string;
  vaultUnderlyingToken: Address;
  vaultUnderlyingDecimals: number;
  userAddress: string;
  operatorName: string | null;
  assetSymbol: string | null;
  decimals: number | null;
}

export type PendingWithdrawal = {
  chainId: number;
  timestamp: string;
  operator: string;
  vault: string;
  shares: string;
  withdrawalKey: string;
  staker: string;
  block: string;
  id: string;
  underlyingToken: Address;
  transactionIndex: number;
  logIndex: number;
  stakerAddress: string;
  operatorName: string | null;
  assetSymbol: string | null;
  decimals: number | null;
}

export type ActiveAndPendingPositions = {
  activePositions: ActivePosition[];
  pendingWithdrawals: PendingWithdrawal[];
}

export type DSS = {
  name: string | null;
  chainId: number;
  address: `0x${string}`;
}

export type OperatorInfo = Operator & {
  dsss: DSS[];
  vaults: {
    id: string;
    owner: Address;
    name: string | null;
    underlyingToken: string;
    operator: string;
    chainId: number;
    assetName: string;
    assetSymbol: string;
    assetAddress: Address;
    address: Address;
    decimals: number;
    totalBalance: bigint;
    activeBalance: bigint;
    withdrawingBalance: bigint;
  }[];
}

export type DSSInfo = DSS & {
  id: string;
  operatorCount: number;
  slashablePercentageWad: string;
  stakedVaultCount: number;
}

export type V2Points = {
  points: number;
}
