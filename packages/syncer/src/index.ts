import { ponder } from "ponder:registry";
// Import from backend build output to avoid TS source at runtime
import backendHelpers from "backend/dist/src/helpers/ticketHelpers.js";

ponder.on("Master:CancelledTicket", async ({ event }) => {
  await backendHelpers.cancelOrderHistory(
    event.transaction.from,
    `0x${event.args.ticketId.toString(16)}`,
  );
});
