import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}
