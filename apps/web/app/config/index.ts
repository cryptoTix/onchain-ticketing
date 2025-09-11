import { getAddress } from "viem";
import { mainnet } from "viem/chains";

export const VAULTS_TO_HIDE = {
  [mainnet.id]: [
    // The following is a list of Chainnodes vaults to hide on eth mainnet
    getAddress('0x460a00f41f1eeffdfbcd7bd8dadfca1a22457e70'), // rsETH
    getAddress('0xd0595d6217486cbfd32adba08dc0f3fcd255e561'), // pufETH
    getAddress('0x8fbf6a3ba808c826acc0d35e17fd83fa460f6b03'), // swETH
    getAddress('0x199ca05cf24f815c8851bf262008e53559bc3fe7'), // sfrxETH
    getAddress('0x46ff5d90eaf1754c38d14c48ebe7822fa42db424'), // wstETH
    getAddress('0x5ddd6436d8b95a97e4e7a5dfd909d005d0e9352e'), // weETH
    getAddress('0x73e2ab6b63f153b6437ff4d05f070eb09cbc495a'), // mswETH
    getAddress('0x4bd6402cbdef28dc7823fa903de60ab6ecfd9c58'), // mstETH
    getAddress('0x8ad3a6663b713d0a777a755a84bac9127e2e8559'), // ezETH
    getAddress('0x3eb42981a1e4a55dc7ceb3369f1e19ac39d4f310'), // rswETH
    getAddress('0x7f034605dfb620a04de437cae5060285de5e0432'), // uniETH
    // The following is a list of Bware vaults to hide on eth mainnet
    getAddress('0x3bf4df6b8ddac3937d263e8c7d936f3f0c6f157a'), // rswETH
    getAddress('0xf30ec98a87062e286a7357b0070f83e000439caf'), // weETH
  ],
};
