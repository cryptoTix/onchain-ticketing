"use client";

import React from "react";
import { motion } from "framer-motion";
import type { MotionPreset } from "./presets";

export type MotionDivProps = React.ComponentProps<typeof motion.div> & {
  preset?: MotionPreset;
};

/**
 * MotionDiv: A thin wrapper around framer-motion's motion.div
 * - Accepts all motion + div props (initial, animate, exit, transition, variants, etc.)
 * - Keeps a single, reusable component for consistent animations across the app
 */
export const MotionDiv: React.FC<MotionDivProps> = ({ preset, children, ...rest }) => {
  return (
    <motion.div {...(preset || {})} {...rest}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;
