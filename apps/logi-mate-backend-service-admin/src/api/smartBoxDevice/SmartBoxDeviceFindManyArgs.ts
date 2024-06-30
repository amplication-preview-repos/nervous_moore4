import { SmartBoxDeviceWhereInput } from "./SmartBoxDeviceWhereInput";
import { SmartBoxDeviceOrderByInput } from "./SmartBoxDeviceOrderByInput";

export type SmartBoxDeviceFindManyArgs = {
  where?: SmartBoxDeviceWhereInput;
  orderBy?: Array<SmartBoxDeviceOrderByInput>;
  skip?: number;
  take?: number;
};
