// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// interface CounterState {
//   value: number;
// }
// const initialState = { value: 0 } as CounterState;
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.value++;
//     },
//     decrement(state) {
//       state.value--;
//     },
//     incrementByAmount(state, action: PayloadAction<number>) {
//       state.value += action.payload;
//     },
//   },
// });
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer;
// Jezeli usune export to wtedy wszystko dziala, problem jest z exportowaniem plikow
// export function sayHi() {
//   console.log('hello');
// }
import { createSlice } from '@reduxjs/toolkit';
const initialState = { value: 0 };
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        incrementByAmount(state, action) {
            state.value += action.payload;
        },
    },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
//# sourceMappingURL=script.js.map