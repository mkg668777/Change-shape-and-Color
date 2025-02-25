let shapesContainer = document.querySelector(".shapes");
let newshape = document.querySelector(".circle");

//create  an array of shapes & colors"
let colorArr = ["red" ,"blue","green","yellow", "purple","pink","black","brown","orange","salmon","wheat","silver","orchid","indigo","tan","olive","aqua"];
let colorbtn = document.querySelector("#color-btn");

let shapesArr = [ "circle","square", "triangle" , "diamond" , "rectangle", "parallelogram" , "cross" , "leftarrow", "rightarrow" , "squared-sq" ];
let shapebtn = document.querySelector("#shape-btn");

function getColor(){
    let color = Math.floor(Math.random() * colorArr.length);
    return colorArr[color];
}
colorbtn.addEventListener("click",(e)=>{
 shapesContainer.style.backgroundColor = getColor();
});

function getShapes(){
    let shape = Math.floor(Math.random() * shapesArr.length);
    return shapesArr[shape];
}
shapebtn.addEventListener("click",(e) =>{
    newshape.classList = getShapes();
})
