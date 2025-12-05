import teams from "../mocks/data-arrays"
import Team from "./Team"
import Member from "./Member"

const TeamList = () => {
    return (
        <div className="team-list">
            {teams.map(team => (
                <Team
                    key={team.id}
                    name={team.name}
                    description={team.description}
                    color={team.color}
                >
                    {team.members.map(member => (
                        <Member
                            key={member.id}
                            name={member.name}
                            role={member.role}
                            avatar={member.avatar}
                            skills={member.skills}
                        />
                    ))}
                </Team>
            ))}
        </div>
    )
}

export default TeamList
