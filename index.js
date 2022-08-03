let display = document.getElementById("display");
async function next(){
    display.innerText =" ";   
    let content =  " ";
    const res = await fetch('https://api.chucknorris.io/jokes/random')

    content = await res.json();
  
    

    let joke = document.createTextNode(content.value);

    display.appendChild(joke);
    console.log(content.value);

}
