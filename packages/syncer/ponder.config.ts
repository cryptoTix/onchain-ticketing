import { createConfig } from "ponder";
import { MasterABI } from "./abis/masterABI";
import { Master__factory } from "../../typechain-types/index";

export default createConfig({
  database: {
    kind: 'postgres',
  },
  ordering: "multichain",
  chains: {
    arbitrumSepolia: {
      id: 421614,
      rpc: 'https://arbitrum-sepolia-rpc.publicnode.com',
    },
    sepolia: {
      id : 11155111,
      rpc : "https://aged-cool-scion.ethereum-sepolia.quiknode.pro/be58acedb98d22396bfa8a0819a31ee12043746b/"
    }
  },
  contracts: {
    Master: {
      abi: MasterABI,
      chain : {
        arbitrumSepolia : {
          address : "0xDe17fF229E6a9EA25F0C255735258aA07E12739c",
          startBlock : 197069943
        },
        sepolia : {
          address : "0xDe17fF229E6a9EA25F0C255735258aA07E12739c",
          startBlock : 9258406
        }
      }
    },
  },
});
