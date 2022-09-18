function sendMail() {
    var params = {
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_gmzsuwe";
    const templateID = "template_evzdp95";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }


  // navbar closed 

  $(document).ready(function () {
    $(document).click(
        function (event) {
            var target = $(event.target);
            var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
            if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
                $("button.navbar-toggler").click();
            }
        }
    );
});