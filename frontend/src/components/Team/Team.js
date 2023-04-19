import "./team.css"

const Team =()=>{
    //will have 6 props

    return(
        <div className="team_wrapper">
            <h1>Team</h1>
            <TeamMemberCard/>
        </div>
    )
}


export default Team


///

const TeamMemberCard =()=>{
    return(
        <div className="teamMemberCard_wrapper">
            <div className="teamMember_image"></div>
            <div className="teamMember_"></div>
        </div>
    )
}
