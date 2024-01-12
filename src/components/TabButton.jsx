export default function ({ children, onSelect }) {
  console.log("tabButton comoponent executing");

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
