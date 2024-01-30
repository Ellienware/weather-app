# weather-app
    User Interface:
        The app has a clean and responsive user interface contained within a card element.
        It includes a search input box and a button with a search icon for users to input a city name and initiate a search.
        The app displays weather information, including temperature, humidity, and wind speed.
        An error message is shown if the entered city is not found.

    Styling:
        The app uses a dark-themed design with a linear gradient background for the card element.
        The search input and button are styled for a consistent and visually appealing look.
        Weather details are presented in a structured and readable format.

    Weather Information:
        The app fetches weather data from the OpenWeatherMap API using the entered city name.
        It displays the city name, temperature in Celsius, humidity percentage, and wind speed in kilometers per hour.
        An appropriate weather icon is shown based on the main weather condition (e.g., clouds, clear, rain).

    Error Handling:
        If the entered city is not found (HTTP status 404), an error message is displayed, and the weather details are hidden.

    Default City:
        The app initializes with weather information for a default city (in this example, "Johannesburg").
        Users can then use the search functionality to check the weather for different cities.

    Technologies:
        The app uses HTML for the structure, CSS for styling, and JavaScript for dynamic functionality.
        It makes asynchronous API requests to OpenWeatherMap for real-time weather data.
 
