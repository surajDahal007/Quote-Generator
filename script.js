const science = [
    "“Everything is theoretically impossible until it is done.” – Robert A. Heinlein",
    "“You can’t blame gravity for falling in love.” – Albert Einstein",
    "“Science is not everything, but science is very beautiful.” – J. Robert Oppenheimer",
    "“An expert is a person who has made all the mistakes that can be made in a very narrow field.” – Neils Bohr"
];

const philosophy = [
    "“We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.” – Plato",
    "“I cannot teach anybody anything. I can only make them think.” – Socrates",
    "“There is no great genius without some touch of madness.” – Aristotle",
    "“It does not matter how slowly you go as long as you do not stop.” – Confucius"
];

const politics = [
    "“If voting changed anything, they'd make it illegal.” – Emma Goldman",
    "“One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors.” – Plato",
    "“Democracy is the government of the people, by the people and for the people” – Abraham Lincoln",
    "“The ballot is stronger than the bullet.” – Abraham Lincoln"
];

//default values
var category = science;

var index=0;
var mainDiv = document.getElementById("main");
mainDiv.textContent=`${category[index]}`;

let isDark = false;
var img = document.getElementById("img1");


const theme = ()=>{
    isDark = !isDark;
    
    if(isDark){
        img.src="sun.jpg";
        document.body.style.color="white";
        document.body.style.background="#36393F";

        mainDiv.style.background="#313232"
        mainDiv.style.border="2px solid white";
    }
    else{
        img.src="halfmoon.jpg";
        document.body.style.color="black";
        document.body.style.background="rgb(184, 229, 247)";

        mainDiv.style.background="white";
    }
}

const handleScience = ()=>{
    category = science;
    mainDiv.textContent=`${category[index]}`;
} 

const handlePhilosophy = ()=> {
    category = philosophy;
    mainDiv.textContent=`${category[index]}`;
}

const handlePolitics = ()=> {
    category = politics;
    mainDiv.textContent=`${category[index]}`;
}

const previous = ()=>{
    index--;
    if(index < 0){
        index =+ 3;
    }
    mainDiv.textContent=`${category[index]}`;
}

const next = ()=>{
    index++;
    if(index === 4){
        index = index%4;
    }
    mainDiv.textContent=`${category[index]}`;
}

const random = ()=>{
    index = Math.floor(Math.random() * 4)
    mainDiv.textContent=`${category[index]}`;
}

const handleInput = (a)=>{
    // type conversion from string to number
    a = +a;
    mainDiv.style.fontSize = `${a}px`;
}