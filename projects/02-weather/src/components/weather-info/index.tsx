import { type Signal, component$, useSignal, useResource$, Resource, $ } from '@builder.io/qwik';
import { getWeather } from '~/api/getWeather';
import { type WeatherDataProps } from '~/types/types';
import { WiSwitcher } from '../icons/wi-switcher';

export interface WeatherInfoProps {
  city: Signal<string>
}

export const WeatherInfo = component$<WeatherInfoProps>(({ city }) => {
  const newCity = useSignal<string>("");

  const weatherData = useResource$<WeatherDataProps>(({ track, cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());
    track(() => city.value);
    return getWeather(city.value);
  });

  const handleSearch = $(() => {
    city.value = newCity.value;
  });

  return (
    <Resource
      value={weatherData}
      onPending={() => <>Cargando...</>}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(weatherData: WeatherDataProps) => {
        return (
          <div class="weather">
            <div class="weather__current">
              <div class="weather__current__temperature">
                {Math.round(weatherData.main.temp)}°C
              </div>

              <WiSwitcher code={weatherData.weather[0].icon} />

              <div>{weatherData.weather[0].description}</div>
            </div>
            <div class="weather__search">
              <input
                type="text"
                name="city"
                id="city"
                placeholder={city.value}
                value={newCity.value}
                onInput$={(ev) =>
                  (newCity.value = (ev.target as HTMLInputElement).value)
                }
              />
              <button
                onClick$={() => handleSearch()}
                class="btn"
              >
                Search
              </button>
            </div>
            <div class="weather__extra">
              <div class="weather__extra__detail">
                <div class="weather__extra__detail__label">Feels like</div>
                <div class="weather__extra__detail__value">
                  {Math.round(weatherData.main.feels_like)}°C
                </div>
              </div>
              <div class="weather__extra__detail">
                <div class="weather__extra__detail__label">Humidity</div>
                <div class="weather__extra__detail__value">
                  {Math.round(weatherData.main.humidity)}°C
                </div>
              </div>
              <div class="weather__extra__detail">
                <div class="weather__extra__detail__label">Wind</div>
                <div class="weather__extra__detail__value">
                  {Math.round(weatherData.wind.speed)} km/h
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
});