import { getAddress } from "viem";
import sepolia from "../assets/sepolia.svg";
import anvil from "../assets/anvil.svg";
import arb from  "../assets/arbitrum.svg";
import eth from "../assets/eth.svg";
import fraxtal from "../assets/fraxtal.svg";
import mantle from "../assets/mantle.svg";
import bsc from "../assets/bsc.svg";
import k2 from "../assets/k2.svg";
import usdc from "../assets/usdc.svg";
import weETH from "../assets/weETH.svg";
import usdt from "../assets/usdt.svg";
import weth from "../assets/WETH.svg";
import ethfiGov from "../assets/ethfiGov.svg";
import ezETH from "../assets/ezETH.svg";
import rsETH from "../assets/rsETH.svg";
import wstETH from "../assets/wstETH.svg";
import fraxShare from "../assets/fraxShare.svg";
import sfrxETH from "../assets/sfrxETH.svg";
import sFRAX from "../assets/sFRAX.svg";
import lisUSD from "../assets/lisUSD.svg";
import slisBNB from "../assets/slisBNB.svg";
import SolvBTC from "../assets/SolvBTC.svg";
import mETH from "../assets/mETH.svg";
import rswETH from "../assets/rswETH.svg";
import uniETH from "../assets/uniETH.svg";
import mswETH from "../assets/mswETH.svg";
import mstETH from "../assets/mstETH.svg";
import pufETH from "../assets/pufETH.svg";
import swETH from "../assets/swETH.svg";
import ETHx from "../assets/ETHx.svg";
import cbETH from "../assets/cbETH.svg";
import USDe from "../assets/usde.svg";
import sUSDe from "../assets/sUSDe.svg";
import sDAI from "../assets/sDAI.svg";
import wbtc from "../assets/wbtc.svg";
import mkr from "../assets/mkr.svg";
import usd0 from "../assets/usd0.svg";
import sdeUSD from "../assets/sdeUSD.svg";
import lbtc from "../assets/lbtc.svg";
import ptweEth from "../assets/pt-weETH.svg";
import buidl from "../assets/buidl.svg";

export const QUEUING_PERIOD_SECONDS = 60 * 60 * 24 * 9; // 9 days

export const FALLBACK_TRPC_URL = "http://localhost:42069/trpc";

export const KARAK_WETH_ADDRESS = "0x4200000000000000000000000000000000000006";

export const WETH_MAX_MARGIN = BigInt(800000000000000); // 0.0008

export const v1VaultSupervisorAddressMap: { [key: number]: string } = {
  1: getAddress("0x54e44DbB92dBA848ACe27F44c0CB4268981eF1CC"), // ethereum
  42161: getAddress("0x399f22ae52a18382a67542b3De9BeD52b7B9A4ad"), // arbitrum
  5000: getAddress("0x4a2b015CcB8658998692Db9eD4522B8e846962eD"), // mantle
  56: getAddress("0x4a2b015CcB8658998692Db9eD4522B8e846962eD"), // bsc
  81457: getAddress("0x58b5dc145ca2BE84fe087614CFe36055be609BB3"), // blast
  252: getAddress("0xdF922c74CC0dc394022ea002Af5aFaa32348670e"), // fraxtal
  2410: getAddress("0xB308474350D75447cA8731B7Ce87c9ee9DA03B1C") // karak
};

export const chainImageMap: { [key: number]: string } = {
  11155111: sepolia,
  31337: anvil,
  42161: arb,
  252: fraxtal,
  56: bsc,
  5000: mantle,
  2410: k2,
  1: eth,
};

export const assetImageMap: { [key: string]: string} = {
  "USDC": usdc,
  "USDT": usdt,
  "WETH": weth,
  "weETH": weETH,
  "ARB": arb,
  "ETHFI": ethfiGov,
  "ezETH": ezETH,
  "rsETH": rsETH,
  "wstETH": wstETH,
  "FXS": fraxShare,
  "sfrxETH": sfrxETH,
  "sFRAX": sFRAX,
  "lisUSD": lisUSD,
  "SolvBTC": SolvBTC,
  "slisBNB": slisBNB,
  "mETH": mETH,
  "rswETH": rswETH,
  "USDC.e": usdc,
  "uniETH": uniETH,
  "mstETH": mstETH,
  "mswETH": mswETH,
  "pufETH": pufETH,
  "swETH": swETH,
  "ETHx": ETHx,
  "cbETH": cbETH,
  "USDe": USDe,
  "sUSDe": sUSDe,
  "sDAI": sDAI,
  "WBTC": wbtc,
  "MKR": mkr,
  "USD0++": usd0,
  "sdeUSD": sdeUSD,
  "LBTC": lbtc,
  "PT-weETH-26DEC2024": ptweEth,
  "BUIDL": buidl,
};
  
export const operatorImageMap: { [key: string]: string } = {
  // "11155111.0x54603E6fd3A92E32Bd3c00399D306B82bB3601Ba" : mkr,
  // "31337.0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" : etherfi,
};
  
export const dssImageMap: { [key: string]: string } = {
  // "11155111.0x56075250EB88636bADa3bcFCeb4D05f5aFF6Bed7" : etherfi,
};

export const BLOCKED_COUNTRIES = [
  "Russia",
  "Iran",
  "North Korea",
  "Syria",
  "Afghanistan",
  "Cuba",
  "Belarus",
  "Burundi",
  "Central African Republic",
  "Democratic Republic of the Congo",
  "Iraq",
  "Libya",
  "Lebanon",
  "Somalia",
  "Venezuela",
  "Yemen",
  "Zimbabwe",
  "Sudan",
  "South Sudan",
  "Mali",
  "Myanmar",
  "Burma",
  "Nicaragua",
  "Ethiopia",
];

export const BLOCKED_ADDRESSES = [
  "0x7F367cC41522cE07553e823bf3be79A889DEbe1B",
  "0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b",
  "0x901bb9583b24D97e995513C6778dc6888AB6870e",
  "0xA7e5d5A720f06526557c513402f2e6B5fA20b008",
];
