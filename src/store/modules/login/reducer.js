// set uam sate inicial para aplicação
const initialState = {};

// sempre que uma action for disparada e criado um novo state(nunca se deve alterar state inicial)
const loginReducer = (state = initialState) => {
    return state;
};

export default loginReducer;
