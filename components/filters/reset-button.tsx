import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { ISelectedFilters } from '@/types/filters';

interface FiltersResetButtonProps {
  minPrice: number;
  maxPrice: number;
  setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>;
}

export function FiltersResetButton({
  minPrice,
  maxPrice,
  setSelectedFilters,
}: FiltersResetButtonProps) {
  function handleClick(
    setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>,
  ) {
    setSelectedFilters({
      priceRange: [minPrice, maxPrice],
      bodyStyles: [],
      engineTypes: [],
      minSeats: undefined,
      transmissions: [],
    });
  }

  return (
    <Button
      variant="ghost"
      className="-ml-2 px-2.5 text-[15px] font-semibold underline"
      onClick={() => handleClick(setSelectedFilters)}
    >
      Clear all
    </Button>
  );
}
