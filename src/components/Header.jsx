function Header({ ipQuery, setIpQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(); // triggers setIpQuery
  };

  return (
    <header className="header">
      <h1>IP Address Tracker</h1>
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={ipQuery}
          onChange={(e) => setIpQuery(e.target.value)}
        />
        <button type="submit">&#9654;</button>
      </form>
    </header>
  );
}
