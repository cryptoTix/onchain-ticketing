import numeral from "numeral";
import Decimal from "decimal.js";
import { FixedPointNumber } from "./fixedPoint";
import { Address, createPublicClient, http, isAddress, zeroAddress } from "viem";
import { Maybe } from "./maybe";
import { MigrateV1Position, Asset, OperatorVault } from "../types/types";
import { mainnet } from "viem/chains";
import { assetImageMap } from "../constants/constants";
import { VAULTS_TO_HIDE } from "../config";
import { BlockData, SeatClass, SeatData } from "../../../../shared";

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

export function fetchNext7days() : Date[] {
  const today = new Date(Date.now());
  const week : Date[] = new Array(7);
  const oneDay = (new Date())
  for (let index = 0; index < 7; index++) {
    week[index] = new Date();
    week[index].setDate(today.getDate() + index)
  }
  return week;
}

export function GetDateObjForSellerTime(ms : number, sellerTimeDiff : number) {
  const offsetMS = new Date().getTimezoneOffset() * 60 * 1000;
  const date = new Date(ms + offsetMS + sellerTimeDiff)
  console.log(ms, offsetMS, sellerTimeDiff)
  return date;
}
export function displayLongSellerDate(dateMS : number, sellerTimeDiff : number) : string {
  const dateUTC = GetDateObjForSellerTime(dateMS, sellerTimeDiff)
  return dateUTC.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long", 
      year: "numeric",
  });
}

export function displayTime(dateMS : number, sellerTimeDiff : number) : string {
  const dateUTC = GetDateObjForSellerTime(dateMS, sellerTimeDiff)
  return dateUTC.toLocaleTimeString([],
          { hour: '2-digit',
          minute: '2-digit'
          }
  );
}

export function getDateAndMonth(date:Date) : string {
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short", // 'Jan', 'Feb', etc.
  });
}

export function getDay(date:Date) : string {
  return date.toLocaleDateString("en-US", {
    weekday : "short"
  });
}

export function getLocalTime(sec : number) : string {
  const date = new Date(sec * 1000)
  return date.toLocaleDateString("en-Us", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  }) + " | " + date.toLocaleTimeString([], {
    hour :"2-digit",
    minute: "2-digit"
  })
}
export function getUTCTimeToSellerTime(ms : number, sellerTimeDiff : number) : string {
  const date = GetDateObjForSellerTime(ms, sellerTimeDiff)
  return date.toLocaleDateString("en-Us", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  }) + " | " + date.toLocaleTimeString([], {
    hour :"2-digit",
    minute: "2-digit"
  })
}

export function formatDate(date: Date): string {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
  const yy = String(date.getFullYear()).slice(-2);
  return `${dd}-${mm}-${yy}`;
}

export function isSameDate(date1:Date, date2 : Date | number) {
  if (typeof(date2) === "number") {
    return date1.getDate() == new Date(date2).getDate()
  }
  return date1.getDate() == date2.getDate()
}

export function fetchSeatPriceFromRows(rows:BlockData[][]) : number {
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      if (rows[i][j].isSeat) return rows[i][j].seatData.price
    }
  }
  return 0;
}

export function fetchRowIdFromRow(rows:BlockData[]) : string {
  for (let i = 0; i < rows.length; i++) {
      if (rows[i].isSeat) return rows[i].seatData.rowId
  }
  return "";
}

export function fetchChainName(id : string) : string {
  const chainNames: Record<number, string> = {
    1: "Ethereum Mainnet",
    5: "Goerli Testnet",
    11155111: "Sepolia Testnet",
    137: "Polygon",
    80001: "Mumbai",
    56: "BNB Chain",
    42161: "Arbitrum One",
    10: "Optimism",
    43114: "Avalanche C-Chain",
    31337: "ANVIL",
    421614: "Arbitrum Sepolia"
  };
  return chainNames[parseInt(id)];
}

export function getSeatIdsToStr(seats: Record<string, SeatClass>) : string {
  if (!seats) {
    return ""
  }
  const seatArr : string[] = [];
  Object.entries(seats).map(([_, seat]) => {
    seatArr.push(seat.toString())
  })
  return seatArr.toString()
}

export function getSeatsToStr(seats: SeatData[]) : string {
  console.log(seats)
  let str = "";
  for (let i = 0; i < seats.length; i++) {
    const obj = new SeatClass(seats[i])
    str += obj.toString()
    if (i != seats.length - 1) {
      str += ","
    }
  }
  return str
}

export function trimAddress(addr : Address) : string {
    if (isAddress(addr)) return `${addr.slice(0,6)}...${addr.slice(-4)}`
    return addr
}

// export function getTicketDataObj(data : TicketLib.StateStruct) : TicketData {
//   const seats : SeatData[] = [];
//   data.seats.forEach((value) => {
//     seats.push({
//       seatId : value.seatId,
//       price : value.price
//     })
//   })
//   return {
//     asset : data.asset as `0x{string}`,
//     showTime : data.showTime,
//     owner : data.owner as `0x{string}`,
//     amount : data.amount,
//     showId : data.showId,
//     originTimestamp : data.originTimestamp,
//     seats : seats
//   }
// }