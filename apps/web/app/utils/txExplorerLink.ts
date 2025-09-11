import { Chain } from "viem";
import { Maybe } from "./maybe";

export function makeTxExplorerLink(
  chain: Chain,
  txHash: string
): Maybe<string> {
  const explorer = Maybe.from(chain.blockExplorers?.default);
  const txHashLinkInfo = explorer.map((e) => `${e.url}/tx/${txHash}$${e.name}`);

  return txHashLinkInfo;
}
