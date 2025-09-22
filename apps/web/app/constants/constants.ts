import { Address, getAddress } from "viem";
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

export const chainImageMap: { [key: number]: string } = {
  11155111: sepolia,
  31337: anvil,
  421614: arb,
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
export const BLOCKED_COUNTRIES = [
];

export const BLOCKED_ADDRESSES = [];

export const MasterContractMap: { [key: number]: Address } = {};