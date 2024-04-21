import "./Header.css"

export default function Header({changeView}){
    return(
        <div class="HeaderArea">
            <div class="Header">
                <div class="Title">
                    <h1>NBA</h1>
                </div>
                <div class="Conferences">
                    <button onClick={() => changeView("West")}>West</button>
                    <button onClick={() => changeView("East")}>East</button>
                    <button onClick={() => changeView("All")}>All</button>
                </div>
            </div>
        </div>
        
    )
}