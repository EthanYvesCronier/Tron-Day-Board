/**
 * super quack
 */
/**
 * gravity
 */
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.AB)
})
input.onLoudSound(function () {
    makerController.player1.press(ArcadeButton.B)
})
/**
 * Jetpack
 */
input.buttonB.onEvent(ButtonEvent.Down, function () {
    makerController.player1.setButton(ArcadeButton.A, true)
})
/**
 * flap
 */
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
})
input.buttonB.onEvent(ButtonEvent.Up, function () {
    makerController.player1.setButton(ArcadeButton.A, false)
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
