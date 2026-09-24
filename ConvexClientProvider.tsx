import { type ReactNode } from "react";

// Minimal provider: no Clerk, no Convex — OTA test app only
export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
