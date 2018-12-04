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
