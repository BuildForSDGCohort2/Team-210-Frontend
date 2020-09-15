export function filterData(data, searchStr) {
  return data.filter(
    (str) =>
      str.end_location.substr(0, searchStr.length).toUpperCase() ===
      searchStr.toUpperCase()
  );
}
