import { useEffect, useState } from "react";

export function Searchbar({
  setQuery = () => {},
}: {
  setQuery: (query: string) => void;
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setQuery(value);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value, setQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
