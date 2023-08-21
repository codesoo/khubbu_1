



let arr = ["I Love You Khubbu ❤️", "Want To Kiss You 💋", "I am horny for you 🫦", "want to hug you 🤗", "you're the best khubbu 🤩", 
"I am sick, need vitamin Khubbu 🤕", "Ae tu chup hoja 😁","aati kya haweli par 🥺","mat kar na yaaar 😩"];
let special = "I Love You Khubbu ❤️❤️";
let len = arr.length;

const words_push = () => {
    let input = document.getElementById("number_of_words");
    let n = input.value;
    for(let i=0;i<n;i++){
        let store = document.querySelector(".container");
        let ind = Math.floor(Math.random()*(len-1));
        let para = document.createElement("p");
        para.innerText = arr[ind];
        para.setAttribute("class","new_para");
        store.append(para);
    }
};

const feeling_lucky = () => {
    let input = document.getElementById("number_of_words");
    let n = input.value;
    for(let i=0;i<n;i++){
        let store = document.querySelector(".container");
        let para = document.createElement("p");
        para.innerText = special;
        para.setAttribute("class","new_para");
        store.append(para);
    }
};