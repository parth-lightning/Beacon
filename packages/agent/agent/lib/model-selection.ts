import { DEFAULT_BEACON_MODEL_ID, isBeaconModelId, type BeaconModelId } from "../../model-catalog";

export function resolveModelId(value: unknown, sessionFallback?: unknown): BeaconModelId {
  if (typeof value === "string" && isBeaconModelId(value)) return value;
  if (value === undefined && typeof sessionFallback === "string" && isBeaconModelId(sessionFallback)) {
    return sessionFallback;
  }
  return DEFAULT_BEACON_MODEL_ID;
}
