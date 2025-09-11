import fs from "fs";
import path from "path";
import { SellerCurrencyResponseInterface } from "../../../../shared/index";
import { Address } from "viem";

const DATA_DIR = path.resolve(__dirname, "../../data/crypto");

const defaultNetworks = [1, 137, 56, 42161, 10, 31337]; // Ethereum, Polygon, BSC, Arbitrum, Optimism
const sampleCurrencies: Record<number, string[]> = {
  1: ["USDC", "USDT"],
  137: ["USDC", "USDT"],
  56: ["USDC", "USDT"],
  42161: ["USDC", "USDT"],
  10: ["USDC", "USDT"],
  31337: ["USDC", "USDT"],
};

const assetAddress: Record<number, Record<string, Address>> = {
  1 : {
    "USDC" : `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`,
    "USDT" : `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`
  },
  31337 : {
    "USDC" : `0x41a78AA83bb0274b2CC60c31534E8500AD571eaA`,
    "USDT" : `0x41a78AA83bb0274b2CC60c31534E8500AD571eaA`
  },
  10 : {
    "USDC" : `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`,
    "USDT" : `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`
  },
  42161 : {
    "USDC" : `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`,
    "USDT" : `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`
  },
}

const MASTER_CONTRACT = `0xDe17fF229E6a9EA25F0C255735258aA07E12739c`

export async function getSellerCurrencies(
  sellerId: string
): Promise<SellerCurrencyResponseInterface> {
  const filePath = path.join(DATA_DIR, `${sellerId}.json`);

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  // If file already exists, read and return
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  }

  // If not, generate sample data
  const newCurrencyData: SellerCurrencyResponseInterface = {
    tokens: {},
  };

  for (const net of defaultNetworks) {
    newCurrencyData.tokens[net] = sampleCurrencies[net];
  }

  fs.writeFileSync(filePath, JSON.stringify(newCurrencyData, null, 2), "utf-8");

  return newCurrencyData;
}

export async function getAssetAddress(network: number, asset: string) : Promise<Address | null> {
  return assetAddress[network] ? assetAddress[network][asset] : null
}

export async function getMasterContract(network: number, sellerId: string) : Promise<Address | null> {
  return MASTER_CONTRACT;
}

export async function getPriceToCurrencyExponent(price:number, network: number, asset: string) : Promise<number> {
  return price * 1e6;
}