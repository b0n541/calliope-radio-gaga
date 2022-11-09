enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    music.playTone(receivedNumber, music.beat(BeatFraction.Whole))
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let note of melodie) {
        radio.sendNumber(note)
        basic.pause(500)
    }
})
let melodie: number[] = []
melodie = [
330,
494,
523,
440,
494,
392,
440,
349
]
