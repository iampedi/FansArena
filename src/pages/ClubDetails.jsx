import { useParams } from "react-router";
import clubsData from "../data/clubs.json";

const ClubDetails = () => {
  const { id } = useParams();
  const club = clubsData.find((clubObj) => clubObj.id === id);

  if (!club) return <p>Team not found</p>;

  return (
    <div>
      <p>Details of {club.name}</p>
    </div>
  );
};

export default ClubDetails;
