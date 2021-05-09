//clia um estado incial

const initialState = {
  Example: false
}

// muda o estado pra um new state caso alguma ação seja disparada

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case 'EXAMPLE': {
      const newState = { ...state };
      newState.Example = !newState.Example;
      return newState;
    }

    default: {
      return state;
    }
  };
}


  // sempre preciso criar um novo state nunca usar state atual
