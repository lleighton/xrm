/*
 * AppConstants
 * These are the variables that determine what our central data store (reducer.js)
 * changes in our state. When you add a new action, you have to add a new constant here
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */
export const CHANGE_WEIGHT = 'CHANGE_OWNER_NAME';
export const CHANGE_UNITS = 'CHANGE_UNITS';
export const UNIT_KGS = 'kg'; 
export const UNIT_LBS = 'lbs'; 

export const RM_FORMULA = (reps)=>{(1.0278 - (.0278 * Reps) )};