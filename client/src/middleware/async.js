export default function({ dispatch }) {
  return next => action => {

    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload
    .then(function(response) {
      response.json()
      .then(r => {

        const newAction = {...action, payload: r };
        dispatch(newAction);
      })
    })
  }
}
