let s = document.getElementsByClassName("Student");
for(let i = 0; i< s.length; i++){
    let j = s[i];
    j.innerHTML = j.innerHTML+"."
    j.style.color = "green";
    j.style.background = "yellow";
    j.style.padding = "5px"
    j.addEventListener("click", (e) => {clicked(j.innerHTML)})
    j.addEventListener("mouseover", (e) => {j.style.background = "blue"})
    j.addEventListener("onmousemove", (e) => {j.style.background = "yellow"})
}

function clicked(e){
    // console.log(e)
    window.alert(e)
}
