document.getElementById('getWeather').addEventListener('click', async () => {
    const location = document.getElementById('location').value;
    const weatherInfoDiv = document.getElementById('weatherInfo');

    if (!location) {
        weatherInfoDiv.innerHTML = '<p>Please enter a location.</p>';
        return;
    }

    try {
        const apiKey = '820a46ad78d3704fc106139b915543f4';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error('Location not found');
        }

        const data = await response.json();
        const weather = data.weather[0];
        const temp = data.main.temp;

        weatherInfoDiv.innerHTML = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>${weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}</p>
        <p>Temperature: ${temp}°C</p>
        <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}">
        `;
    } catch (error) {
        weatherInfoDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
