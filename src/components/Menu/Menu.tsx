import { isMobile } from "react-device-detect";

export function Menu() {
  return <>{isMobile ? "" : ""}</>;
}
