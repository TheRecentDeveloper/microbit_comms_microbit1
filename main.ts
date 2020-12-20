radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Temperature?")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Light?")
})
radio.setGroup(1)
