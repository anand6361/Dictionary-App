let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let inp = document.querySelector("input");
let btn = document.querySelector("button");

async function getData(entry){
    let inp = document.querySelector("input");
    let submit = await fetch(url + entry);
    let data = await submit.json();
    console.log(data.title);
    if(data.title == "No Definitions Found"){
        document.querySelector(".word").innerHTML = inp.value; 
    document.querySelector(".mean1").innerHTML = "No Definition Found";
    }else{
        console.log(data);
        console.log(data[0].meanings[0].definitions[0].definition);
        document.querySelector(".word").innerHTML = inp.value; 
        document.querySelector(".mean1").innerHTML = data[0].meanings[0].definitions[0].definition;
    }
    
}

btn.addEventListener("click",()=>{
    getData(inp.value);
    document.querySelector(".detail").style.display = "block";
})