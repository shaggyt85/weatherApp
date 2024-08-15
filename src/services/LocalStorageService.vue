<script>
export default class LocalStorageService {
  static STORAGE_KEY = "localidadesConsultadas";
  static WEATHER_DATA_KEY = "weatherData";

  static getLocalidades() {
    return this._getFromLocalStorage(this.STORAGE_KEY) || [];
  }

  static addLocalidad(city) {
    const localidades = this.getLocalidades();
    if (!this._isCityInLocalidades(city, localidades)) {
      localidades.push(city);
      this._saveToLocalStorage(this.STORAGE_KEY, localidades);
    }
  }

  static removeLocalidad(city) {
    const localidades = this.getLocalidades().filter(
      (localidad) => localidad !== city
    );
    this._saveToLocalStorage(this.STORAGE_KEY, localidades);
  }

  static saveWeatherData(weatherData) {
    this._saveToLocalStorage(this.WEATHER_DATA_KEY, weatherData);
  }

  static getWeatherData() {
    return this._getFromLocalStorage(this.WEATHER_DATA_KEY);
  }

  static _getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  static _saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static _isCityInLocalidades(city, localidades) {
    return localidades.includes(city);
  }
}
</script>
