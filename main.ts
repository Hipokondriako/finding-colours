input.onButtonPressed(Button.A, function () {
    if (Pin == 0) {
        Hue_0 += 1
        Analog_0 = 127 * (Hue_0 % 9)
        pins.analogWritePin(AnalogPin.P0, Analog_0)
    } else if (Pin == 1) {
        Hue_1 += 1
        Analog_1 = 127 * (Hue_1 % 9)
        pins.analogWritePin(AnalogPin.P1, Analog_1)
    } else if (Pin == 2) {
        Hue_2 += 1
        Analog_2 = 127 * (Hue_2 % 9)
        pins.analogWritePin(AnalogPin.P2, Analog_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("R " + Analog_0 + " G " + Analog_1 + " B " + Analog_2)
})
input.onButtonPressed(Button.B, function () {
    Counter_B += 1
    Pin = Counter_B % 3
    if (Pin == 0) {
        basic.showString("R")
        basic.clearScreen()
    } else if (Pin == 1) {
        basic.showString("G")
        basic.clearScreen()
    } else if (Pin == 2) {
        basic.showString("B")
        basic.clearScreen()
    }
})
let Counter_B = 0
let Analog_2 = 0
let Hue_2 = 0
let Analog_1 = 0
let Hue_1 = 0
let Analog_0 = 0
let Hue_0 = 0
let Pin = 0
basic.showString("R")
basic.clearScreen()
basic.forever(function () {
	
})
