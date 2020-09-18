input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber("Hello".length)
    light.showRing(
    "red red red red red red red red red red"
    )
})
input.onGesture(Gesture.Shake, function () {
	
})
forever(function () {
    light.showRing(
    "red red red red red red red red red red"
    )
    light.showRing(
    `green red green red green red green red green green`
    )
})
