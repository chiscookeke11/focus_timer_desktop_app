# Focus Timer Desktop App

A lightweight desktop productivity application built with **Electron, HTML, CSS, and JavaScript**. Focus Timer helps you manage focused work sessions with a countdown timer, simple controls, and native desktop notifications when a session is complete.

## Features

- **Customizable session duration** — choose between a 5-second demo, a 25-minute session, or a 50-minute session.
- **Start, pause, and reset controls** — manage your focus session with simple buttons.
- **Live countdown** — monitor your remaining time in minutes and seconds.
- **Desktop notifications** — receive a native notification when your focus session ends.
- **Minimal interface** — a compact desktop window designed to keep the timer easy to use.
- **Electron security practices** — uses context isolation, disables Node.js integration in the renderer, and exposes a limited API through a preload script.
- **Windows installer packaging** — uses Electron Forge and Squirrel.Windows to create distributable application artifacts.

## Technologies Used

- [Electron](https://www.electronjs.org/) — desktop application framework
- HTML5 — application structure
- CSS3 — user interface styling
- JavaScript — timer logic and interactions
- [Electron Forge](https://www.electronforge.io/) — application packaging and distribution
- Squirrel.Windows — Windows installer generation

## Getting Started

### Prerequisites

Before running the project, ensure you have installed:

- [Node.js](https://nodejs.org/)
- npm, which comes with Node.js
- Windows, if you intend to build and test the Windows installer

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/chiscookeke11/focus_timer_desktop_app.git
```

**2. Navigate to the project directory**

```bash
cd focus_timer_desktop_app
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the application**

```bash
npm start
```

The application should launch in a desktop window.

## How to Use

1. Open Focus Timer.
2. Select your preferred session duration from the dropdown.
3. Click **Start** to begin the countdown.
4. Click **Pause** to temporarily stop the timer.
5. Click **Reset** to restore the selected duration.
6. When the timer reaches zero, the application displays a completion status and attempts to show a native desktop notification.

The available durations are currently 5 seconds for demonstration, 25 minutes, and 50 minutes.

## Building the Windows Installer

Focus Timer uses Electron Forge with the Squirrel.Windows maker to package the desktop application.

Run the following command:

```bash
npm run make
```

After a successful build, check the generated artifacts in the `out/` directory.

To verify the packaged application:

1. Locate the generated installer.
2. Install the application on your Windows machine.
3. Launch the installed version.
4. Run a short focus session.
5. Confirm that the countdown completes and the native notification appears.

**Important:** Running `npm start` tests the development version. Testing the installed application verifies that the packaged build works independently of the development workflow.

## Project Structure

```text
focus_timer_desktop_app/
├── src/
│   ├── index.js       # Electron main process and notifications
│   ├── preload.js     # Secure bridge between UI and Electron
│   ├── index.html     # Timer interface
│   ├── index.css      # Application styling
│   └── renderer.js    # Countdown and timer controls
├── forge.config.js    # Electron Forge configuration
├── package.json       # Dependencies and npm scripts
└── README.md
```

## How It Works

The application uses Electron's main and renderer processes to provide a desktop experience.

1. **Renderer process:** `renderer.js` manages the countdown, updates the displayed time, and handles user interactions.
2. **Preload script:** `preload.js` exposes a restricted `timerAPI` through Electron's `contextBridge`.
3. **Main process:** `index.js` receives the timer-completion event, validates the sender, and displays a native notification when supported.
4. **Packaging:** Electron Forge and Squirrel.Windows generate the distributable Windows application artifacts.

## Available Commands

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm start` | Run the application in development |
| `npm run make` | Package the application for distribution |

## Security Considerations

The application enables context isolation, disables Node.js integration in the renderer, and enables sandboxing. The renderer communicates with the main process through a limited API exposed by the preload script.

These settings help reduce unnecessary access to privileged Electron and Node.js functionality.

## Current Limitations

- Session durations are predefined rather than fully customizable.
- There is no dedicated break timer or automatic Pomodoro cycle.
- Session history and productivity statistics are not implemented.
- Notification delivery depends on operating-system support and notification settings.

## Future Improvements

Possible enhancements include:

- Allow users to set custom focus durations.
- Add short and long break sessions.
- Implement automatic Pomodoro cycles.
- Add sound alerts and notification preferences.
- Track completed sessions and display productivity statistics.
- Introduce keyboard shortcuts and additional accessibility features.

## Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Implement and test your changes.
4. Commit your changes: `git commit -m "Add your feature"`.
5. Push your branch and open a pull request.

For bugs or feature requests, visit the [GitHub Issues page](https://github.com/chiscookeke11/focus_timer_desktop_app/issues).

## License

This project declares the **MIT License** in its package configuration. Refer to the repository's `LICENSE` file for the complete license terms.

## Author

**Chinedu Okeke**

- GitHub: [@chiscookeke11](https://github.com/chiscookeke11)

---

Built to make focused work sessions easier to start and manage.
