const Decor = require('./lamp')
const power= require('./power')
const powerLimits = require('./power_limits')

const myLamp = new Decor(10)

console.log(myLamp.maxBrightness)

power.surge(myLamp)
power.outage(myLamp)

myLamp.turnOn()

console.log(myLamp.currentBrightness)

console.log(powerLimits.maxBrightness)
