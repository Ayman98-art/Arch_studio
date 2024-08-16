import React from 'react';
import Carousel from '../../components/Carousel';
import Welcome from '../../components/Welcome';
import SmallTeam from '../../components/SmallTeam';
import Featured from '../../components/Featured';

function HomePage() {
return (
<>
  <Carousel />
  <Welcome />
  <SmallTeam />
  <Featured />
</>
)
}

export default HomePage;