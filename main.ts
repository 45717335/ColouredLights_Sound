function ShowVoice (数字: number) {
    basic.clearScreen()
    if (数字 <= 50) {
        led.plot(2, 2)
    } else if (数字 < 55) {
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(1, 1)
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
    } else if (数字 <= 75) {
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(3, 2)
        led.plot(3, 1)
        led.plot(2, 1)
    } else if (数字 <= 80) {
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(3, 2)
        led.plot(3, 1)
        led.plot(2, 1)
        led.plot(1, 1)
    } else if (数字 <= 85) {
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(3, 2)
        led.plot(3, 1)
        led.plot(2, 1)
        led.plot(1, 1)
        led.plot(1, 2)
    } else if (数字 <= 90) {
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(3, 2)
        led.plot(3, 1)
        led.plot(2, 1)
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
    } else if (数字 <= 95) {
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(3, 2)
        led.plot(3, 1)
        led.plot(2, 1)
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(1, 4)
    } else {
        startbit.startbit_setPixelRGBArgs(StartbitLights.Light1, randint(1, 10))
        startbit.startbit_showLight()
        basic.pause(100)
    }
}
startbit.startbit_Init()
basic.forever(function () {
    ShowVoice(startbit.startbit_getSoundVolume())
})
