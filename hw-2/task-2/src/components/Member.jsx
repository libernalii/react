const Member = ({ name, role, avatar, skills }) => {
  return (
    <div className="member">
      <img src={avatar} alt={name} className="member-avatar" />

      <div>
        <div className="member-name">{name}</div>
        <div className="member-role">{role}</div>

        {skills?.length > 0 && (
          <div className="member-skills">
            Skills: {skills.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
};

export default Member;
