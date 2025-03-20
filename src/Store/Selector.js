import { createSelector } from 'reselect';


const selectData = (state) => state.data;


export const selectItems = createSelector(
  [selectData], 
  (data) => data.items 
);


export const selectStatus = createSelector(
  [selectData], 
  (data) => data.status 
);
