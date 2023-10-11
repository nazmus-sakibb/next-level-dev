import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


interface IProduct {
  status: boolean;
  priceRange: number;
}

const initialState: IProduct = {
  status: false,
  priceRange: 150,
};


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{},
})

export default productSlice.reducer;