type MissionCardProps = {
  name:string,
  year: string,
  country: string,
  destination: string,
};

function MissionCard({ name, year, country, destination }: MissionCardProps) {
  return (
    <div data-testid="mission-card">
      <strong data-testid="mission-name">{name}</strong>
      <p data-testid="mission-year">{year}</p>
      <p data-testid="mission-country">{country}</p>
      <p data-testid="mission-destination">{destination}</p>
    </div>
  );
}

export default MissionCard;
