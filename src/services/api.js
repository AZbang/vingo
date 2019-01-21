import axios from 'axios';

export const DB = 'http://85.143.216.46:49160';
export const YANDEX_MAP_API = '80ea98cf-f2cc-47d6-9fe3-47fc8f9bf7c0';

export function getMuseums() {
  return axios.get('https://raw.githubusercontent.com/AZbang/vingo/db/' + '/museums.json');
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

export function getImage(museumId, itemId) {
  return axios.get(`${DB}/${museumId}/items/${itemId}.jpg`);
}
