// Mock weather app using the observer pattern
// Assumming I have a third party api updating the subject with new weather info
var ObserverPattern;
(function (ObserverPattern) {
    var WeatherData = /** @class */ (function () {
        function WeatherData() {
            this.observers = [];
        }
        // Implement the Subject interface methods
        WeatherData.prototype.registerObserver = function (o) {
            console.log('Added an observer', o);
            this.observers.push(o);
        };
        WeatherData.prototype.removeObserver = function (o) {
            var index = this.observers.indexOf(o);
            console.log('Removing an observer: ' + o);
            this.observers.splice(index, 1);
        };
        WeatherData.prototype.notifyObservers = function () {
            console.log("Notify all the observers", this.observers.length);
            for (var i = 0; i < this.observers.length; i++) {
                this.observers[i].update(this.temperature, this.humidity, this.pressure);
            }
        };
        //weather data methods
        WeatherData.prototype.measurmentsChanged = function () {
            this.notifyObservers();
        };
        WeatherData.prototype.setMeasurements = function (temp, humid, pres) {
            this.temperature = temp;
            this.humidity = humid;
            this.pressure = pres;
            this.measurmentsChanged();
        };
        return WeatherData;
    }());
    ObserverPattern.WeatherData = WeatherData;
    //Three seperate displays - A Third party API could essentialy plug and play an display of their own
    var CurrentConditions = /** @class */ (function () {
        function CurrentConditions(weatherData) {
            this.weatherData = weatherData;
        }
        CurrentConditions.prototype.update = function (temp, humid, pressure) {
            this.temp = temp;
            this.humid = humid;
            this.press = pressure;
            this.display();
        };
        CurrentConditions.prototype.display = function () {
            console.log("Current conditions display: " + this.temp + "F degrees with " + this.humid + "% humidity and Barometric pressure of " + this.press + " hPa");
        };
        return CurrentConditions;
    }());
    var StatisticsDisplay = /** @class */ (function () {
        function StatisticsDisplay(weatherData) {
            this.record = [];
            this.stats = '';
            this.weatherData = weatherData;
        }
        StatisticsDisplay.prototype.update = function (temp, humid, pressure) {
            this.temp = temp;
            this.humid = humid;
            this.press = pressure;
            this.record.push(temp);
            this.generateStats();
        };
        StatisticsDisplay.prototype.generateStats = function () {
            var _a, _b;
            var avg, max, min = 0;
            var sorted = [];
            if (this.record.length >= 2) {
                sorted = this.record.sort(function (a, b) { return a - b; });
                avg = (this.record.reduce(function (sum, current) { return sum + current; }) / this.record.length);
                _a = [sorted[0], sorted[sorted.length - 1]], min = _a[0], max = _a[1];
            }
            else {
                _b = [this.record[0], this.record[0], this.record[0]], avg = _b[0], min = _b[1], max = _b[2];
            }
            this.stats = "Avg/Max/Min Temperature: " + avg.toFixed(0) + "/" + max + "/" + min;
            this.display();
        };
        StatisticsDisplay.prototype.display = function () {
            console.log(this.stats);
        };
        return StatisticsDisplay;
    }());
    var ForcastDisplay = /** @class */ (function () {
        function ForcastDisplay(weatherData) {
            this.weatherData = weatherData;
        }
        ForcastDisplay.prototype.update = function (temp, humid, pressure) {
            var prevTemp = this.temp;
            this.temp = temp;
            this.humid = humid;
            this.press = pressure;
            this.generateForcast(prevTemp, this.temp);
        };
        ForcastDisplay.prototype.generateForcast = function (prevTemp, updatedTemp) {
            if (prevTemp === updatedTemp)
                this.forcast = 'Forcast: Looks like more of the same!';
            else if (prevTemp > updatedTemp)
                this.forcast = "Forcast: Going to be cooling off by about " + (prevTemp - updatedTemp) + " degrees!";
            else
                this.forcast = "Forcast: Looks like we are getting some heat!";
            this.display();
        };
        ForcastDisplay.prototype.display = function () {
            console.log(this.forcast);
        };
        return ForcastDisplay;
    }());
    //Create our Weather Station app
    var WeatherStation = /** @class */ (function () {
        function WeatherStation() {
            this.weatherData = new WeatherData();
            // Intialize our current observers (Displays)
            this.weatherData.registerObserver(new CurrentConditions(this.weatherData));
            this.weatherData.registerObserver(new ForcastDisplay(this.weatherData));
            this.weatherData.registerObserver(new StatisticsDisplay(this.weatherData));
            //Generate some faux weather
            this.weatherData.setMeasurements(80, 65, 30.43);
            this.weatherData.setMeasurements(83, 70, 34.1);
            this.weatherData.setMeasurements(81, 69, 33.4);
        }
        return WeatherStation;
    }());
    ObserverPattern.WeatherStation = WeatherStation;
})(ObserverPattern || (ObserverPattern = {}));
/// <reference path="observer.ts" />
var ObserverPattern;
(function (ObserverPattern) {
    var Demo;
    (function (Demo) {
        //instantiate a prebuilt Weather App
        function weatherApp() {
            var app = new ObserverPattern.WeatherStation();
            return app;
        }
        Demo.weatherApp = weatherApp;
        Demo.app = weatherApp();
    })(Demo = ObserverPattern.Demo || (ObserverPattern.Demo = {}));
})(ObserverPattern || (ObserverPattern = {}));
