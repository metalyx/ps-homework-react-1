import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeLink from "./HomeLink";

const DadJokes = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const { data } = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "text/plain",
      },
    });

    setJoke(data);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <HomeLink />
      <div>{joke}</div>
    </div>
  );
};

export default DadJokes;
