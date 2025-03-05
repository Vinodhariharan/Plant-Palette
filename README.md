# Plant Palette

Plant Palette is a frontend-only eCommerce web application for garden products. It provides a user-friendly shopping experience with a static product list, cart functionality, and basic checkout flow.

## Live Demo

🔗 [Plant Palette - Live Site](https://plantpalette.onrender.com/)

## Features
- Home page with featured products
- Product listing and details pages
- Shopping cart functionality
- User authentication (Login/Register UI only)
- Responsive design with Material UI (MUI) and Joy UI
- Static product list (no backend integration)

## Tech Stack
- **React.js** - Frontend framework
- **React Router** - Client-side routing
- **MUI & Joy UI** - UI components and styling
- **Render** - Deployment platform

## Installation

To run the project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/plant-palette.git
   ```
2. Navigate to the project folder:
   ```sh
   cd plant-palette
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Deployment
The project is deployed on [Render](https://render.com/). To deploy updates:
1. Build the project:
   ```sh
   npm run build
   ```
2. Push changes to your GitHub repository.
3. Configure Render to deploy from the repository.

## Folder Structure
```
plant-palette/
│── public/                 # Static assets
│── src/
│   ├── assets/             # Images, icons, etc.
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components (Home, Product, Checkout, etc.)
│   ├── context/            # Context providers (Cart, User, etc.)
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point
│── package.json            # Project dependencies
│── README.md               # Project documentation
```

## Known Issues
- The product list is static and does not fetch data from a backend.
- Checkout and authentication are UI-only (no real transactions or user sessions).
- Ensure static assets are referenced correctly in deployment.

## License
This project is open-source and available under the MIT License.

---
If you have any issues or suggestions, feel free to contribute or open an issue!

