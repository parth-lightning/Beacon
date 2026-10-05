export const BEACON_MODEL_IDS = {
  muse: "muse-spark-1.3-contributor-free",
  mimo: "mimo-v2.5-free",
  ling: "ling-3.0-flash-fin-free",
  nemotronUltra: "nemotron-3-ultra-free",
  nemotronLightning: "nemotron-3.5-lightning-free",
  qwen: "qwen3.8-27b",
} as const;

export type BeaconModelId = (typeof BEACON_MODEL_IDS)[keyof typeof BEACON_MODEL_IDS];

export const DEFAULT_BEACON_MODEL_ID: BeaconModelId = BEACON_MODEL_IDS.muse;
export const BEACON_MODEL_HEADER = "x-beacon-model";
export const BEACON_MODEL_AUTH_ATTRIBUTE = "beaconModel";

export const BEACON_MODELS = [
  {
    id: BEACON_MODEL_IDS.muse,
    label: "Muse Spark 1.3 Contributor",
  },
  {
    id: BEACON_MODEL_IDS.mimo,
    label: "MiMo V2.5",
  },
  {
    id: BEACON_MODEL_IDS.ling,
    label: "Ling 3.0 Flash Fin",
  },
  {
    id: BEACON_MODEL_IDS.nemotronUltra,
    label: "Nemotron 3 Ultra",
  },
  {
    id: BEACON_MODEL_IDS.nemotronLightning,
    label: "Nemotron 3.5 Lightning",
  },
  {
    id: BEACON_MODEL_IDS.qwen,
    label: "Qwen 3.8 27B Max",
  },
] as const satisfies ReadonlyArray<{
  readonly id: BeaconModelId;
  readonly label: string;
}>;

const LEGACY_BEACON_MODEL_IDS: Readonly<Record<string, BeaconModelId>> = {
  "muse-spark-1.3-contributor": BEACON_MODEL_IDS.muse,
};

export function isBeaconModelId(value: string): value is BeaconModelId {
  return BEACON_MODELS.some((model) => model.id === value);
}

export function normalizeBeaconModelId(value: string): BeaconModelId | undefined {
  return isBeaconModelId(value) ? value : LEGACY_BEACON_MODEL_IDS[value];
}
