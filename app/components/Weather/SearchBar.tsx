import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({
  onCitySelect,
}: {
  onCitySelect: (city: string) => void;
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.trim()) {
      try {
        const response = await axios.get(
          "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
          {
            headers: {
              "X-RapidAPI-Key": "4881c62f5fmsh18e93e11bf764f4p13bcd0jsn32f3ccf83ef5",
              "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
            params: { namePrefix: query },
          }
        );

        const city = response.data.data[0]?.name;
        if (city) {
          onCitySelect(city);
          setQuery("");
        } else {
          console.error("City not found.");
        }
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    }
  };

  return (
    <div className="my-5 text-gray-900 w-full max-w-md mx-auto text-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Search for a city"
        className="w-full p-3 text-lg bg-neutral-light text-neutral-dark dark:bg-neutral-dark dark:text-neutral-light border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
      />

    </div>
  );
};

export default SearchBar;
