"use client";
import { PurchaseData } from "../types/types";
import { Master } from "../../../packages/contracts/ts-artifacts/Master.sol/Master"
import { Address, createPublicClient, fallback, getContract, http, zeroAddress, createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";
export async function purchase(
  PurchaseData: PurchaseData
): Promise<void> {

  const walletClient = createWalletClient({
    chain: mainnet,
    transport: custom(window.ethereum!)
  })

  // const walletClient = await getWalletClient(config);
  // const publicClient = getPublicClient(config);
  
  const ticketMaster = getContract({
    abi : Master.abi,
    address: zeroAddress,
    client: walletClient
  })
  // if (!walletClient || !publicClient) {
  //   throw new Error("wallet client or public client is still missing");
  // }

  // const tokenERC20 = getContract({
  //   abi: ERC20.abi,
  //   address: asset.address,
  //   client: walletClient,
  // });

  // const allowance = await tokenERC20.read.allowance([
  //   walletClient.account.address,
  //   selectedOperatorVaultAddr,
  // ]);

  // if (allowance < amount.toBigInt()) {
  //   const approveTxHash = await tokenERC20.write.approve([
  //     selectedOperatorVaultAddr,
  //     amount.toBigInt(),
  //   ]);
  //   Logger.info("Approve tx hash:", approveTxHash);

  //   const txReceipt = await publicClient.waitForTransactionReceipt({
  //     hash: approveTxHash,
  //   });
  //   Logger.info(
  //     "Approve tx confirmed - tx receipt hash:",
  //     txReceipt.transactionHash
  //   );
  // }

  // const vault = getContract({
  //   abi: Vault.abi,
  //   address: selectedOperatorVaultAddr,
  //   client: {
  //     wallet: walletClient,
  //     public: publicClient,
  //   },
  // });

  // const minSharesOut = (amount.toBigInt() * BigInt(99)) / BigInt(100);
  // const txHash = await vault.write.deposit([
  //   amount.toBigInt(),
  //   walletClient.account.address,
  //   minSharesOut,
  // ]);

  // const depositTxReceipt = await publicClient.waitForTransactionReceipt({
  //   confirmations: 1,
  //   hash: txHash,
  // });

  // Logger.info(
  //   "Successfully deposited into vault:",
  //   depositTxReceipt.transactionHash
  // );

  // const txLinkInfo = makeTxExplorerLink(asset.chain, txHash);
  // toast.success(
  //   `Successfully deposited ${asset.symbol}!$${txLinkInfo.string()}`
  // );
}