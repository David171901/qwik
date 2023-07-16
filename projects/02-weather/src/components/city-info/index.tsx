import { type Signal, component$ } from '@builder.io/qwik';

export interface CityInfoProps {
  city: Signal<string>
}

export const CityInfo = component$<CityInfoProps>(({city}) => {
  return (
    <div>
      {city}
    </div>
  );
});