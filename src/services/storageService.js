const ROOMS_KEY = "rooms";

export const storageService = {
  getRooms() {
    const rooms = localStorage.getItem(ROOMS_KEY);
    return JSON.parse(rooms) || [];
  },
  setRooms(rooms) {
    localStorage.setItem(ROOMS_KEY, JSON.stringify(rooms));
  },
};
