import { SmartBoxDevice as TSmartBoxDevice } from "../api/smartBoxDevice/SmartBoxDevice";

export const SMARTBOXDEVICE_TITLE_FIELD = "id";

export const SmartBoxDeviceTitle = (record: TSmartBoxDevice): string => {
  return record.id?.toString() || String(record.id);
};
