import { UnlockAttempt as TUnlockAttempt } from "../api/unlockAttempt/UnlockAttempt";

export const UNLOCKATTEMPT_TITLE_FIELD = "id";

export const UnlockAttemptTitle = (record: TUnlockAttempt): string => {
  return record.id?.toString() || String(record.id);
};
