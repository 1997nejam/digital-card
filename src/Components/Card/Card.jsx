import React from "react";
import About from "../About/About";
import Avatar from "../Avatar/Avatar";
import Description from "../Description/Description";
import Footer from "../Footer/Footer";
import Socials from "../Socials/Socials";

export default function ({
  image,
  name,
  job,
  website,
  email,
  linkedIn,
  about,
  intrests,
}) {
  return (
    <div className={`w-72 rounded-xl mx-auto bg-slate-800`}>
      <Avatar image={image} name={name} />
      <Description name={name} job={job} website={website} />
      <Socials email={email} linkedIn={linkedIn} />
      <About about={about} intrests={intrests} />
      <Footer />
    </div>
  );
}
