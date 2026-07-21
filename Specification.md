# NoCode_Macro

## 1. Main goal

Create a lightweight and modern Windows desktop application that allows users to create, edit, save and execute automation macros trough a visual interface with carts without writing any code.

## 2. Scope of V1 (MVP)

- **Target OS**: Windows only.
- **Available Actions**: Mouse, Keyboard, and System actions.
- **Architecture**: 100% offline / local application.
- **Exclusions**: No cloud syncing or shared marketplace for this version.

## 3. System Actors

- **The User**: Responsible for creating, editing, and executing the macros.
- **The Frontend (UI)**: Displays the trains, handles the Drag & Drop mechanics, and collects user parameters.
- **The Backend (Core)**: Interacts with the low-level Windows OS, simulates keystrokes/clicks, and manages application performance.

## 4. Detailed Features

### A. Macro Edition

1. **US-01**: As a user, I want to be able to search and select an action through a lateral panel.
2. **US-02**: As a user, I want to be able to add a cart to my train using Drag & Drop.
3. **US-03**: As a user, I want to be able to edit the parameters of a cart (e.g., delay duration, file path to run) through its configuration inputs.

### B. Automation Recorder

1. **US-04**: As a user, I want to be able to start and stop a global recording session using a dedicated button or a configurable shortcut key.
2. **US-05**: As a user, I want the application to automatically capture my mouse clicks and keystrokes during a recording session and turn them into visual carts.

### C. Execution & Persistence

1. **US-06**: As a user, I want to be able to execute a macro by pressing a custom global shortcut or a key combination.
2. **US-07**: As a user, I want to be able to organize my macros into custom folders and view them all in a dedicated management panel.
3. **US-08**: As a user, I want to manually save my trains into a local JSON file by clicking a Save button.
