/// <reference path="observer.ts" />

namespace ObserverPattern{
    export namespace Demo {
            //instantiate a prebuilt Weather App
           export function weatherApp():WeatherStation {
             let app = new ObserverPattern.WeatherStation();
                return app
            }
            export const app:WeatherStation = weatherApp();
        }
    }