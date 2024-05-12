radio.onReceivedNumber(function (receivedNumber) {
    if (value < receivedNumber) {
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
})
input.onButtonPressed(Button.A, function () {
    item = 0
    value = 0
    pins.digitalWritePin(DigitalPin.P12, 0)
    item = randint(1, 6)
    for (let index = 0; index < item; index++) {
        value += 1
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.showNumber(value)
    }
    radio.sendNumber(value)
})
let value = 0
let item = 0
radio.setGroup(1)
item = 0
value = 0
