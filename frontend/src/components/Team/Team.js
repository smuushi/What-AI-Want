import "./team.css"

const Team =()=>{
    //will have 6 props

    return(
        <>
            <h1>Team</h1>
        <div className="team_wrapper">
            <TeamMemberCard person={"sara"}/>
            <TeamMemberCard person={"kaiter"}/>
            <TeamMemberCard person={"tim"}/>
            <TeamMemberCard person={"michael"}/>

        </div>
        </>
    )
}


export default Team


///

const TeamMemberCard =(props)=>{

    let gravatar;
    let description;

    switch(props.person) {
        case "sara":
            gravatar = "https://secure.gravatar.com/avatar/ef5b46abccd6f6789bb2672bc91beada?secure=true&size=300"
            description = "Backend/Flex";
            break;
        case "kaiter":
            gravatar = "https://secure.gravatar.com/avatar/1ff452cb3a2b20a3189c8879a6233e76?secure=true&size=300"
            description = "Frontend Lead";    
            break;
        case "tim":
            gravatar = "https://secure.gravatar.com/avatar/69fcea611c648b1f4f2d78e093a9b8e0?secure=true&size=300"
            description = "Frontend/Flex";
            break;
        case "michael":
            gravatar = "https://secure.gravatar.com/avatar/d62cdb23deccdd7d4c5f019491a3b3b5?secure=true&size=300"
            description = "Backend Lead"
            break;
    }

    return(
        <div className="teamMemberCard_wrapper">
            <div className="teamMember_image">
                <img src={gravatar}></img>
            </div>
            <div className="teamMember_">
                <p>{description}</p>
            </div>
        </div>
    )
}
