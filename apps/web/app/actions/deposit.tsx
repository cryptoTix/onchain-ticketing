"use client";
import { getPublicClient, getWalletClient } from "@wagmi/core";
import { config } from "../contexts/Web3Provider";
import { Address, createPublicClient, fallback, getContract, http, zeroAddress } from "viem";
import { Master } from "@repo/contracts";
import { FixedPointNumber } from "../utils/fixedPoint";
import { Logger } from "../utils/logger";
import { toast } from "react-hot-toast";
import { makeTxExplorerLink } from "../utils/txExplorerLink";
import { fetchTokenBalance } from "../utils/helpers";
import { Asset } from "../types/types";
import { MasterContractMap } from "../constants/constants";
// TODO(zak): move this to a cleaner and more readable/generic way to support multiple wrapped assets
// in the future.
export async function depositKarakWETH(
  amount: FixedPointNumber,
  asset: Asset,
  selectedOperatorVaultAddr: Address,
  user: Address
): Promise<void> {
  // TODO: remove this once we have a working deposit function
  // const walletClient = await getWalletClient(config);
  // const publicClient = getPublicClient(config);

  // if (!walletClient || !publicClient) {
  //   throw new Error("wallet client or public client is still missing");
  // }

  // const wethBalance = await fetchTokenBalance(asset, user);
  // if (wethBalance < amount.toBigInt()) {
  //   // do wrapping of required eth logic
  //   const amountToWrap = amount.toBigInt() - wethBalance;
  //   const wethContract = getContract({
  //     abi: IWETH9.abi,
  //     address: asset.address,
  //     client: walletClient,
  //   });

  //   const wethDepositTXHash = await wethContract.write.deposit({
  //     value: amountToWrap,
  //   });
  //   Logger.info("WETH deposit tx hash:", wethDepositTXHash);

  //   const wethDepositTxLinkInfo = makeTxExplorerLink(
  //     asset.chain,
  //     wethDepositTXHash
  //   );
  //   toast.success(
  //     `Successfully wrapped ETH!$${wethDepositTxLinkInfo.string()}`
  //   );

  //   const wethAllowance = await wethContract.read.allowance([
  //     walletClient.account.address,
  //     selectedOperatorVaultAddr,
  //   ]);

  //   if (wethAllowance < amountToWrap) {
  //     const approveTxHash = await wethContract.write.approve([
  //       selectedOperatorVaultAddr,
  //       amountToWrap,
  //     ]);
  //     Logger.info("Approve weth tx hash:", approveTxHash);

  //     const txReceipt = await publicClient.waitForTransactionReceipt({
  //       hash: approveTxHash,
  //     });
  //     Logger.info(
  //       "Approve weth tx confirmed - tx receipt hash:",
  //       txReceipt.transactionHash
  //     );
  //   }

  //   const vault = getContract({
  //     abi: Vault.abi,
  //     address: selectedOperatorVaultAddr,
  //     client: {
  //       wallet: walletClient,
  //       public: publicClient,
  //     },
  //   });

  //   const txHash = await vault.write.deposit([
  //     amount.toBigInt(),
  //     walletClient.account.address,
  //   ]);

  //   await publicClient.waitForTransactionReceipt({
  //     confirmations: 1,
  //     hash: txHash,
  //   });

  //   Logger.info("Successfully deposited into vault:", txHash);

  //   const txLinkInfo = makeTxExplorerLink(asset.chain, txHash);
  //   toast.success(
  //     `Successfully deposited ${asset.symbol}!$${txLinkInfo.string()}`
  //   );
  // } else {
  //   // wrapping not needed, just call regular depositAsset
  //   await depositAsset(amount, asset, selectedOperatorVaultAddr);
  // }
}

export async function depositAsset(
  amount: FixedPointNumber,
  asset: Asset,
  selectedOperatorVaultAddr: Address
): Promise<void> {
  const walletClient = await getWalletClient(config);
  const publicClient = getPublicClient(config);

  if (!walletClient || !publicClient) {
    throw new Error("wallet client or public client is still missing");
  }

  const tokenERC20 = getContract({
    abi: ERC20.abi,
    address: asset.address,
    client: walletClient,
  });

  const allowance = await tokenERC20.read.allowance([
    walletClient.account.address,
    selectedOperatorVaultAddr,
  ]);

  if (allowance < amount.toBigInt()) {
    const approveTxHash = await tokenERC20.write.approve([
      selectedOperatorVaultAddr,
      amount.toBigInt(),
    ]);
    Logger.info("Approve tx hash:", approveTxHash);

    const txReceipt = await publicClient.waitForTransactionReceipt({
      hash: approveTxHash,
    });
    Logger.info(
      "Approve tx confirmed - tx receipt hash:",
      txReceipt.transactionHash
    );
  }

  const masterAddr = MasterContractMap[walletClient.chain.id];
  if (!masterAddr) {
    throw new Error(`not configured for the chainID: ${walletClient.chain.id}`);
  }
  const masterContract = getContract({
    abi: Master.abi,
    address: masterAddr,
    client: {
      wallet: walletClient,
      public: publicClient,
    },
  });

  const minSharesOut = (amount.toBigInt() * BigInt(99)) / BigInt(100);
  masterAddr.write.purchase
  const txHash = await vault.write.deposit([
    amount.toBigInt(),
    walletClient.account.address,
    minSharesOut,
  ]);

  const depositTxReceipt = await publicClient.waitForTransactionReceipt({
    confirmations: 1,
    hash: txHash,
  });

  Logger.info(
    "Successfully deposited into vault:",
    depositTxReceipt.transactionHash
  );

  const txLinkInfo = makeTxExplorerLink(asset.chain, txHash);
  toast.success(
    `Successfully deposited ${asset.symbol}!$${txLinkInfo.string()}`
  );
}

export async function computeMaxDeposit(
  asset: Asset,
  user: Address,
  walletBalance: bigint
) {
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

  // const vaultMaxDeposit = await publicClient.readContract({
  //   abi: Vault.abi,
  //   // can just use first operator vault for this asset because the max deposit for operator vaults of this asset will be the same across the different operator vaults
  //   address: asset.operatorVaults[0]?.vaultAddress ?? zeroAddress,
  //   functionName: "maxDeposit",
  //   args: [user],
  // });

  return 0;
}
