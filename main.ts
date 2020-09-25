// gravity
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
    makerController.player1.press(ArcadeButton.AB)
})
input.onLoudSound(function () {
    light.showAnimation(light.rainbowAnimation, 500)
    makerController.player1.press(ArcadeButton.B)
})
// Jetpack
input.buttonB.onEvent(ButtonEvent.Down, function () {
    light.showRing(
    `black black black black black blue blue blue blue blue`
    )
    makerController.player1.setButton(ArcadeButton.A, true)
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
    light.showRing(
    `red red red red red black black black black black`
    )
    makerController.player1.press(ArcadeButton.A)
})
input.buttonB.onEvent(ButtonEvent.Up, function () {
    light.showRing(
    `black black black black black green green green green green`
    )
    makerController.player1.setButton(ArcadeButton.A, false)
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
music.setTempo(150)
music.setVolume(120)
control.runInParallel(function () {
    while (true) {
        Sans_Simple(587, 0)
        Sans_Simple(523, 0)
        Sans_Simple(494, 0)
        Sans_Simple(466, 0)
        Sans_Simple(587, 147)
        Sans_Simple(523, 131)
        Sans_Simple(494, 123)
        Sans_Intermediate()
    }
})
