export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  action.payload
    .then(result => dispatch({ ...action, payload: result }))
    .catch(err => {
      dispatch({ ...action, payload: err, error: true });
      return Promise.reject(err);
    });
};
