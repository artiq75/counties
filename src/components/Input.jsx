export function Input({ value, onChange }) {
  const handleChange = function (e) {
    onChange(e.target.value)
  }

  return (
    <div className="input">
      <span className="input__icon">
        <ion-icon name="search"></ion-icon>
      </span>
      <input
        type="text"
        id="search"
        value={value}
        onChange={handleChange}
        placeholder="Search for a country..."
      />
    </div>
  )
}
