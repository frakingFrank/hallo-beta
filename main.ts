function do_something () {
    zahl = 5 + 1
    return zahl
}
let zahl = 0
basic.showIcon(IconNames.Heart)
do_something()
basic.forever(function () {
    basic.showNumber(zahl)
})
