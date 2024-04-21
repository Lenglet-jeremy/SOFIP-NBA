import { useState } from "react";
import "./Teams.css"
import DisplayConf from "./DisplayConf";

export default function Teams({ teams, person , view}) {

    const [logged, setLogged] = useState(true);
    const [logText, setLogText] = useState("Log Out")
    const [welcome, setWelcome] = useState(`Welcome ${person.personName}`)

    function log(){
        {logged ? setLogged(false) : setLogged(true)}

        {logText === `Log Out` ? 
                      setLogText(`Log In`) :
                      setLogText(`Log Out`)}

        // {licensed ? setLicensed(false) : setLicensed(true)}

        {welcome === `Welcome ${person.personName}` ? 
                     setWelcome(`Vous devez être connecté`) :
                     setWelcome(`Welcome ${person.personName}`)}
    }

    return (
    <>
        {/* WELCOME */}
        <div class="WelcomeArea">
            <div class="Welcome">
                <h2>{`${welcome}`}</h2>
                <button onClick={log}>{logText}</button>
            </div>
        </div>
        {/* /WELCOME */}
        


        {/* DISPLAYCONF */}
        {view !== "All" && logged && person.personAge >= 18 && person.licensed  ? ( 
            
            <h2 class="Conf">Conference {view}</h2>
            ) : ( 
            <h2></h2> ) }

        <div class="TeamsArea">
            <div class="AllTeam">
                {logged && person.licensed && person.personAge >= 18 && view === "All" ? ( 
                    teams
                    .map((team) => (
                        <DisplayConf key={team.id} team={team} />
                        
                    )) ) : ( <h2></h2> )}
            </div>

            <div class="WestEastTeam">
                {logged && person.licensed && person.personAge >= 18 && view !== "All" ? (
                teams
                .filter((team) => team.conference === view)
                .map((team) => ( 
                    
                    <DisplayConf key={team.id} team={team} />
                    
                ))
                ):(
                    <h3>Vous devez être connecté, licencié et majeur</h3> )}
            </div>
            {/* /DISPLAYCONF */}

        </div>
    
    </>
    );
        }
