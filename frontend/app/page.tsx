export default function Home() {
  return (
    <ul>
      {["Teit1", "Teit2", "Teit3"].map((thing, index) => (
        <li
          key={index}
          className="text-lg bg-light-primary dark:bg-dark-primary rounded my-3 px-3 py-1 "
        >
          {thing}
        </li>
      ))}
    </ul>
  );
}
