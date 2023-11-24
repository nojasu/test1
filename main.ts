forever(function () {
    if (iscmons.button_is_pressed(pins.P1)) {
        iscmons.led_turn(pins.P0, true)
        while (iscmons.button_is_not_pressed(pins.P1)) {
            iscmons.led_turn(pins.P0, true)
        }
    }
})
