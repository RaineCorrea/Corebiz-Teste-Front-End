import { isMobile } from "react-device-detect";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
export function Header() {
  return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
}
