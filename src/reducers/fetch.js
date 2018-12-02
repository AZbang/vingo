import Immutable from 'seamless-immutable';

const initialState = Immutable({
  loading: false,
  error: null
});


const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return state.merge({loading: true});

    case 'FETCH_SUCCEED':
      return state.merge({loading: false});

    case 'FETCH_ERROR':
      return state.merge({loading: false, error: action.error});

    default:
      return state;
  }
}

export default reducer;
