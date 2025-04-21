import numeral from "numeral";
import Decimal from "decimal.js";
import { FixedPointNumber } from "./fixedPoint";
import { Address, createPublicClient, fallback, getAddress, http, zeroAddress } from "viem";
// import { ERC20 } from "@repo/contracts";
import { Maybe } from "./maybe";
import { MigrateV1Position, Asset, OperatorVault } from "../types/types";
import { mainnet } from "viem/chains";
import { assetImageMap } from "../constants/constants";
import { VAULTS_TO_HIDE } from "../config";

export const decimalFormat = (amount: string, twoPlaces?: boolean) => {
  return numeral(Number(amount).toFixed(4)).format(
    twoPlaces ? `0.00a` : `0.00[00]a`
  );
};

export const mapRawAmountToUi = (rawAmount: string, decimals: number) => {
  return new Decimal(rawAmount).div(new Decimal(10).pow(decimals)).toString();
};

export const formatTvl = (rawAmount: string) => {
  return formatXP(BigInt(rawAmount) / BigInt(10 ** 18));
};

export const formatXP = (amount: bigint) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatNumStakers = (amount: number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const isEmpty = (val: string | null) => {
  return !val || val === "undefined" || val === "null";
};

export const checkInsufficientBalance = (
  val: string,
  decimals: number,
  balance: string
) => {
  return new Decimal(balance).lessThan(
    new Decimal(FixedPointNumber.fromDecimal(val, decimals).toRawString())
  );
};

export const checkZeroAmount = (amount: Maybe<string>): boolean => {
  return (
    !amount.boolean() || amount.map((v) => Number(v)).getOrElse(Number) === 0
  );
};

export async function fetchTokenBalance(asset: Asset, user: Address) {
  // const publicClient = createPublicClient({
  //   chain: asset.chain,
  //   transport:
  //     asset.chain.id === 5000
  //       ? fallback([
  //           http(asset.chain.rpcUrls.default.http[0]),
  //           http(asset.chain.rpcUrls.default.http[1]),
  //           http(asset.chain.rpcUrls.default.http[2]),
  //         ])
  //       : http(asset.chain.rpcUrls.default.http[0]),
  // });

  // const tokenBalance = await publicClient.readContract({
  //   abi: ERC20.abi,
  //   address: asset.address,
  //   functionName: "balanceOf",
  //   args: [user],
  // });

  return 0;
}

export async function fetchKarakEthBalance(asset: Asset, user: Address) {
  const publicClient = createPublicClient({
    chain: asset.chain,
    transport: http(asset.chain.rpcUrls.default.http[0]),
  });
  const ethBalance = await publicClient.getBalance({ address: user });
  return ethBalance;
}

export const getActivityTypeDisplayName = (type: string) => {
  switch (type) {
    case "deposit":
      return "Deposit";
    case "startWithdraw":
      return "Start Withdraw";
    case "finishWithdraw":
      return "Finish Withdraw";
    default:
      return "N/A";
  }
};

export const isValidPositionToMigrate = (position: MigrateV1Position, operator: OperatorVault) => {
  return position.v1VaultSupervisorAddress !== zeroAddress &&
    position.v1VaultAddress !== zeroAddress &&
    position.asset !== emptyAsset() &&
    operator.vaultAddress !== zeroAddress &&
    operator.operatorId !== "";
};

export const emptyOperator = () => {
  return {
    name: "N/A",
    vaultAddress: zeroAddress,
    operatorId: "",
  } as OperatorVault;
};

export const emptyAsset = () => {
  const emptyAssetStruct: Asset = {
    address: zeroAddress,
    chain: mainnet,
    symbol: "N/A",
    decimals: 18,
    operatorVaults: [],
  };
  return emptyAssetStruct;
};

export const getTokenImg = (assetSymbol: string) => {
  return assetImageMap[assetSymbol] ?? "";
}

export const extractOperatorName = (operator: string): string => {
  return operator.split('.')[0] ?? "N/A"
};

export function formatOperatorVaultsName(operatorVaults: OperatorVault[]) {
  return operatorVaults.reduce<OperatorVault[]>((acc, operator, index, array) => {
    // Find if this operator has multiple vaults
    const operatorVaults = array.filter((v) => v.operatorId === operator.operatorId);
  
    const vaultName = operatorVaults.length > 1
      ? `${operator.name} Vault ${operatorVaults.indexOf(operator) + 1}`
      : `${operator.name}`;
  
    acc.push({ ...operator, name: vaultName });
    return acc;
  }, []);
}

export function shuffleList<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]] as [T, T];
  }
  return shuffled;
}

export function filterHiddenVaultsOnDeposit(selectedChainId: number, operatorVaults: OperatorVault[]) {
  if (selectedChainId === mainnet.id) {
    return operatorVaults.filter((v) => !VAULTS_TO_HIDE[mainnet.id].includes(v.vaultAddress));
  }
  return operatorVaults;
}
