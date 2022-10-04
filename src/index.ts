import { API } from "homebridge";
import { HikVisionNVR } from "./HikVisionNVR";

export const HIKVISION_PLUGIN_NAME = "@BartekTK/homebridge-hikvision-nvr-synology-ffmpg";
export const HIKVISION_PLATFORM_NAME = "Hikvision-NVR-Syno";

export default function main(api: API) {
  api.registerPlatform(
    HIKVISION_PLUGIN_NAME,
    HIKVISION_PLATFORM_NAME,
    HikVisionNVR
  );
}
