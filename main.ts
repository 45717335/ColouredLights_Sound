function ShowVoice (数字: number) {
    basic.clearScreen()
    if (数字 <= 50) {
        led.plot(2, 2)
    } else if (数字 <= 55) {
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
    } else if (数字 <= 45) {
        startbit.startbit_clearLight()
        basic.pause(100)
    } else {
        startbit.startbit_setPixelRGBArgs(StartbitLights.Light1, randint(1, 10))
        startbit.startbit_showLight()
        basic.pause(100)
    }
}
function ShowVoice2 (数字: number, 数字2: number) {
    // 新声音小于旧声音，需要降低音量
    if (数字 < 数字2) {
        if (数字 < 95 && 数字2 >= 95) {
            led.unplot(1, 4)
        }
        if (数字 < 90 && 数字2 >= 90) {
            led.unplot(1, 3)
        }
        if (数字 < 85 && 数字2 >= 85) {
            led.unplot(1, 2)
        }
        if (数字 < 80 && 数字2 >= 80) {
            led.unplot(1, 1)
        }
        if (数字 < 75 && 数字2 >= 75) {
            led.unplot(2, 1)
        }
        if (数字 < 70 && 数字2 >= 70) {
            led.unplot(3, 1)
        }
        if (数字 < 65 && 数字2 >= 65) {
            led.unplot(3, 2)
        }
        if (数字 < 60 && 数字2 >= 60) {
            led.unplot(3, 3)
        }
        if (数字 < 55 && 数字2 >= 55) {
            led.unplot(2, 3)
        }
        if (数字 < 50 && 数字2 >= 50) {
            led.unplot(2, 2)
        }
    }
    // 新声音小于旧声音，需要降低音量
    if (数字 > 数字2) {
        if (数字2 < 95 && 数字 >= 95) {
            led.plot(1, 4)
        }
        if (数字2 < 90 && 数字2 >= 90) {
            led.plot(1, 3)
        }
        if (数字2 < 85 && 数字 >= 85) {
            led.plot(1, 2)
        }
        if (数字2 < 80 && 数字 >= 80) {
            led.plot(1, 1)
        }
        if (数字2 < 75 && 数字 >= 75) {
            led.plot(2, 1)
        }
        if (数字2 < 70 && 数字 >= 70) {
            led.plot(3, 1)
        }
        if (数字2 < 65 && 数字 >= 65) {
            led.plot(3, 2)
        }
        if (数字2 < 60 && 数字 >= 60) {
            led.plot(3, 3)
        }
        if (数字2 < 55 && 数字 >= 55) {
            led.plot(2, 3)
        }
        if (数字2 < 50 && 数字 >= 50) {
            led.plot(2, 2)
        }
    }
}
let v2 = 0
let v1 = 0
startbit.startbit_Init()
basic.forever(function () {
    v1 = v2
    v2 = startbit.startbit_getSoundVolume()
    ShowVoice2(v2, v1)
})
