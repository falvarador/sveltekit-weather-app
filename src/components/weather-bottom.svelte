<script>
    export let temperature = 0,
        conditionText = "",
        localtime = "";
</script>

<fieldset>
    <h2>{temperature}°C</h2>
    <div>
        <h3>{conditionText}</h3>
        <h4>{localtime}</h4>
    </div>
</fieldset>

<style>
    fieldset {
        align-items: flex-end;
        display: flex;
        justify-content: space-between;
        margin: 0;
    }

    h2 {
        font-size: 6em;
        font-weight: 300;
        margin: 0;
        text-transform: uppercase;
    }

    h3 {
        font-weight: 700;
        margin: 0;
    }

    h4 {
        font-weight: 300;
        text-transform: uppercase;
    }
</style>
