interface Props {
  setFilter(filter: string): void;
  filter: string;
}
const Filter = ({ setFilter, filter }: Props) => {
  const values = ["to do", "done", "all"];
  return (
    <div className="filter">
      {values.map((value) => {
        return (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={value === filter ? "active" : ""}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
