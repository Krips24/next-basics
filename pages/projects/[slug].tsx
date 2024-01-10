import React from "react";
import { useRouter } from "next/router";

const Projects = () => {
  const router = useRouter();
  const { slug } = router.query;
  

  return <div>Projects {slug}</div>;
};

export default Projects;
