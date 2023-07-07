export default function SearchForm({
  type,
  searchStr,
  handleSearchStr,
  handleSearch
}) {
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
        value={searchStr}
        onChange={e => handleSearchStr(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
