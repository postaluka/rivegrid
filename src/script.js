import * as rive from "@rive-app/canvas"

/**
 * Canvas
 */
const canvasDriver = document.getElementById('canvasDriver')
const canvasGentleRockFan = document.getElementById('canvasGentleRockFan')

const huppDriver = new rive.Rive(
    {
        src: 'rive/hupp_driver.riv',
        canvas: canvasDriver,
        autoplay: true,
        stateMachines: 'CAR STATE MACHINE',
        // animations: ['EYES', 'CABIN MOVEMENT', 'WHEEL CTRL', 'FRONT GROUP', 'WHEEL HOVER exit', 'WHEEL HOVER enter', 'SIGNAL'],
        // onLoad: (_) =>
        // {
        //     const stateMachineInputs = huppDriver.stateMachineInputs('CAR STATE MACHINE')
        //     // trigger = stateMachineInputs[0]
        //     console.log(stateMachineInputs);

        // },
    }
)
const gentleRockFan = new rive.Rive(
    {
        src: 'rive/gentle_rock_fan.riv',
        canvas: canvasGentleRockFan,
        autoplay: true,
        stateMachines: 'GENTLE ROCK FAN',
        // animations: ['EYES', 'CABIN MOVEMENT', 'WHEEL CTRL', 'FRONT GROUP', 'WHEEL HOVER exit', 'WHEEL HOVER enter', 'SIGNAL'],
        // onLoad: (_) =>
        // {
        //     const stateMachineInputs = huppDriver.stateMachineInputs('CAR STATE MACHINE')
        //     // trigger = stateMachineInputs[0]
        //     console.log(stateMachineInputs);

        // },
    }
)

// let skinTriggerInput;
// const riveInstance = new rive.Rive({
//     // Hosted .riv asset, or a local one. Uncomment line 8 to try with
//     // a local basketball.riv asset, or add your own!
//     src: "rive/skin-test.riv",
//     // layout: new rive.Layout({
//     //     fit: rive.Fit.Cover,
//     //     alignment: rive.Alignment.Center
//     // }),
//     canvas: canvas,
//     autoplay: true,
//     stateMachines: "Motion",
//     // When the Rive instance loads, grab a reference to the state machine inputs
//     // Store references in variables you can use across your app
//     onLoad: (_) =>
//     {
//         const stateMachineInputs = riveInstance.stateMachineInputs("Motion");
//         console.log(stateMachineInputs);

//         skinTriggerInput = stateMachineInputs[0];
//     }
// });




