def on_button_a():
    music.play_melody("E B C5 A B G A F ", 120)
    music.play_tone(330, music.beat(BeatFraction.WHOLE))
    music.play_tone(494, music.beat(BeatFraction.WHOLE))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.play_tone(494, music.beat(BeatFraction.WHOLE))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.play_tone(349, music.beat(BeatFraction.WHOLE))
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_forever():
    pass
basic.forever(on_forever)
