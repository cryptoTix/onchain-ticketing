import { ponder } from "ponder:registry";
import { cancelOrderHistory } from "../../backend/src/helpers/ticketHelpers";

ponder.on("Master:CancelledTicket", async ({ event }) => {  
    await cancelOrderHistory(event.transaction.from, `0x${event.args.ticketId.toString(16)}`)
});
