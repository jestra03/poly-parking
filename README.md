# PolyParking App

A React application for managing parking at Cal Poly.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the source code

2. Navigate to the project directory and install dependencies:
```bash
cd polyparking
npm install
```

3. Create an assets folder for images:
```bash
mkdir -p src/assets
```

4. Create placeholder images for the parking lots:
```bash
# You should replace these with actual images
# For now, you can create empty files:
touch src/assets/lot-a.jpg src/assets/lot-b.jpg src/assets/lot-c.jpg src/assets/lot-d.jpg src/assets/lot-e.jpg src/assets/lot-f.jpg
```

5. Start the development server:
```bash
npm start
```

## Project Structure

- `src/components`: Reusable UI components
- `src/components/ui`: shadcn/ui components
- `src/pages`: Page components
- `src/lib`: Utility functions
- `src/assets`: Images and other static assets

## Features

- User authentication
- Parking lot availability display
- Parking spot reservation
- Navigation directions
- User settings

## Technologies Used

- React
- React Router
- Tailwind CSS
- shadcn/ui components

## Additional Information

This application is designed to match the provided Figma prototype, implementing the UI and functionality shown in the screenshots.

## Next Steps

1. Implement actual authentication
2. Connect to a backend API for real-time parking data
3. Integrate with a maps API for actual directions
4. Add notifications functionality