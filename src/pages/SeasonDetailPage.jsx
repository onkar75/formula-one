import { useLoaderData } from 'react-router-dom';
import { getRacesForYear } from '../utils/api';
import SeasonReport from '../components/SeasonReport/SeasonReport';

export const loadSeasonDetail = async ({ params }) => {
  const { year, driverId } = params;
  const res = await getRacesForYear(year);
  return {
    seasonRaces: res.MRData.RaceTable.Races,
    selectedSeason: year,
    selectedSeasonChampionId: driverId,
  };
};

const SeasonDetailPage = () => {
  const racesData = useLoaderData();

  const { seasonRaces, selectedSeason, selectedSeasonChampionId } = racesData;

  return (
    <div>
      <SeasonReport
        races={seasonRaces}
        season={selectedSeason}
        championId={selectedSeasonChampionId}
      />
    </div>
  );
};

export default SeasonDetailPage;
