# email-editor



## What is this email editor ?

This tool is not an email builder or generator, it is an email editor. The purpose of this tool is to allow the modification on the fly of existing email templates. It is primarily intended for non-technical people, who cannot intervene in the html code.
In this example, I have placed three classic visitor email templates. The user chooses a template, and clicks on it to open it in a tynimce editor. The user can then modify each part of the email with the classic features of the editor (word processing, image upload etc). This tool works very well with simple email templates.

## How to use ?

You have an email template ?
- take a screenshot of the template. The width must be 241px.
- Put the screenshot in the email-editor/image/templates folder
- put your html file in the email-editor/templates folder and give it a name width the prefix "email-*"
- go to the js folder and template.js file
- go to the section  
```
/***********************************************/
 /* EMAIL BUILDER : ADD VISITOR TEMPLATES ON CLICK IN TINYMCE EDITOR*/   
 /***********************************************/
 ```
- and add a block code
 
 ```
  $("#add-template--yourtemplatename").click(function() {
   $.ajax({
     url : "http://localhost/email-editor/templates/email-yourtemplatename.html",
     dataType: "html",
     success : function (data) {              
       $.get("http://localhost/email-editor/templates/email-yourtemplatename.html", function(d){
         tinyMCE.activeEditor.setContent(d);
       });
     }
   });
 });
 ```
 
 - go to the index.php file and add a code block
 ```
 <button type="button" class="component" id="add-template--yourtemplatename">
    <span> your title </span>
    <div class="components">
      <div class="template template-yourtemplatename"></div>
    </div>
  </button>
 ```       
        
