const darkZoneModel = require("../model/dark_zone.model");

class DarkZoneService {
  static async markDarkZone(user, geolocationCoordinates, likes) {
    try {
      const createDarkZone = new darkZoneModel({
        user,
        geolocationCoordinates,
        likes,
      });
      return createDarkZone;
    } catch (err) {
      throw err;
    }
  }
  static async checkGeolocation(geolocationCoordinates) {
    try {
      if (geolocationCoordinates.length === 2) {
        return true;
      }
      return false;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserService;
