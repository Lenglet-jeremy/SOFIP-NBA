import { useState } from "react";
import styles from "./Team.module.scss";
import DisplayConf from "./DisplayConf";

export default function Team({ person, teams }) {
  //   console.log({ person });
  //   console.log({ teams });

  const [licensed, setLicensed] = useState(false);
  const [welcome, setWelcome] = useState("Vous devez être connecté")
  const [text, setText] = useState("Log In")

  function logged (){
    {text === "Log In" ? setText("Log Out") : setText("Log In")}
    {welcome === `Welcome ${person.name}` ? setWelcome("") : setWelcome(`Welcome ${person.name}`)}
    {licensed === false ? setLicensed(true) : setLicensed(false)}
  }

  return (
    <div className="d-flex flex-column align-items-center jc-start mt-30"
         style={{ width: "100%" }}
    >

        <div className={`d-flex flex-row ${styles.presentation}`}>
            <h2> {welcome} </h2>
            <button className={`${styles.logInOut}`} 
                    onClick={logged} 
            >
                    {text}
            </button>
        </div>
      

      {licensed ? (
        <>
        <DisplayConf teams={teams}/>
        </>
      ) : (
        <p className="text-error">Vous devez être connecté</p>
      )}

    </div>
  );
}
