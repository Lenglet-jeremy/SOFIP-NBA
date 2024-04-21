import "./DisplayConf.css"

export default function DisplayConf({team}){
    return (

        <div class="OneTeam">
            <p>CITY : <span>{team.name}</span></p>
            <p>NAME : <span>{team.club}</span></p>
            <img src={team.logo} alt="" />
        </div>
    )
}