let btn = document.getElementById("button")


btn.addEventListener("click", function (e){
  e.preventDefault()
 let naira = document.getElementById("input1").value
 let dollars = document.getElementById("input2")

 dollars.value = Math.round(naira / 700)
})