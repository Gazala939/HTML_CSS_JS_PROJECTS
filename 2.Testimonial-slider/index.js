const images = [
    {
        name: "Zara Ahemad",

        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",

        text: "This is simply unbelievable! I would be lost without Apple.The Very best. Not ale to tell you how happy i am with Apple"
    },
    {
        name: "Gazala Jamadar",

        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",

        text:"Allah does not burden a soul beyond that it can bear,Your Lord has not abandoned you, nor has He detested you."

    },

    {
        name: "Ali Shaikh",

        photoUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",

        text: "Indeed, the most noble of you in the sight of Allah is the most righteous of you.” — Surah Al-Hujurat 49:13"
    }

];

const image = document.querySelector("img")

const textEl = document.querySelector(".text")

const usernameEl = document.querySelector(".username")

let index = 0;

function updateImages(){
    const{name,photoUrl,text} = images[index]

    image.src=photoUrl;

    textEl.innerText = text;

    usernameEl.innerText = name;

    index++

    if(index === images.length){
        index = 0
    }

    setTimeout(()=>{
        updateImages()
    },4000);
}

updateImages()