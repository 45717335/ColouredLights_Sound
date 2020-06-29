function ShowVoice (数字: number) {
    basic.clearScreen()
    if (数字 <= 50) {
        led.plot(2, 2)
    } else if (数字 < 55) {
        led.plot(2, 2)
        led.plot(2, 3)
    } else if (数字 <= 60) {
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 3)
    } else if (数字 <= 65) {
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(3, 2)
    } else if (数字 <= 70) {
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(3, 2)
        led.plot(3, 1)
    }
}
startbit.startbit_Init()
basic.forever(function () {
    ShowVoice(startbit.startbit_getSoundVolume())
})
