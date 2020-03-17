// import actions from action creator
import { ADD, REMOVE } from "../actions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const featureReducer = (state = initialState, action) => {
  console.log("@@@", state, action);
  switch (action.type) {
    case ADD:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features
        }
      };
    // checks car id against payload id and deducting car total from feature's price
    case REMOVE:
      return {
        ...state,
        features: state.car.features.filter(
          car => car.id !== action.payload.id
        ),
        price: state.car.price - action.payload.price
      };
    default:
      return state;
  }
};
