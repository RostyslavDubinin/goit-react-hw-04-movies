import { useState } from "react";

function SrchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.trim() === "") {
      alert("Please add search query");
      return;
    }

    onSubmit(searchQuery);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={searchQuery}
            onChange={handleInputChange}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SrchBar;
