import { useState } from "react";

const ClubImage = ({ slug, name }) => {
  const [imgSrc, setImgSrc] = useState(`/images/clubs/${slug}.png`);

  return (
    <img
      src={imgSrc}
      alt={`${name} Logo`}
      onError={() => setImgSrc("/src/assets/images/logo.png")}
    />
  );
};

export default ClubImage;
