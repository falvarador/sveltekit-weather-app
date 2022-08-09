<script>
    import Aside from "../components/aside.svelte";
    import Loading from "../components/loading.svelte";
    import Search from "../components/search.svelte";
    import WeatherBottom from "../components/weather-bottom.svelte";
    import WeatherTop from "../components/weather-top.svelte";

    import { getWeather } from "../services/weather";

    let weatherPromise = getWeather();
</script>

<Search
    on:search={(e) => {
        weatherPromise = getWeather(e.detail.search);
    }}
/>

<article>
    {#await weatherPromise}
        <Loading />
    {:then { locationName, country, icon, temperature, conditionText, localtime, feelsLike, humidity, windSpeed }}
        <WeatherTop {locationName} {country} {icon} />
        <WeatherBottom {temperature} {conditionText} {localtime} />
        <Aside feelslike={feelsLike} {humidity} windspeed={windSpeed} />
    {:catch e}
        <p>{e}</p>
    {/await}
</article>

<style>
    article {
        margin: 0;
    }
</style>
