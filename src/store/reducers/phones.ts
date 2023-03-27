import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IPhone {
  number: string,
  id: string,
}
export interface IState {
  phones: IPhone[],
}

const initialState: IState = {
  phones: [
    { number: '89025671544', id: '1' },
    { number: '89015648559', id: '2' },
    { number: '89456158789', id: '3' },
    { number: '89761954815', id: '4' },
    { number: '89027894156', id: '5' },
    { number: '89481526487', id: '6' },
    { number: '89564819448', id: '7' },
  ],
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    addPhone: (state, action: PayloadAction<IPhone>) => {
      state.phones.push(action.payload);
    },
  },
});

export default phonesSlice.reducer;
export const { addPhone } = phonesSlice.actions;
