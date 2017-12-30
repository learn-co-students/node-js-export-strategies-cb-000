const Lamp = require('./lamp');
const powerEvents = require('./power');
const powerLimits = require('./power_limits');

const myLamp = new Lamp(powerLimits.maxBrightness);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);

powerEvents.surge(myLamp);
powerEvents.outage(myLamp);

myLamp.turnOn();

console.log(`myLamp's currrent brightness: ${myLamp.currentBrightness}`);
