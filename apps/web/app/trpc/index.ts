import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@repo/indexer";
import { FALLBACK_TRPC_URL } from "../constants/constants";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: process.env.NEXT_PUBLIC_TRPC_API_URL ?? FALLBACK_TRPC_URL,
      headers: {
        "Content-Security-Policy":
          "frame-ancestors 'self' https://app.agent.exchange/",
      },
    }),
  ],
});
