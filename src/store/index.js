// cria um state global que pode ser usado na aplicação inteira de
import { createStore } from 'redux';

import reducer from './modules/login/reducer';

const store = createStore(reducer);

export default store;

