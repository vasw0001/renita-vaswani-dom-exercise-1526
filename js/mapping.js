//Task 1

//Access HTML element with id tag-line.
let tagline = document.getElementById('tag-line');
console.log(tagline);

//Access all headings that belong to div with the class name bg-main-content.
let headings = document.querySelectorAll('.bg-main-content h2');

//Create the variable collect and assign it with content of tag-line.
let collect = tagline.innerHTML + "\n -------------------------------------- \n";
console.log(collect);


//Loop through the array of headings and append the content of each heading to variable collect
for(let i=0; i < headings.length; i++)
    {
        collect+= headings[i].innerHTML + "\n";
    }

//After the loop, use alert to print collect
alert(collect);




//Task 2

//Collect all divs with the class name "box" in node list.
let nodelist = document.querySelectorAll('.bg-main-content .box');
console.log(nodelist);

//Create variable collect and assign it with the heading and body-text that belong to the 13th div.
//Access 13th div with class name box that belongs to div with the class name bg-main-content.
let collect2 = nodelist[12].querySelector('h2').innerHTML + "\n -------------------------------------- \n";
console.log(collect2);

let paragraph = nodelist[12].querySelectorAll('p');
console.log(paragraph);
for(let i=0; i<paragraph.length; i++)
    {
        collect2+= "\n"+paragraph[i].innerHTML+"\n";
    }


//Print collect.
alert(collect2);


