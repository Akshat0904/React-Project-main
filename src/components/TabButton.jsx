export default function ({ children, onSelect, isSelected }) {
  console.log("tabButton comoponent executing");

  return (
    <li>
      {/* Add dynamic styling using className */}
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
