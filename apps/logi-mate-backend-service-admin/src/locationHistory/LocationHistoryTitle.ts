import { LocationHistory as TLocationHistory } from "../api/locationHistory/LocationHistory";

export const LOCATIONHISTORY_TITLE_FIELD = "id";

export const LocationHistoryTitle = (record: TLocationHistory): string => {
  return record.id?.toString() || String(record.id);
};
