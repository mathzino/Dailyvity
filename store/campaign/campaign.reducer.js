import { CAMPAIGN_ACTION_TYPES } from "./campaign.types";

const CAMPAIGN_INITIAL_STATE = {
  isLoading: false,
  campaign: [],
};

export const campaignReducer = (state = CAMPAIGN_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  //   switch (type) {
  //     case CART_ACTION_TYPES.SET_CART_ITEMS:
  //       return {
  //         ...state,
  //         cartItems: payload,
  //       };
  //     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
  //       return {
  //         ...state,
  //         isCartOpen: payload,
  //       };
  //     default:
  //       return state;
  //   }
};
