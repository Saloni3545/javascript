//IIT2024091


//task 1
// 1.study different inbuilt functions of JS like querySelector, getElementID,getElementmyname
// implement every function and make a website


const changeText = () => {
    document.getElementById("main-heading").innerText = "Text Changed!";
};

const highlightText = () => {
    document.querySelector(".description").classList.toggle("highlight");
};

const showAlert = () => {
    let paragraph = document.getElementsByTagName("p")[0];
    alert("Paragraph says: " + paragraph.innerText);
};