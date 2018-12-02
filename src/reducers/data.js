import Immutable from 'seamless-immutable';
import {getState} from '../storage';

const initialState = Immutable({
  museums: [],
  achievements: [],
  stories: [],
  museum: {
    id: null,
    items: [],
    rooms: [],
    logreg: []
  },

  completeItems: getState('completeItems') || [],
  completeAchievements: getState('completeAchievements') || []
});


const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_MUSEUMS':
      return state.merge({museums: action.payload});

    case 'SET_MUSEUM':
      return state.merge({museum: {...action.payload, id: action.id}});

    case 'SET_STORIES':
      return state.merge({stories: action.payload});

    case 'SET_ACHIEVEMENTS':
      return state.merge({achievements: action.payload});

    case 'SET_COMPLETE_ITEM':
      return state.merge({completeItems: state.completeItems.concat(action.data)});
    case 'SET_COMPLETE_ACHIEVEMENT':
      return state.merge({completeAchievements: state.completeAchievements.concat(action.data)});

    default:
      return state
  }
}

export default reducer;
