<script>
export default async function fetchWeather(city) {
  const config = useRuntimeConfig();
  const apiKey = config.public.secretKey;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Error The connect in the fetch");
  }

  const data = await response.json();
  return data;
}
</script>
