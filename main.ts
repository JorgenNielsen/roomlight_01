input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
serial.redirectToUSB()
basic.forever(function () {
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
})
