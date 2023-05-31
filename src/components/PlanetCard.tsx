import React from 'react';

type PlanetName = {
  planetName: string;
  planetImage: string;
};

function PlanetCard({ planetName, planetImage }: PlanetName) {
  return (
    <div data-testid="planet-card">
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      <p data-testid="planet-name">{planetName}</p>
    </div>
  );
}

export default PlanetCard;
