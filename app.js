const btn = document.getElementById("generateButton");
const area = document.getElementById("grid");
btn.onclick = () =>{
    let nogfs = document.getElementById("textBox").value;
    console.log(nogfs);
    let i;
    for(i=1;i<=nogfs;i++){
        let box=document.createElement("div");
        area.append(box);
        box.innerHTML=i;
        box.style.textAlign="center";
        box.style.width="4vw";
        box.style.height="4vh";
        box.style.border="2px solid black";
        box.style.margin="2vh 2vh";
    }
    btn.hidden=true;
}
