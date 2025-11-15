import { useState } from "react";

export function Searchbar({
  setQuery = () => {},
}: {
  setQuery: (query: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setQuery(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
