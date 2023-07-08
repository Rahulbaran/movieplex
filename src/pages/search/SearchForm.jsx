import { useEffect, useRef } from "react";
import { MdSearch } from "react-icons/md";

export default function SearchForm({
  type,
  query,
  handleQuery,
  handleSearchForm
}) {
  const field = useRef("");
  useEffect(() => field.current.focus(), []);

  return (
    <form
      className="search-form"
      spellCheck="false"
      autoComplete="off"
      onSubmit={handleSearchForm}
    >
      <input
        type="search"
        name="search"
        placeholder={`${type} name`}
        required
        ref={field}
        value={query}
        onChange={e => handleQuery(e.target.value)}
      />
      <button type="submit">
        <MdSearch />
      </button>
    </form>
  );
}
