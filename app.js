function setPlayer(event) {
    event.preventDefault()
    let form = event.target
    document.getElementById("charLinkArea").innerHTML = `<img src="https://robohash.org/${form.name.value}?set=set2" alt="Character" class="img-fluid">`
    form.reset
}

let index = 0
let maxDepth = 800
let depth = 0
let hits = 0


let target = []


let dirt = {
    img: "https://i.unu.edu/media/ourworld.unu.edu-en/article/8634/The-Surprising-Healing-Qualities-of-Dirt.jpg",
    ground_type: "Dirt"
}

let stone = {
    img: "https://besthqwallpapers.com/Uploads/8-3-2020/124219/thumb2-stone-texture-gray-stone-background-natural-stone-texture-rock-texture-stone.jpg",
    ground_type: "Stone"
}

let coal = {
    img: "https://thumbs.dreamstime.com/b/black-coals-texture-top-view-coal-mining-coal-mining-development-mine-black-coals-texture-top-view-coal-mining-coal-mining-159733440.jpg",
    ground_type: "Coal"
}

let silicon =  {
    img: "https://miro.medium.com/max/600/1*Sk4G5ALl3jVzZE06U8dyCQ.jpeg",
    ground_type: "Silicon"
}

target.push(dirt)
target.push(stone)
target.push(coal)
target.push(silicon)


function shovel() {
    switch(index) {
        case 0:
            depth += 20
            break;
        case 1:
            depth += 10
            break;
        case 2:
            depth += 10
            break;
        case 3:
            depth += 10
            break;
        default:
    }
    document.getElementById("toolImageArea").innerHTML = `<img src="shovel.png" alt="Shovel" class="img-fluid hover-rotate-90"></img>`
    hits++
    update()
}

function pickaxe() {
    switch(index) {
        case 0:
            depth += 10
            break;
        case 1:
            depth += 20
            break;
        case 2:
            depth += 20
            break;
        case 3:
            depth += 10
            break;
        default:
    }
    document.getElementById("toolImageArea").innerHTML = `<img src="pickaxe.png" alt="Pickaxe" class="img-fluid hover-rotate-neg-90"></img>`
    hits++
    update()
}

function drill() {
    switch(index) {
        case 0:
            depth += 10
            break;
        case 1:
            depth += 10
            break;
        case 2:
            depth += 10
            break;
        case 3:
            depth += 20
            break;
        default:
    }
    document.getElementById("toolImageArea").innerHTML = `<img src="drill.png" alt="Drill" class="img-fluid shake"></img>`
    hits++
    update()
}

function special_1() {
    index = 1
    let img_template = `
        <img src="${target[index].img}" alt="Stone" class="img-fluid rounded-circle">`
    document.getElementById("groundImageArea").innerHTML = img_template
}


function special_2() {
    index = 2
    let img_template = `
        <img src="${target[index].img}" alt="Coal" class="img-fluid rounded-circle">`
    document.getElementById("groundImageArea").innerHTML = img_template
}


function special_3() {
    index = 3
    let img_template = `
        <img src="${target[index].img}" alt="Silicon" class="img-fluid rounded-circle">`
    document.getElementById("groundImageArea").innerHTML = img_template
}

function update() {
    checkDepth()
    document.getElementById("depthDugArea").innerText = "Depth Dug: " + depth
    document.getElementById("actionsUsedArea").innerText = "Actions Used: " + hits
    document.getElementById("groundTypeArea").innerText = "Ground Type: " + target[index].ground_type
}

function checkDepth() {
    if (depth < 200) {
        index = 0
    } else if (depth >= 200 && depth < 400 ) {
        special_1()
    } else if (depth >= 400 && depth < 600 ) {
        special_2()
    } else if (depth >= 600 && depth < 800) {
        special_3()
    } else {
        alert("You found the mole people.")
    }
}