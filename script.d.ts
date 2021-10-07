interface CounterState {
    value: number;
}
export declare const increment: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, decrement: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, incrementByAmount: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<number, string>;
declare const _default: import("redux").Reducer<CounterState, import("redux").AnyAction>;
export default _default;
