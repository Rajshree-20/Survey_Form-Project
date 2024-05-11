function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var role = document.getElementById("role").value;
    var recommendation = document.querySelector('input[name="recommendation"]:checked');
    var favoriteFeature = document.getElementById("favorite-feature").value;
    var improvement = document.querySelectorAll('input[name="improvement[]"]:checked').length;
  
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
    if (email === "") {
      alert("Please enter your email.");
      return false;
    }
    if (role === "") {
      alert("Please select your current role.");
      return false;
    }
    if (!recommendation) {
      alert("Please select if you would recommend the college.");
      return false;
    }
    if (favoriteFeature === "") {
      alert("Please select your favorite feature of CGU.");
      return false;
    }
    if (improvement === 0) {
      alert("Please select at least one improvement option.");
      return false;
    }
    return true;
  }
  