function getFormvalue(e) {
    
    e.preventDefault(); // Prevent default form submission

    // Access input values
    var firstName = e.target.fname.value;
    var lastName = e.target.lname.value;

    // Perform action with input values (e.g., display them)
    alert(`${firstName} ${lastName}`);
}


