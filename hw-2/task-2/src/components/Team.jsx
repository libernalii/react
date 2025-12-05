const Team = ({ name, description, color, children }) => {
  return (
    <div className="team-card" style={{ borderLeftColor: color }}>
      <h2 className="team-title">{name}</h2>

      {description && (
        <p className="team-description">{description}</p>
      )}

      <div className="team-members">
        {children}
      </div>
    </div>
  );
};

export default Team;
