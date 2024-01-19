export default function ({ children, isSelected, ...props }) {
  // console.log("tabButton comoponent executing");?

  return (
    <li>
      {/* Add dynamic styling using className */}
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
