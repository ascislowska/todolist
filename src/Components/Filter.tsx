import React from "react";
import { filters } from "../consts/filters";
import { playSound } from "../utils/playSound";
interface FilterProps {
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}
const Filter = ({ activeFilter, setActiveFilter }: FilterProps) => {
  const toggleFilter = (value: string) => {
    setActiveFilter(value);
    playSound("positive");
  };
  return (
    <div className="filter">
      {filters.map((filter) => {
        const { value, name } = filter;
        return (
          <button
            key={name}
            value={value}
            onClick={() => toggleFilter(value)}
            className={value === activeFilter ? "active" : undefined}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
