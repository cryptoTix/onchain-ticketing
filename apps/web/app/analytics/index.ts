import { GoogleAnalytics } from "@next/third-parties/google";

const Analytics = () => {
  return GoogleAnalytics({ gaId: `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_APP}` });
};

export default Analytics;