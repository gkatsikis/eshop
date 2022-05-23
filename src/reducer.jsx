

export const initialState = {
  basket: [],
}

const reducer = (state, action) => {
  // eslint-disable-next-line
  switch(action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, 
        basket: [...state.basket, action.item],
      }
  }
}

export default reducer