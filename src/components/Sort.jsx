import Select from "react-select";

const sortByQuery = [
  { value: "?sort_by=created_at&order=desc", label: "Newest" },
  { value: "?sort_by=created_at&order=asc", label: "Oldest" },
  { value: "?sort_by=comment_count&order=desc", label: "Most Comments" },
  { value: "?sort_by=comment_count&order=asc", label: "Least Comments" },
  { value: "?sort_by=votes&order=desc", label: "Highest Votes" },
  { value: "?sort_by=votes&order=asc", label: "Lowest Votes" },
];

const SortSelect = ({ setSearchTerm }) => {
  return (
    <Select
      className="sortSelect"
      options={sortByQuery}
      defaultValue={{ value: "?sort_by=votes&order=desc", label: "Newest" }}
      onChange={(e) => {
        setSearchTerm(e.value);
      }}
    />
  );
};

export default SortSelect;
