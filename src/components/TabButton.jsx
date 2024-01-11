export default function ({ children, onSelect }) {
  function handleClick() {
    console.log("Hello world");
  }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
