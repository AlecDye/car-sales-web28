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
    // checks if that item has already been added to features. If yes do nothing, if no add to features and update total
    // Bug: continues to add to total of already added features
    case ADD:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.includes(action.payload)
            ? [...state.car.features]
            : [...state.car.features, action.payload],
          price: state.car.price + action.payload.price
        }
      };
    // checks car id against payload id and deducting car total from feature's price
    // Bug: removes car picture too
    case REMOVE:
      return {
        ...state,
        car: {
          features: state.car.features.filter(
            car => car.id !== action.payload.id
          ),
          price: state.car.price - action.payload.price
        }
      };
    default:
      return state;
  }
};
