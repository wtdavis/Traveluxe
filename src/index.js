import { createRoot, RouterProvider } from "react-router-dom";

function init() {

    function App () {
        return (
            <>
                <h1>React is kinda working!</h1>
            </>
        )
    }


    let div = document.creatElement("div")
    div.setAttribute("id", "root")
    document.appendChild(div)

    let root = createRoot(document.querySelector("#root"))
    root.render(
        <App/>
    )
    


}

document.addEventListener("DOMContentLoaded", init())