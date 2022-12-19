import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return <div>Projects</div>;
};

export default Projects;
