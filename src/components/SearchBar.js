import React, { useState } from "react";

const SearchBar = ({ fetchWeather, setCity }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      setCity(input);
      fetchWeather(input);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
