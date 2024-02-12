function getFormvalue(e) {
    
    e.preventDefault(); // Prevent default form submission

    // Access input values
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;

    // Perform action with input values (e.g., display them)
    alert(`${firstName} ${lastName}`);
}


