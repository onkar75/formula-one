export async function getRacesForYear(year) {
  const response = await fetch(
    `https://ergast.com/api/f1/${year}/results/1.json`
  );
  if (!response.ok) {
    throw { message: `Failed to fetch races for ${year}`, status: 500 };
  }
  return response.json();
}
