import React from "react";
import Card from './Card';


import manCityLogo from '../assets/manchestercity.png';
import realMadridLogo from '../assets/realmadrid.png';
import bayernLogo from '../assets/bayernmunich.png';
import barcaLogo from '../assets/barcelone.png';
import liverpoolLogo from '../assets/liverpool.png';
import psgLogo from '../assets/psg.png';
import chelseaLogo from '../assets/chelsea.png';
import juventusLogo from '../assets/juventus.png';
import interLogo from '../assets/intermilan.png';
import atleticoLogo from '../assets/athleticomadrid.jpeg';

const footballTeams = [
  { 
    teamName: 'Manchester City', 
    country: 'England', 
    imageUrl: manCityLogo, 
    link: 'https://www.mancity.com/' 
  },
  { 
    teamName: 'Real Madrid', 
    country: 'Spain', 
    imageUrl: realMadridLogo, 
    link: 'https://www.realmadrid.com/' 
  },
  { 
    teamName: 'Bayern Munich', 
    country: 'Germany', 
    imageUrl: bayernLogo, 
    link: 'https://fcbayern.com/' 
  },
  { 
    teamName: 'Barcelona', 
    country: 'Spain', 
    imageUrl: barcaLogo, 
    link: 'https://www.fcbarcelona.com/' 
  },
  { 
    teamName: 'Liverpool', 
    country: 'England', 
    imageUrl: liverpoolLogo, 
    link: 'https://www.liverpoolfc.com/' 
  },
  { 
    teamName: 'Paris Saint-Germain', 
    country: 'France', 
    imageUrl: psgLogo, 
    link: 'https://en.psg.fr/' 
  },
  { 
    teamName: 'Chelsea', 
    country: 'England', 
    imageUrl: chelseaLogo, 
    link: 'https://www.chelseafc.com/' 
  },
  { 
    teamName: 'Juventus', 
    country: 'Italy', 
    imageUrl: juventusLogo, 
    link: 'https://www.juventus.com/' 
  },
  { 
    teamName: 'Inter Milan', 
    country: 'Italy', 
    imageUrl: interLogo, 
    link: 'https://www.inter.it/en' 
  },
  { 
    teamName: 'Atletico Madrid', 
    country: 'Spain', 
    imageUrl: atleticoLogo, 
    link: 'https://en.atleticodemadrid.com/' 
  }
]
const CommunityBoard = () => {
  return (
    <div className="community-board">
      {footballTeams.map((team, index) => (
        <Card key={index} teamName={team.teamName} country={team.country} imageUrl={team.imageUrl} link={team.link} />
      ))}
    </div>
  );
};
export default CommunityBoard;