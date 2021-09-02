import React from "react";
import { HomeContainer, Button, Push } from "./Home";
import { Link } from "react-router-dom";
function Home() {
  return (
    <HomeContainer>
      <Link to="/">
        <Button>
          <Push>Fun Flags</Push>
        </Button>
      </Link>
    </HomeContainer>
  );
}

export default Home;
