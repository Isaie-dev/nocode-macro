export interface CartalogItem {
    id: number,
    name: string,
    description: string,
    elements: {
        html: string,
        text?: string,
        class?: string,
        type?: string,
        label?: string,
        placeHolder?: string,
        function?: {
            name: string,
            action: string,
        },
    }[],
    systemAction: string
}

export const cartalog: CartalogItem[] = [
    {
        id: 0,
        name: "Left Click",
        description: "Simulate a Left Click wherever you need",
        elements: [
            {
                html: "input",
                type: "number",
                placeHolder: "720",
                label: "Coordinate X",
                class: "configpanel-input-number"
            },
            {
                html: "input",
                type: "number",
                placeHolder: "1300",
                label: "Coordinate Y",
                class: "configpanel-input-number"
            },
            {
                html: "button",
                text: "Get coordinates on next click",
                class: "configpanel-button",
                function: {name: "getCoordsOnNextClick", action: "onClick"}
            },
            {
                html: "input",
                type: "number",
                placeHolder: "20",
                label: "Delay(ms)",
                class: "configpanel-input-number"
            }
        ],
        systemAction: "Left Click",
    },
    {
        id: 1,
        name: "Right Click",
        description: "Simulate a Right Click wherever you need",
        elements: [
            {
                html: "input",
                type: "number",
                placeHolder: "720",
                label: "Coordinate X",
                class: "configpanel-input-number"
            },
            {
                html: "input",
                type: "number",
                placeHolder: "1300",
                label: "Coordinate Y",
                class: "configpanel-input-number"
            },
            {
                html: "button",
                text: "Get coordinates on next click",
                class: "configpanel-button",
                function: {name: "getCoordsOnNextClick", action: "onClick"}
            },
            {
                html: "input",
                type: "number",
                placeHolder: "20",
                label: "Delay(ms)",
                class: "configpanel-input-number"
            }
        ],
        systemAction: "Right Click",
    },
    {
        id: 2,
        name: "Middle Click",
        description: "Simulate a Middle Click wherever you need",
        elements: [
            {
                html: "input",
                type: "number",
                placeHolder: "720",
                label: "Coordinate X",
                class: "configpanel-input-number"
            },
            {
                html: "input",
                type: "number",
                placeHolder: "1300",
                label: "Coordinate Y",
                class: "configpanel-input-number"
            },
            {
                html: "button",
                text: "Get coordinates on next click",
                class: "configpanel-button",
                function: {name: "getCoordsOnNextClick", action: "onClick"}
            },
            {
                html: "input",
                type: "number",
                placeHolder: "20",
                label: "Delay(ms)",
                class: "configpanel-input-number"
            }
        ],
        systemAction: "Middle Click",
    },
    // {
    //     id: 3,
    //     name: "Keystroke",
    //     description: "Simulate a Keystroke",
    //     elements: ["KeyList","Delay(ms)"],
    //     systemAction: "Keystroke",
    // },
    // {
    //     id: 4,
    //     name: "Run",
    //     description: "Run any file",
    //     elements: ["file","Delay(ms)"],
    //     systemAction: "run",
    // },
    // {
    //     id: 5,
    //     name: "Kill",
    //     description: "Kill an app and ask to save if file isn't saved",
    //     elements: ["file","Delay(ms)"],
    //     systemAction: "kill",
    // },
    // {
    //     id: 6,
    //     name: "Destroy",
    //     description: "Kill an app without asking to save if file isn't saved",
    //     elements: ["file","Delay(ms)"],
    //     systemAction: "destroy",
    // },
    // {
    //     id: 7,
    //     name: "Paste",
    //     description: "Paste any text",
    //     elements: ["Text to paste","Delay(ms)"],
    //     systemAction: "ctrl + v",
    // },
    // {
    //     id: 8,
    //     name: "Shut Down",
    //     description: "Shut down computer",
    //     elements: ["Delay(ms)"],
    //     systemAction: "shut down",
    // },
    // {
    //     id: 9,
    //     name: "Sleep Mode",
    //     description: "Put computer into Sleep Mode",
    //     elements: ["Delay(ms)"],
    //     systemAction: "sleep",
    // },
    // {
    //     id: 10,
    //     name: "Restart",
    //     description: "Restart Computer",
    //     elements: ["Delay(ms)"],
    //     systemAction: "restart",
    // },
]