//alert("Welcome to Khristine's portfolio"); 

//let cardDjango = document.getElementById("card-django")
//cardDjango.innerHTML = "<h1> I am changed</h1>";

//cardDjango.addEventListener("click" ,function(){
   // cardDjango.innerHTML = "<h1>I am changed!!!</h1>"
//});


// let myButton = document.getElementById("my-button")

// myButton.addEventListener("mouseover" ,e=>{

//     myButton.innerHTML = " click me";

// });

// myButton.addEventListener("mouseout" ,e=>{

//     myButton.innerHTML = " my resume";

// });

$(document).ready(function(){
    let modalApplicationForm = $('#application-modal');

    modalApplicationForm.show();

    

    let modalBtnClosed = $(".btn-close");
    modalBtnClosed.on('click' ,(e)=>{
        modalApplicationForm.hide();
    });

    let forms = $('form');
    forms.on("submit" ,function(e){
        e.preventDefault();
      //  alert("Form has been submitted")
      let nameInput= $('#input-name').val();
       let emailInput = $('#input-email').val();
       let numberInput = $('#input-number').val();

     // alert(nameInput);

      if(nameInput.length===0){
        $("#name-error").addClass('d-block');
        $("#name-error").removeClass('d-none');
      }
      else{
        $("#name-error").addClass('d-none');
        $("#name-error").removeClass('d-block');
      }

      if(emailInput.length===0){
        $("#email-error").addClass('d-block');
        $("#email-error").removeClass('d-none');
      }
      else{
        $("#email-error").addClass('d-none');
        $("#email-error").removeClass('d-block');
      }

      if(numberInput.length===0){
        $("#number-error").addClass('d-block');
        $("#number-error").removeClass('d-none');
      }
      else{
        $("#number-error").addClass('d-none');
        $("#number-error").removeClass('d-block');
      }




      
      });

      let myImage = $('#nancie-image');
      let myImageSrc = myImage.attr("src");

      myImage.on("mouseover" , function(){
        $(this).attr("src" ,"nancie2.jpg")
      });

      myImage.on("mouseout" ,function(){

        $(this).attr("src" ,myImageSrc);
      });
});


// $(document).ready(function(){
//     $(".lead").delay("slow").fadeIn();
//     $(".lead2").delay(500).fadeIn();
// });

// let cardDjango = $("#card-django");
// cardDjango.click(function(){
//     $(this).html("<h1>I am changed</h1");
//     alert($(this).html());

// });

// let cardHtml = $("#card-html");
// cardHtml.on("click" ,function(){
//     $(this).html("<h1> Html Unchained</h1>")

// });





