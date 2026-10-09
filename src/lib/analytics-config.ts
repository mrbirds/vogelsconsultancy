export const analyticsConfig = {
  enabled: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
};

export const isAnalyticsConfigured = Boolean(
  analyticsConfig.enabled && analyticsConfig.gaId,
);
