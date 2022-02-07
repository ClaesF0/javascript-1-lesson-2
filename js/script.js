// We code it together

// 1. Select heading h2
/*const headingByClass = document.querySelector(".heading2");
console.log(heading2);*/
// 2. Select element with class .heading2

// 3. Select element with id #list using querySelector
const list = document.querySelector("#list");
console.dir(list);


// 4. Select element with id #list using getElementById
const list2 = document.getElementById("#list");
console.log(list2);

// 5. Select single li
const listItem = document.querySelector("li");
console.log(listItem);

// 6.
//  a. Select Multiple li's
const listItems = document.querySelectorAll("li");
console.log(listItems);
//  b. Loop on the list items

for (let i = 0; i < listItems.length; i++){
    console.log(listItems[i].innerText); //displays every item
}

// 7.
    // a. select h1 element
    const heading1 = document.querySelector("h1");
    console.log(heading1);
    // b. Change the color of that h1 to be purple
    heading1.style.color = "chartreuse";

    // c. Change the border to be 1px solid green
    heading1.style.border = "5px solid green";
    // d. Change background colour to be light gray
    heading1.style.backgroundColor = "lightGray";
    // e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )
    heading1.style.padding = "1em";











    //1. i want to select a div element
    const myDiv = document.querySelector("div");
    //2. see if it has any class name
    console.dir(myDiv);
    //3. add a class to this div element
    myDiv.classList.add("container");
    console.dir(myDiv);
    // myDiv.className = "hesham";
    console.log(myDiv.className);
    //4. see if has another class name name
    //5. add another class to the div
    myDiv.classList.add("second-class");
    //myDiv.className = "second-class"
    console.dir(myDiv);
    //so in total i have two class names on the div



    //1. Select the h1 and change the innerText
const pageHeading = document.querySelector("h1");
pageHeading.innerText = "Hesh"
    //2. loop through all the li element and change the innerText value to be changed
    const allTheListItems = document.querySelectorAll("li");
    for (let i = 0; i < allTheListItems.length; i++){
        allTheListItems[i].innerText = allTheListItems[i].innerText + " Changed";
    }

    //3.change the innerHTML of the h1 to be updated using innerHTML
    const pageHeading2 = document.querySelector("h1");
    pageHeading2.innerHTML = "updated Hesham";


    //4.add some HTML to the div >> add <p><b>Bold text</b> not bold text</p>
    const someContainer = document.querySelector("div");
    someContainer.innerHTML = `<p>
                                        <b>Bold text </b>not bold text
                                        </p>;`

    //5.select the UL
    const list3 = document.querySelector("ul");
    //  b. get the existing HTML inside the ul element and assign it to a variable
    const existingHTML = list3.innerHTML;
    //  c. create the new li HTML 
    const newHTMLli = `<li>Hello I am a new item hamster</li>`;
    //  d. set the uls new HTML to the existing HTML plus the new HTML
    list3.innerHTML += newHTMLli;
