// gravity
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.AB)
    light.showRing(
    `blue red blue red blue blue red blue red blue`
    )
})
input.onLoudSound(function () {
    if (ScreamFlag) {
        makerController.player1.press(ArcadeButton.B)
        control.runInParallel(function () {
            light.showAnimation(light.rainbowAnimation, 500)
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
    light.showRing(
    `red red red red red black black black black black`
    )
})
input.onGesture(Gesture.Shake, function () {
    light.showRing(
    `purple purple purple purple purple purple purple purple purple purple`
    )
    ScreamFlag = 1
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
    light.showRing(
    `black black black black black blue blue blue blue blue`
    )
})
let ScreamFlag = 0
ScreamFlag = 0
