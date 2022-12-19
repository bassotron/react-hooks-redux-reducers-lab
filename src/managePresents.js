const initialState = { numberOfPresents: 0 };
const action = { type: "presents/increase"};

export function managePresents(state = initialState, action) {
  switch (action.type) {
    case "presents/increase":
      return { numberOfPresents: state.numberOfPresents + 1 };
        case "presents/decrease":
          return { numberOfPresents: state.numberOfPresents -1 };  
default:
  return state;
  }
}

