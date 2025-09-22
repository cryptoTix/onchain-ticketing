import fs from "fs";
import path from "path";
import { SellerCurrencyResponseInterface } from "shared";
import { Address } from "viem";

const DATA_DIR = path.resolve(__dirname, "../../data/crypto");

const defaultNetworks = [31337, 11155111, 421614]; // Ethereum, Polygon, BSC, Arbitrum, Optimism
const sampleCurrencies: Record<number, string[]> = {
  31337: ["USDC", "USDT"],
  11155111: ["USDC", "USDT"],
  421614: ["USDC", "USDT"]

};

const assetAddress: Record<number, Record<string, Address>> = {
  31337 : {
    "USDC" : `0x41a78AA83bb0274b2CC60c31534E8500AD571eaA`,
    "USDT" : `0xE5d43d6242185254B35E6C42fAa692a7d11Bb6Af`
  },
  421614 : {
    "USDC" : `0x41a78AA83bb0274b2CC60c31534E8500AD571eaA`,
    "USDT" : `0xE5d43d6242185254B35E6C42fAa692a7d11Bb6Af`
  },
  11155111: {
    "USDC" : `0x41a78AA83bb0274b2CC60c31534E8500AD571eaA`,
    "USDT" : `0xE5d43d6242185254B35E6C42fAa692a7d11Bb6Af`
  },
}

const MASTER_CONTRACT : Address = `0xDe17fF229E6a9EA25F0C255735258aA07E12739c`

const MASTER_CONTRACT_MAP: Record<number, Address> = {
  11155111 : MASTER_CONTRACT,
  421614 : MASTER_CONTRACT,
  31337: MASTER_CONTRACT
}

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
  return MASTER_CONTRACT_MAP[network];
}

export async function getPriceToCurrencyExponent(price:number, network: number, asset: string) : Promise<number> {
  return price * 1e6;
}