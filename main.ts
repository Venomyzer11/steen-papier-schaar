let Steen = 0
input.onGesture(Gesture.Shake, function () {
    let tool = 0
    Steen = randint(0, 2)
    if (tool == 0) {
        basic.showLeds(`
            . . # # #
            . # # . #
            # # . . #
            # . . . #
            # # # # #
            `)
    } else if (tool == 1) {
        basic.showLeds(`
            . # # . .
            # # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
basic.forever(function () {
	
})
