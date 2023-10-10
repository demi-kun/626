function evadir_obstaculos () {
    if (mbit_Sensor.Ultrasonic(DigitalPin.P14, DigitalPin.P15) < 20 && mbit_Sensor.Ultrasonic(DigitalPin.P14, DigitalPin.P15) > 0) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 80)
        basic.pause(1000)
    } else {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 120)
    }
}
function seguir_linea () {
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 70)
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 70)
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.Black)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 70)
    } else {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 0)
    }
}
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    seguir_linea()
    evadir_obstaculos()
})
