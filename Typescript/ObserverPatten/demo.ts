/// <reference path="observer.ts" />

    namespace ObserverPattern{
        export namespace Demo {
            //instantiate a prebuilt Weather App
            export function weatherApp() : void {
                 new ObserverPattern.WeatherStation();
            }
        }
    }