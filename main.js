// let a = 10;
// let b = 20;
// console.log(b>=a)
// console.log(b)
// console.log(b ** a)
// console.log(10* 20)
// let k  = 'Ulug"bek'
// let l =  k === 'Ulug"bek' ? 'Tug"ri': "Xato"
// console.log(l)
// console.log("Azamat" - "A")
// let age 
// console.log(age)
// let son = 360 > 200
// console.log(son)
// let sonn = son === 360 > 200 ? "Ha bu 360": 'Xato'
// console.log(sonn)
// // alert("Ha bu son ikkiga bulinadi")
// // prompt("Son kiriting")
// // confirm("Tugri")

// // let ages = prompt("Yoshingizni kiriting")
// // let tekshir = ages>=18 ? "Kirish mumkin": 'Mumkin emas'
// // confirm(tekshir) 

// let nul = -10
// let usha = -nul
// console.log(usha) 
// console.log("10" * "50")
// console.log("10" ** "20")
// let besh  = 5
// let p = "5"
// console.log(besh * p)

// let ix = 8
// ix++
// console.log(ix)
// ix === increment ++ (+1) -- decrement(-1)
window.addEventListener("load", () => {
    let root  =document.querySelector("#root")
    let input = document.createElement("input")
    input.placeholder = 'Ismingizni kiriting'
    input.id = 'messi'
    let btn = document.createElement("button")
    btn.appendChild(document.createTextNode("Button"))

    btn.id = 'bos'
    root.appendChild(input)
    root.appendChild(btn)
   
    document.getElementById('bos').addEventListener("click", (e) => {
        e.preventDefault()
        let input = document.getElementById('messi').value
        console.log(input)
        if(input === 'Shavkat Mirziyoyev'){
            console.log("Ishladi")
            let image = 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Shavkat_Mirziyoyev.jpg'
            let images = document.createElement("img")
            images.src = image 
            root.appendChild(images)
            images.style.width = '40%'
            let p = document.createElement("p")
            p.appendChild(document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem unde quia veritatis animi dicta, id fugit minima commodi adipisci quo autem excepturi dolorum, delectus libero soluta, illum ratione ex praesentium molestias eius porro eaque at aliquid! Quo deleniti pariatur omnis tenetur ad eaque, ratione voluptatum minus accusamus soluta doloribus commodi quos enim perspiciatis illum culpa nemo dolore nihil est error, eius possimus sit blanditiis? Doloremque esse quidem voluptatem laborum, nostrum in velit voluptatum incidunt optio rem, atque quaerat. Inventore natus quis quasi magnam, dicta maxime vero libero id asperiores, consectetur aspernatur. Suscipit ab minus ipsa eum odio exercitationem tenetur!'))
            root.appendChild(p)
        }
    })
})
