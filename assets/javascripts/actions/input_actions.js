const InputConstants = require('../constants/input_constants'),
      AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {
  setValue(input, value) {
    AppDispatcher.dispatch({
      actionType: InputConstants.SET_VALUE,
      input: input,
      value: value
    });
  },

  clearInput(input) {
    AppDispatcher.dispatch({
      actionType: InputConstants.CLEAR_VALUE,
      input: input
    });
  }
};
