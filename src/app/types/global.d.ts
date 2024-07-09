/* eslint-disable @typescript-eslint/no-explicit-any */
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
