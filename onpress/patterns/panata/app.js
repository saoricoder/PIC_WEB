// Sensor A (Por ejemplo, Celsius)
class CelsiusSensor {
    // Método para obtener la temperatura en Celsius
    getTemperature() {
        return 30; // Temperatura en Celsius
    }
}

// Sensor B (Por ejemplo, Fahrenheit)
class FahrenheitSensor {
    // Método para obtener la temperatura en Fahrenheit
    getTemperature() {
        return 77; // Temperatura en Fahrenheit
    }
}

// Adaptador para convertir Fahrenheit a Celsius
class FahrenheitToCelsiusAdapter {
    constructor(fahrenheitSensor) {
        this.fahrenheitSensor = fahrenheitSensor; // Sensor Fahrenheit a adaptar
    }

    // Método para obtener la temperatura convertida a Celsius
    getTemperature() {
        // Convertir Fahrenheit a Celsius
        return (this.fahrenheitSensor.getTemperature() - 32) * 5 / 9;
    }
}

// Clase Subject (Sujeto)
class Subject {
    constructor() {
        this.observers = []; // Lista de observadores
    }

    // Método para añadir un observador
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Método para eliminar un observador
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Método para notificar a todos los observadores de un cambio
    notifyObservers(temperature) {
        this.observers.forEach(observer => observer.update(temperature));
    }
}

// Clase Observer (Observador)
class Observer {
    constructor(name) {
        this.name = name; // Nombre del observador
    }

    // Método para actualizar el observador con la nueva temperatura
    update(temperature) {
        console.log(`${this.name} ha recibido una notificación: La temperatura es ${temperature}°C`);
    }
}

// Clase MonitoringSystem (Sistema de Monitoreo)
class MonitoringSystem extends Subject {
    constructor() {
        super();
        this.temperature = null; // Temperatura inicial
    }

    // Método para establecer la temperatura y notificar a los observadores
    setTemperature(sensor, sensorType) {
        this.temperature = sensor.getTemperature(); // Obtener la temperatura del sensor
        console.log(`Estableciendo temperatura desde ${sensorType}: ${this.temperature}°C`);
        this.notifyObservers(this.temperature); // Notificar a los observadores
    }
}

// Crear sensores
const celsiusSensor = new CelsiusSensor();
const fahrenheitSensor = new FahrenheitSensor();
const adaptedSensor = new FahrenheitToCelsiusAdapter(fahrenheitSensor);

// Crear observadores
const observer1 = new Observer("Observador 1");
const observer2 = new Observer("Observador 2");

// Crear sistema de monitoreo
const monitoringSystem = new MonitoringSystem();

// Añadir observadores al sistema
monitoringSystem.addObserver(observer1);
monitoringSystem.addObserver(observer2);

// Establecer temperatura con el sensor adaptado (Fahrenheit convertido a Celsius)
monitoringSystem.setTemperature(adaptedSensor, "Adaptador Fahrenheit a Celsius");

// Establecer temperatura con el sensor Celsius
monitoringSystem.setTemperature(celsiusSensor, "Sensor Celsius");
