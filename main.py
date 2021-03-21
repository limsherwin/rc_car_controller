basic.show_icon(IconNames.HEART)
radio.set_group(1)

def on_forever():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
basic.forever(on_forever)
