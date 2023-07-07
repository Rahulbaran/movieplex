import { useEffect, useRef } from "react";
import { MdSearch } from "react-icons/md";

export default function SearchForm({
  type,
  searchStr,
  handleSearchStr,
  handleSearch
}) {
  const field = useRef("");
  useEffect(() => field.current.focus(), []);

  return (
    <form
      className="search-form"
      spellCheck="false"
      autoComplete="off"
      onSubmit={handleSearch}
    >
      <input
        type="search"
        name="search"
        placeholder={`${type} name`}
        required
        ref={field}
        value={searchStr}
        onChange={e => handleSearchStr(e.target.value)}
      />
      <button type="submit">
        <MdSearch />
      </button>
    </form>
  );
}
