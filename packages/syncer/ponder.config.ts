import { createConfig } from "ponder";
import { MasterABI } from "./abis/masterABI";
import { Master__factory } from "../../typechain-types/index";
import { http } from "viem";

export default createConfig({
  chains: {
    anvil: {
      id: 31337,
      rpc: "http://127.0.0.1:8545"
    },
  },
  contracts: {
    Master: {
      abi: MasterABI,
      chain : "anvil",
      address : "0xDe17fF229E6a9EA25F0C255735258aA07E12739c",
      startBlock: 23235860
    },
  },
});
