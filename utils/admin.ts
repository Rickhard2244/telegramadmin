export const isAdmin = (userId: string): boolean => {
  const adminIds = process.env.TELEGRAM_ADMIN_IDS?.split(",") || [];
  return adminIds.includes(userId.trim());
};

export const logAdminAction = (action: {
  userId: string;
  action: string;
  code: string;
  timestamp: string;
  flowType: string;
}): void => {
  // TODO: Implement logging logic (e.g., save to database or log file)
  console.log("Admin Action:", action);
};
