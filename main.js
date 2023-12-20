// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘


function isAdmin(obj){
   if(obj['userRole'] === "ADMIN"){
    return true
}else{
    return false
}
}
//returns boolean --> if statements

//another option b/c it will return true: return obj['userRole] === 'ADMIN'
//-----------------------------------------------------------------------------

function getEmail(obj){
    return obj.firstName[0].toLowerCase() + obj.lastName.toLowerCase() + ".prsvr@gmail.com"
}

//---------------------------------------------------------------------------------

function getPlaylistLength(obj){
    return obj['songs'].length 
}

//---------------------------------------------------------------------------------

function getHardestHomework(obj){
    if(obj.length === 0){
        return ""
    }

    let homework = obj[0].name;
    let scoreAvg = obj[0].averageScore
    for(let i = 0; i < obj.length; i++){
        let complete = obj[i]
        complete.averageScore
        if(complete.averageScore < scoreAvg){
            homework = complete.name
            scoreAvg = complete.averageScore
        }
    }return homework
}

//OVERVIEW WITH KYLE
//function getHardestHomeworl(arrOfHomework){
   
    //check if empty array, return empty string 
    //if(arrOfHomework.length = 0){
        //return ''      //-->must return empty string
    // }

//lowest score tracker
    //let lowestScore = arrOfHomework[0].averageScore
    //let lowestName = arrOfHomework[0].name

    //loop through array
    // for(let assignmentObj of arrOfHomework){
    //     if(assignmentObj.averageScore < lowestScore){
    //         lowestScore = assignmentObj.averageScore //saves new lowest score
    //         lowestName = assignmentObj.name
    //     }
    // }
    //if an index is less than current lowest, save it

        //return lowestScore
    //return current lowest
// }

//JUST SAVING OBJ TO BANK (DIFFERENT WAY TO CODE)
// let lowestGrade = arrOfHomework[0]
// for(let assignmentObj of arrOfHomework){
    //     if(assignmentObj.averageScore < lowestGrade.averageScore){
    //         lowestScore = assignmentObj //saves new lowest score
    //      
    //     } return lowestGrade.name

//-------------------------------------------------------------------

function createPhonebook(name, number){
    let phonebook = {}
    for(let i = 0; i < name.length; i++){
       phonebook[name[i]] = number[i]
    }
    return phonebook
}

//creating object from arrays
//pull values from array to create object

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};