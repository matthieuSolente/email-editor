jQuery(document).ready(function($) {

 /***********************************************/
 /* PAGES : TOGGLE DARK LIGHT MODE */
 /***********************************************/
 $("#dark").click(function(e){
  e.preventDefault();
  $('body').toggleClass('dark-mode');
  window.location.hash = this.hash;
})  

 /***********************************************/
 /* TEMPLATE PAGE : CHARGEMENT DU TEMPLATE DANS L IFRAME */
 /***********************************************/
 var hash = window.location.hash.substr(1);
 var url ='templates/email-'+ hash +'.html';
 $("#frame").prop('src',url);
 $(".template-preview--download").prop('href',url);

 /***********************************************/
 /* GENERATOR COMPONENTS CLICK BUTTON */
 /***********************************************/
 $('.generator_slide').on('click',function(){
  $('.generator_sidebar').addClass('slide-lr');
  $('.close').css('display','block');
})
 $('.close').on('click',function(){
  $('.generator_sidebar').removeClass('slide-lr');
  $(this).css('display','none');
})

 /***********************************************/
 /* EMAIL BUILDER : ADD VISITOR TEMPLATES ON CLICK IN TINYMCE EDITOR*/   
 /***********************************************/
 $("#add-template--visiteur-0").click(function() {
   $.ajax({
     url : "http://localhost/email-editor/templates/email-visiteur-0.html",
     dataType: "html",
     success : function (data) {
      $.get("http://localhost/email-editor/templates/email-visiteur-0.html", function(d){
       tinyMCE.activeEditor.setContent(d);
     });
    }
  });
 });
 $("#add-template--visiteur-1").click(function() {
   $.ajax({
     url : "http://localhost/email-editor/templates/email-visiteur-1.html",
     dataType: "html",
     success : function (data) {  
       $.get("http://localhost/email-editor/templates/email-visiteur-1.html", function(d){
        tinyMCE.activeEditor.setContent(d);
      });
     }
   });
 });
 $("#add-template--article").click(function() {
   $.ajax({
     url : "http://localhost/email-editor/templates/email-visiteur-article.html",
     dataType: "html",
     success : function (data) {              
       $.get("http://localhost/email-editor/templates/email-visiteur-article.html", function(d){
         tinyMCE.activeEditor.setContent(d);
       });
     }
   });
 });
 /***********************************************/
 /* EMAIL BUILDER : SCROLL TO IFRAME BOTTOM */
 /***********************************************/
 $('.elements .component').on('click',function(){   
   $('.generator_preview-screen ').animate({scrollTop: $('.generator_preview-screen ').prop("scrollHeight")}, 500);
 });
 


 
 /***********************************************/
 /* HAMBURGER MENU */
 /***********************************************/
 $(document).ready(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass("is-active");
    $(".generator_menu").toggleClass('move');

  });
  $('.generator_menu a').click(function(){
    $('.hamburger').removeClass('is-active');
    $(".generator_menu").removeClass('move');
  })
});


 $(function() {
   $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
     $('body').addClass('scrollColor');
     $(".hamburger .line").css('background-color','#777');
   } else {
     $('body').removeClass('scrollColor');
     $(".hamburger .line").css('background-color','#fff');
   }
 });
 });

}); /* END DOCUMENT.READY */

