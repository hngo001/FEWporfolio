document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.getElementById('menuToggle');
    const menu= document.getElementById('menu');
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
function validate(form_id, email) {
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var address = document.forms[form_id].elements[email].ariaValueMax;
    if(reg.test(address) == false) {
        alert('Invalid Email Address');
    }
  }