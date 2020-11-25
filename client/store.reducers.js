import { reducer as inputReducer } from './components/input/state';
import { reducer as sendButtonReducer } from './components/button/state';

export default {
  input: inputReducer,
  sendButton: sendButtonReducer,
};
