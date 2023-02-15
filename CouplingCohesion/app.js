var student = {
  name : "",
  type: "student"
};
// this function fired up when page is loaded
document.addEventListener('DOMContentLoaded', contentLoaded);
function contentLoaded(event){
  document.getElementById('name').addEventListener("keyup",keyUp);
}

function keyUp(event){
  calculateNumericOutput();
}

function calculateNumericOutput(){
  student.name = document.getElementById('name').value;
  var totalNameValue = 0;

  for(var i = 0; i < student.name.length; i++){
    totalNameValue += student.name.charCodeAt(i);
    console.log(student.name.charCodeAt(i));
  }

  var output = "Total Numeric value of person's name is "+totalNameValue;
  document.getElementById('output').innerText = output;
}
