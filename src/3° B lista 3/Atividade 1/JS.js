const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
let curso = ["TPA" , "APS" , "FI" , "DD" , "BD"]
let tudo  = ["LPL" , "Inglês" , "LIC" , "Artes" , "EACNT" , "EAMT" , "Matemática" , "EMP" , "EDF" , "Química" , "Física" , "História"]



curso.map((el)=>{
    let p = document.createElement("div")
    p.innerHTML = el
    caixa1.appendChild(p)
})



tudo.map((el)=>{
    let q = document.createElement("div")
    q.innerHTML = el
    caixa2.appendChild(q)
})

