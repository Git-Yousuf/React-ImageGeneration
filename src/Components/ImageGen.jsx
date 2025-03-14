import { useEffect, useState } from "react";

function ImageGen() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("space");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=6yJaGaM7JYDt9lU6TeKzNEl8SKwZ5DtQXsTg8fHfIrw&query=${searchQuery}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <div className="overall">
      <h1>ImageGen</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for images"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="img">
        {data.map((image) => (
          <div>
            <img src={image.urls.full} alt="Unsplash Image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGen;
