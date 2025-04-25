import { useParams } from "react-router";
import clubsData from "../data/clubs.json";

const ClubDetails = () => {
  const { slug } = useParams();
  const club = clubsData.find((clubObj) => clubObj.slug === slug);

  if (!club) return <p>Team not found</p>;

  return (
    <div className="_club-details">
      <div className="container max-w-5xl mx-auto py-10">
        <p>Details of {club.name}</p>
      </div>
    </div>
  );
};

export default ClubDetails;
