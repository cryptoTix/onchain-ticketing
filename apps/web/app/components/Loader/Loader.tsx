import { motion } from "framer-motion";

export const TicketLoader: React.FC = () => {
   return  (
    <motion.div
      className="h-screen w-full flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center mt-[20vh] mb-6">
        {/* Ticket Icon */}
        <svg
          className="w-16 h-16 text-blue-500 animate-spin mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M4 4h16v2a2 2 0 002 2v2a2 2 0 01-2 2v2a2 2 0 002 2v2a2 2 0 01-2 2v2H4v-2a2 2 0 00-2-2v-2a2 2 0 012-2v-2a2 2 0 00-2-2V8a2 2 0 012-2V4z" />
        </svg>
        <p className="text-xl font-semibold">Loading your ticket...</p>
      </div>
    </motion.div>
    )
}