basic.showIcon(IconNames.Happy)
radio.setGroup(10)
basic.forever(function () {
    radio.sendValue("mg_x", input.acceleration(Dimension.X))
    radio.sendValue("mg_y", input.acceleration(Dimension.Y))
})
