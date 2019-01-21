const storage = {
  set(name, state) {
    localStorage.setItem(name, JSON.stringify(state));
  },
  get(name) {
    return JSON.parse(localStorage.getItem(name) || 'null');
  }
}

export default storage;
