import { TamperedStatus as TTamperedStatus } from "../api/tamperedStatus/TamperedStatus";

export const TAMPEREDSTATUS_TITLE_FIELD = "id";

export const TamperedStatusTitle = (record: TTamperedStatus): string => {
  return record.id?.toString() || String(record.id);
};
