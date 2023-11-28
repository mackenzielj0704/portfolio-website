import "./background.css"

function Background () {

    let background = document.createElement("div")
    background.className = "background"
    document.body.append(background)

    for (let i = 1; i < 3201; i++) {
        let div = document.createElement("div")
            div.style.height = "2.5%"
            div.style.width = "1.25%"
            div.style.backgroundColor = "rgb(96, 120, 234)"
        background.append(div)
        div.addEventListener("mouseover",() => {
            if (div.style.backgroundColor === "rgb(23, 234, 217)") {
                div.style.backgroundColor = "rgb(96, 120, 234)"
            } else{
                div.style.backgroundColor = "rgb(23, 234, 217)"
            }
        })
    }

    return 

}

export default Background