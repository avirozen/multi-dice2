radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (win != 10) {
        if (receivedNumber < dice) {
            basic.showIcon(IconNames.Happy)
            win += 1
        } else if (receivedNumber > dice) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    } else {
        basic.showString("U WIN")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
let dice = 0
let win = 0
radio.setGroup(1)
win = 0
