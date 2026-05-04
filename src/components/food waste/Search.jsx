import React, { useState, useRef } from "react";

export default function SearchBox({ address, setAddress, setLat, setLon, onSelect }) {
  const [results, setResults] = useState([]);
  const timerRef = useRef(null);

  const searchAddress = async (text) => {
    setAddress(text);
    if (!text || text.length < 3) return setResults([]);
    try {
      // call backend on port 8000
      const res = await fetch(
        `https://recipe-rower.b.com/api/search?q=${encodeURIComponent(text)}&countrycodes=in`
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error(err);
      setResults([]);
    }
  };

  const onChange = (e) => {
    const v = e.target.value;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => searchAddress(v), 300);
    setAddress(v);
  };

  const handleSelect = (r) => {
    setAddress(r.display_name);
    setLat(parseFloat(r.lat));
    setLon(parseFloat(r.lon));
    setResults([]);
    if (onSelect) onSelect(r);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        className="input"
        value={address}
        onChange={onChange}
        placeholder="Search address... (type nearest town for better results)"
      />
      {results.length > 0 && (
        <div className="search-suggestions">
          {results.map((r, i) => (
            <div className="suggestion-item" key={i} onClick={() => handleSelect(r)}>
              {r.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
