const toggleButton = document.getElementsByClassName("toggle-button")[0];
      const navbarLinks = document.getElementsByClassName("navbar-links")[0];

      toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
      });

      (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()      

      const btnScrollToTop = document.querySelector("#arrow-up");
      btnScrollToTop.addEventListener("click",function(){
        window.scrollTo({
          top:0,
          left:0,
          behavior:"smooth"
        })
      })