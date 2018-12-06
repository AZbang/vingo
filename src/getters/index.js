import {PLAYGROUNDS_IMAGES, ITEMS_IMAGES} from '../env';

export function getItemImage(id, name) {
  return ITEMS_IMAGES.replace(':id', id) + name;
}

export function getPlaygroundImage(id, name) {
  return PLAYGROUNDS_IMAGES.replace(':id', id) + name;
}


export function getMuseum(state, id) {
  for(let i = 0; i < state.data.museums.length; i++) {
    if(state.data.museums[i].id === id) return state.data.museums[i];
  }
}

export function getAchievement(state, id) {
  for(let i = 0; i < state.data.achievements.length; i++) {
    if(state.data.achievements[i].id === id) return state.data.achievements[i];
  }
}

export function getItem(state, id) {
  for(let i = 0; i < state.data.museum.items.length; i++) {
    if(state.data.museum.items[i].id === id) return state.data.museum.items[i];
  }
}

export function getPlayground(state, id) {
  for(let i = 0; i < state.data.playground.length; i++) {
    if(state.data.museum.playground[i].id === id) return state.data.museum.playground[i];
  }
}
