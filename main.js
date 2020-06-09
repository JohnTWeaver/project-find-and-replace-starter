// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.{
const rowElements = document.querySelectorAll(".row")
rowarray = Array.from(rowElements)



// }
// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
let cellarray = []
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE
//my code

replaceAllButton.addEventListener('click', function () {
    let input = findInput.value;
    let replace = replaceInput.value;
    //    console.log(input);
    //    console.log(replace);


    for (let rowindex = 0; rowindex < rowElements.length; rowindex++) {
        // console.log(getCellElements(rowElements[rowindex]))
        let cellelem = getCellElements(rowElements[rowindex]);
        // console.log(rowarray[rowindex])
        //   console.log(getCellElements(rowElements[rowindex]).innerHTML)
        // console.log(getCellElements(rowElements[rowindex]).length)
        for (let cellindex = 0; cellindex < cellelem.length; cellindex++) {
            //console.log(cellarray.push(cellindex))
            // console.log(cellelem[cellindex].innerHTML)
            if (cellelem[cellindex].innerHTML.includes(input)) {
                console.log(cellelem[cellindex].innerHTML)
                //let NewHTMl = cellelem[cellindex].replace(input,replace)
                let NewHTMl = cellelem[cellindex].innerHTML.replace(input,replace)
                cellelem[cellindex].innerHTML = NewHTMl;
            }


        }
    }

})

//  TY. one more questions for today.What properties does a  node list lose when it becomes an array using array.from() so would i even need a loop if i used array.from()

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
