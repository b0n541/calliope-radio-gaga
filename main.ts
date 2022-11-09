enum RadioMessage {
    message1 = 49434
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let note of melodie) {
        radio.sendNumber(note)
        basic.pause(500)
    }
})
radio.onReceivedNumber(function (note) {
    music.playTone(note, music.beat(BeatFraction.Whole))
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
