# Weather API

A NodeJS API to get current and forecasted weather.

# Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.

# Running the API

* Run ```npm run webpack``` on a terminal to let webpack compile the files and watch them. Keep the watcher running to have automatic updates when editing a file
* Run   ```npm start``` to start the application.

# Endpoints

## `/location`
    Returns your current location based on your device's IP.
## `/current[/city?]`
    Returns the current weather on the given city. If city is not provided, uses the device's IP city

## `/forecast[/city?]`
    Returns the forecasted weather for the next 4 days on the given city. 
    If city is not provided, uses the device's IP city
