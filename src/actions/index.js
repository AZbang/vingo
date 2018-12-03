export function fetchMuseums() {
  return {type: 'FETCH_MUSEUMS'}
}

export function fetchAchievements() {
  return {type: 'FETCH_ACHIEVEMENTS'}
}

export function fetchMuseum(id) {
  return {type: 'FETCH_MUSEUM', id}
}

export function toogleTabbar(toggle) {
  return {type: toggle ? 'SHOW_TABBAR' : 'HIDE_TABBAR'}
}
