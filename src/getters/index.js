import {MUSEUMS_IMAGES, PLAYGROUNDS_IMAGES, ITEMS_IMAGES} from '../env';

export function getItemImage(id, name) {
  return ITEMS_IMAGES.replace(':id', id) + name;
}

export function getPlaygroundImage(id, name) {
  return PLAYGROUNDS_IMAGES.replace(':id', id) + name;
}

export function getMuseumImage(id) {
  return MUSEUMS_IMAGES.replace(':id', id);
}
