export interface CatalogItem {
    id: number,
    name: string,
    description: string,
    properties: string[],
    systemAction: string
}

export const cartalog: CatalogItem[] = [
    {
        id: 1,
        name: "Left Click",
        description: "Simulate a Left Click wherever you need",
        properties: ["position X", "position Y", "Delay(ms)"],
        systemAction: "Left Click"
    },
    {
        id: 2,
        name: "Right Click",
        description: "Simulate a Right Click wherever you need",
        properties: ["position X", "position Y", "Delay(ms)"],
        systemAction: "Right Click"
    },
    {
        id: 3,
        name: "Middle Click",
        description: "Simulate a Middle Click wherever you need",
        properties: ["position X", "position Y", "Delay(ms)"],
        systemAction: "Middle Click"
    },
    {
        id: 4,
        name: "Keystroke",
        description: "Simulate a Keystroke",
        properties: ["KeyList","Delay(ms)"],
        systemAction: "Keystroke"
    },
    {
        id: 5,
        name: "Run",
        description: "Run any file",
        properties: ["file","Delay(ms)"],
        systemAction: "run"
    },
    {
        id: 6,
        name: "Kill",
        description: "Kill an app and ask to save if file isn't saved",
        properties: ["file","Delay(ms)"],
        systemAction: "kill"
    },
    {
        id: 7,
        name: "Destroy",
        description: "Kill an app without asking to save if file isn't saved",
        properties: ["file","Delay(ms)"],
        systemAction: "destroy"
    },
    {
        id: 8,
        name: "Paste",
        description: "Paste any text",
        properties: ["Text to paste","Delay(ms)"],
        systemAction: "ctrl + v"
    },
    {
        id: 9,
        name: "Shut Down",
        description: "Shut down computer",
        properties: ["Delay(ms)"],
        systemAction: "shut down"
    },
    {
        id: 10,
        name: "Sleep Mode",
        description: "Put computer into Sleep Mode",
        properties: ["Delay(ms)"],
        systemAction: "sleep"
    },
    {
        id: 11,
        name: "Restart",
        description: "Restart Computer",
        properties: ["Delay(ms)"],
        systemAction: "restart"
    }

]