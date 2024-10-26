# Weather App

A simple weather application built with React. This app allows users to search for the current weather information of any city around the world. It fetches data from OpenWeatherMap API and displays the temperature, weather condition, and other relevant information.

## Features

- Search for current weather by city name
- Display temperature, weather conditions, and additional information
- Animated weather icons and live clock
- Responsive design suitable for mobile and desktop use

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Axios** - For making HTTP requests to the weather API
- **react-animated-weather** - For animated weather icons
- **react-live-clock** - For displaying the live time
- **CSS** - Styling and layout

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have **Node.js** installed. You can download it [here](https://nodejs.org/).

### Setting Up React

1. **Create a new React app:**
    ```bash
    mkdir weather
    cd weather
    npx create-react-app weather
    ```
2. The installation process will start immediately. Once completed, your React setup will be done, and the app will run at `http://localhost:3000` in your browser.

### Install Required Packages

To include necessary packages for the app, use the following commands:

1. **react-animated-weather**:
    ```bash
    npm install react-animated-weather
    ```
2. **react-live-clock**:
    ```bash
    npm install react-live-clock
    ```
3. **axios**:
    ```bash
    npm install axios
    ```

### Get Your API Keys

To fetch weather data, the app uses the OpenWeatherMap API. Follow these steps to get your API key:

1. **Sign Up on OpenWeatherMap**:
   - Go to [OpenWeatherMap](https://openweathermap.org/) and create an account.
   - Confirm your email account.
   - After this, you will receive an API key. The key will be sent to your email and will also be available in your OpenWeatherMap dashboard.

2. **Add Your API Key to the App**:
   - Create a new file named `apiKeys.js` in your project directory.
   - Add your key and the base URL for the OpenWeatherMap API:
     ```javascript
     module.exports = {
       key: "{Your API Key Here}",
       base: "https://api.openweathermap.org/data/2.5/",
     };
     ```
   - Replace `{Your API Key Here}` with the API key you received.

### Running the App

1. **Start the React App**:
    ```bash
    npm start
    ```
2. **Open your browser and go to**:
    ```
    http://localhost:3000
    ```

## Usage

1. Enter the name of the city in the search bar.
2. Click on the search button to get the current weather information.
3. The app will display the temperature, weather condition, and other details for the searched city.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

- **Author**: Anurag
- **GitHub**: [i-anurag-vashist](https://github.com/i-anurag-vashist)

---

Thank you for checking out this project! Happy coding!
