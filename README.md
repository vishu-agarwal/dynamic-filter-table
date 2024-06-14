
## Overview

This repository contains a React application for dynamic data filtering and display using `TableComponent` and `TableFilters`.

## Components

### App.tsx

- Manages state for filters (`filters`) and table data (`tableData`).
- Imports React, Material-UI components, custom components (`TableComponent`, `TableFilters`), data (`data.json`), types (`DataItem`), and configuration (`filterKeys`).
- Uses hooks (`useState`, `useEffect`) for state management and to handle filter changes.
- Renders `TableFilters` for filter selection and `TableComponent` for displaying filtered data.

### TableComponent.tsx

- Displays a table with data (`data`) passed as props.
- Handles cases where no data is available.

### TableFilters.tsx

- Renders filter checkboxes based on available filter keys (`filterKeys`) and data (`data`).
- Manages state (`filters`) and updates filters on user interaction (`handleChange`).

## Usage

1. Install dependencies:
    npm install

2. Start the application:
    npm start

3. Open the application in your browser:
    http://localhost:3000

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


