// Click button 春 : to display image , title and change color to green for title 
function spring() {
    document.getElementById("season").innerHTML = "春";
    document.getElementById('image').src='img/spring.jpeg';
    document.getElementById('title').style.color="green";
    
}

// Click button 夏 : to display image , title and change color to blue for title 
function summer() {
    document.getElementById("season").innerHTML = "夏";
    document.getElementById('image').src='img/summer.jpeg';
    document.getElementById('title').style.color="blue";
}

// Click button 秋 : to display image , title and change color to red for title
function autumn() {
    document.getElementById("season").innerHTML = "秋";
    document.getElementById('image').src='img/autumn.jpeg';
    document.getElementById('title').style.color="red";
}

// Click button 冬 : to display image , title and change color to gray for title
function winter() {
    document.getElementById("season").innerHTML = "冬";
    document.getElementById('image').src='img/winter.jpeg';
    document.getElementById('title').style.color="gray";
}