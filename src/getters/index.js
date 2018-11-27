import {MUSEUMS_IMAGES, ITEMS_IMAGES} from '../env';

export function getItemImage(type, url) {
  return ITEMS_IMAGES + url;
}

export function getMuseumImage(url) {
  return MUSEUMS_IMAGES + url;
}
