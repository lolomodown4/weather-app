import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const Searchbar = ({ setCity }) => {
  const [input, setInput] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setCity(input);
  };

  return (
    <div className="searchbar">
      <input
        placeholder="Enter city"
        className="input"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Searchbar;
