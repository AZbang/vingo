import axios from 'axios';

export const DB = 'http://85.143.216.46:49160';
export const YANDEX_MAP_API = '80ea98cf-f2cc-47d6-9fe3-47fc8f9bf7c0';

export function getMuseums() {
  return [{"id":"main","name":"Главный Штаб Эрмитажа","description":"","request":"http://hermitagemuseum.org/3d/html/pwoaen/main/pano.xml"},{"id":"staff","name":"Эрмитажный комплекс","locked":true,"description":"","request":"http://hermitagemuseum.org/3d/html/pwoa/staff/pano.xml"},{"id":"peter","name":"Эрмитаж. Зимний дворец","locked":true,"description":"","request":"http://hermitagemuseum.org/3d/html/pwoa/peter/pano.xml"},{"id":"kazan","name":"Эрмитаж в Казани","locked":true,"description":"","request":"http://hermitagemuseum.org/3d/html/pwoaen/kazan/pano.xml"}]
  // return axios.get('https://raw.githubusercontent.com/AZbang/vingo/db/' + '/museums.json');
}
export async function getMuseum(id) {
  const rooms = await getRooms('hermitage_' + id);
  const items = await getItems('hermitage_' + id);
  return {rooms: rooms.data, items: items.data};
}


export function getRooms(id) {
  return axios.get(`${DB}/${id}/rooms.json`);
}

export function getPlaygrounds(id) {
  return axios.get(`${DB}/${id}/playgrounds.json`);
}

export function getItems(id) {
  return axios.get(`${DB}/${id}/items.json`);
}

export function getAchievements(id) {
  return axios.get(`${DB}/${id}/achievements.json`);
}

export function getStories(count=5) {
  return axios.get(`${DB}/api/stories?count=${count}`);
}
