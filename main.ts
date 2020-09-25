// gravity
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.AB)
    control.runInParallel(function () {
        light.setPixelColor(0, 0x0000ff)
        light.setPixelColor(1, 0xff0000)
        light.setPixelColor(2, 0x0000ff)
        light.setPixelColor(3, 0xff0000)
        light.setPixelColor(4, 0x0000ff)
        light.setPixelColor(5, 0xff0000)
        light.setPixelColor(6, 0x0000ff)
        light.setPixelColor(7, 0xff0000)
        light.setPixelColor(8, 0x0000ff)
        light.setPixelColor(9, 0xff0000)
        control.waitMicros(1)
        light.clear()
    })
})
input.onLoudSound(function () {
    if (ScreamFlag) {
        makerController.player1.press(ArcadeButton.B)
        control.runInParallel(function () {
            light.showAnimation(light.rainbowAnimation, 500)
            light.clear()
        })
    }
})
function Sans_Intermediate () {
    music.ringTone(117)
    music.playTone(466, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(466, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(1174, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(880, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.stopAllSounds()
    music.ringTone(131)
    music.playTone(831, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.stopAllSounds()
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    control.runInParallel(function () {
        light.setPixelColor(0, 0x0000ff)
        light.setPixelColor(1, 0x0000ff)
        light.setPixelColor(2, 0x0000ff)
        light.setPixelColor(3, 0x0000ff)
        light.setPixelColor(4, 0x0000ff)
        control.waitMicros(1)
        light.clear()
    })
})
input.onGesture(Gesture.Shake, function () {
    ScreamFlag = 1
    control.runInParallel(function () {
        light.showRing(
        `purple purple purple purple purple purple purple purple purple purple`
        )
        light.clear()
    })
})
function Sans_Simple (FirstNote: number, LowNote: number) {
    music.ringTone(LowNote)
    music.playTone(FirstNote, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(FirstNote, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(1174, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(880, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(831, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.stopAllSounds()
}
// Jetpack
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    control.runInParallel(function () {
        light.setPixelColor(5, 0xff0000)
        light.setPixelColor(6, 0xff0000)
        light.setPixelColor(7, 0xff0000)
        light.setPixelColor(8, 0xff0000)
        light.setPixelColor(9, 0xff0000)
        control.waitMicros(1)
        light.clear()
    })
})
let ScreamFlag = 0
ScreamFlag = 0
