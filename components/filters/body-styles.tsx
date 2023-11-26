import { Dispatch, SetStateAction } from 'react';
import { Icons } from '@/components/icons';
import { FiltersItem } from '@/components/filters/item';
import { ISelectedFilters } from '@/types/filters';
import { EBodyStyles } from '@/types/car';

const bodyStyleIcons = {
  HATCHBACK: <Icons.hatchback className="h-8 w-8" />,
  MINIVAN: <Icons.minivan className="h-8 w-8" />,
  PICKUP_TRUCK: <Icons.pickupTruck className="h-8 w-8" />,
  SPORTS_CAR: <Icons.sportsCar className="h-8 w-8" />,
  SUV: <Icons.suv className="h-8 w-8" />,
  SEDAN: <Icons.sedan className="h-8 w-8" />,
};

interface FiltersBodyStylesProps {
  selectedFilters: ISelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>;
}

export function FiltersBodyStyles({
  selectedFilters,
  setSelectedFilters,
}: FiltersBodyStylesProps) {
  function handleClick(
    value: EBodyStyles,
    selectedFilters: ISelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>,
  ) {
    let bodyStyleSelected: EBodyStyles[] = [];

    if (selectedFilters.bodyStyles.includes(value)) {
      bodyStyleSelected = selectedFilters.bodyStyles.filter(
        (selected) => selected !== value,
      );
    } else {
      bodyStyleSelected = [...selectedFilters.bodyStyles, value];
    }

    setSelectedFilters({ ...selectedFilters, bodyStyles: bodyStyleSelected });
  }

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Car type</h3>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Object.keys(EBodyStyles).map((key) => {
            const value: EBodyStyles = EBodyStyles[key];

            return (
              <FiltersItem
                key={key}
                area
                selected={selectedFilters.bodyStyles.includes(value)}
                onClick={() =>
                  handleClick(value, selectedFilters, setSelectedFilters)
                }
              >
                <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                  {bodyStyleIcons[key]}
                  <span className="text-base font-medium">{value}</span>
                </div>
              </FiltersItem>
            );
          })}
        </div>
      </section>
    </div>
  );
}
