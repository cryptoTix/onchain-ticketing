import { ponder } from "ponder:registry";
import { modifyOrderHistory } from "../../backend/src/helpers/ticketHelpers";

ponder.on("Master:CancelledTicket", async ({ event }) => {  
    modifyOrderHistory(event.transaction.from,
      (order) : boolean => {
        console.log(event.args.ticketId.toString(16))
        return order.orderId.localeCompare("0x" + (event.args.ticketId.toString(16))) == 0;
      },
      (order) => {
        order.isCancelled = true;
      }
    )
});
