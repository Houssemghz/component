import React from "react";
import khabib from "../../khabib.jpg";

const ProfilePhoto = () => {
  return (
    <div>
      <img
        src={khabib}
        alt="khabib"
        style={{ width: "330px", height: "210px" }}
      />
    </div>
  );
};

export default ProfilePhoto;
