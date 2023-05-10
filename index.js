var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();


  var submittedDataDiv = document.getElementById("submitted-data");
  submittedDataDiv.innerHTML = "Name: " + this.elements["name"].value + "<br>" +
                                "Email: " + this.elements["email"].value + "<br>" +
                                "Inquiries: " + this.elements["message"].value;

  var name = this.elements["name"].value;
  var email = this.elements["email"].value;
  var inquiries = this.elements["message"].value;
  alert("Name: " + name + "\nEmail: " + email + "\nInquiries: " + inquiries);
  alert("Your inquiry has been submitted.")
});