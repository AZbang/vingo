import Immutable from 'seamless-immutable';

const initialState = Immutable({
  tabbarShow: true
});


const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SHOW_TABBAR':
      return state.merge({tabbarShow: true});

    case 'HIDE_TABBAR':
      return state.merge({tabbarShow: false});

    default:
      return state;
  }
}

export default reducer;
