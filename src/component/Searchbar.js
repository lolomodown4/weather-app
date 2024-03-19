import SearchIcon from "@mui/icons-material/Search";
const Searchbar = () => {
  return (
    <div className="searchbar">
      <input placeholder="Enter city" />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Searchbar;
