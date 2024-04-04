const ROOMS_KEY = "rooms";
const LOGGED_IN_USER = "loggedInUser"
export const storageService = {
  getRooms() {
    const rooms = localStorage.getItem(ROOMS_KEY);
    return JSON.parse(rooms) || [];
  },
  setRooms(rooms) {
    localStorage.setItem(ROOMS_KEY, JSON.stringify(rooms));
  },
  clearAll(){
    sessionStorage.removeItem(LOGGED_IN_USER)
  }
};
