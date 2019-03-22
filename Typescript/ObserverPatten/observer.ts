// Mock weather app using the observer pattern
// Assumming I have a third party api updating the subject with new weather info

namespace ObserverPattern {

     interface Subject{
        registerObserver(o:Observer);
        removeObserver(o:Observer);
        notifyObservers();
    }

    export class WeatherData implements Subject{
        private observers:Observer[];
        private temperature:number;
        private humidity:number;
        private pressure:number;
        constructor(){
            this.observers = [];
        }
    // Implement the Subject interface methods
        registerObserver(o:Observer):void{
            console.log('Added an observer',o);
            this.observers.push(o);
        }
        removeObserver(o:Observer):void{
            let index = this.observers.indexOf(o);
            console.log('Removing an observer: '+ o);
            this.observers.splice(index,1);

        }
        notifyObservers():void{
            console.log("Notify all the observers",this.observers.length);
            for(let i = 0; i < this.observers.length; i++){
                this.observers[i].update(this.temperature,this.humidity,this.pressure);
            }
        }
        //weather data methods
        measurmentsChanged(){
            this.notifyObservers()
        }
        setMeasurements(temp:number,humid:number,pres:number):void{
            this.temperature = temp;
            this.humidity = humid;
            this.pressure = pres;
            this.measurmentsChanged()
        }
    }

    // Seperate interfaces for Concrete Observer to implement
     interface Observer{
        update(temp: number, humidity: number, pressure: number)
    }
     interface DisplayElement{
        display()
    }

    //Three seperate displays - A Third party API could essentialy plug and play an display of their own
    class CurrentConditions implements Observer,DisplayElement{
        private temp:number;
        private humid:number;
        private press:number;
        private weatherData:Subject;

        constructor(weatherData){
            this.weatherData = weatherData;
        }
        update(temp:number,humid:number,pressure:number):void{
            this.temp = temp;
            this.humid = humid;
            this.press = pressure;
            this.display()
        }
        display():void{
            console.log(`Current conditions display: ${this.temp}F degrees with ${this.humid}% humidity and Barometric pressure of ${this.press} hPa`)
        }
    }
     class StatisticsDisplay implements Observer,DisplayElement{
        private temp:number;
        private humid:number;
        private press:number;
        private record:number[] = [];
        private stats:string = '';
        private weatherData:Subject;

        constructor(weatherData){
            this.weatherData = weatherData;
        }
        update(temp:number,humid:number,pressure:number):void{
            this.temp = temp;
            this.humid = humid;
            this.press = pressure;
            this.record.push(temp);
            this.generateStats()
        }
        generateStats():void{
            let avg:number,max:number,min:number = 0;
            let sorted:number[] = [];
            if(this.record.length >= 2){
                sorted = this.record.sort((a,b) => a - b );
                avg = (this.record.reduce((sum,current) => sum + current) / this.record.length);
                [min, max] = [sorted[0], sorted[sorted.length -1]];
            }else{
                [avg, min, max] = [this.record[0],this.record[0],this.record[0]]
            }
            this.stats = `Avg/Max/Min Temperature: ${avg.toFixed(0)}/${max}/${min}`;
            this.display()
        }
        display(){
            console.log(this.stats)
        }
    }
     class ForcastDisplay implements Observer,DisplayElement{
        private temp:number;
        private humid:number;
        private press:number;
        private forcast:string
        private weatherData:Subject;

        constructor(weatherData){
            this.weatherData = weatherData;
        }
        update(temp:number,humid:number,pressure:number):void{
            let prevTemp = this.temp;
            this.temp = temp;
            this.humid = humid;
            this.press = pressure;
            this.generateForcast(prevTemp,this.temp)
        }
        generateForcast(prevTemp:number, updatedTemp:number){
           if(prevTemp === updatedTemp)this.forcast = 'Forcast: Looks like more of the same!'
           else if(prevTemp > updatedTemp) this.forcast = `Forcast: Going to be cooling off by about ${prevTemp - updatedTemp} degrees!`;
           else this.forcast = `Forcast: Looks like we are getting some heat!`;
           this.display()

        }
        display(){
            console.log(this.forcast)
        }
    }
    //Create our Weather Station app
    export class WeatherStation{
         weatherData:WeatherData;
        constructor(){
            this.weatherData = new WeatherData()
            // Intialize our current observers (Displays)
            this.weatherData.registerObserver(new CurrentConditions(this.weatherData));
            this.weatherData.registerObserver(new ForcastDisplay(this.weatherData));
            this.weatherData.registerObserver(new StatisticsDisplay(this.weatherData));
            //Generate some faux weather
            this.weatherData.setMeasurements(80, 65, 30.43);
            this.weatherData.setMeasurements(83, 70, 34.1);
            this.weatherData.setMeasurements(81, 69, 33.4);
        }
    }


}

