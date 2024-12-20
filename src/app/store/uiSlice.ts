import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface uiState {
  theme? : string | undefined;
  confettiSwitch : boolean;
}

// Define the initial state using that type
const initialState: uiState = {
  theme : "",
  confettiSwitch : false
}

export const uiSlice = createSlice({
  name: 'ui',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeState(state, action:PayloadAction<string | undefined>){
      state.theme = action.payload
    },
    confettiToggler(state, action:PayloadAction<boolean>){
      state.confettiSwitch = action.payload
    }
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { changeState, confettiToggler } = uiSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default uiSlice.reducer