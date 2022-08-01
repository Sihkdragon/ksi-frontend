import { atomWithStorage } from "jotai/utils";
const AccessToken = atomWithStorage("accessToken", "");
export { AccessToken };
