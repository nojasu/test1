let lgp = 0
forever(function () {
    if (iscmons.button_is_pressed(pins.P1)) {
        lgp = 1
    } else if (iscmons.button_is_not_pressed(pins.LED)) {
        lgp = 1
    } else {
    	
    }
})
