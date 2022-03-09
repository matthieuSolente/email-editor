<!doctype html>
<!--[if lt IE 7]>      
<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="">
<![endif]-->
   <!--[if IE 7]>         
   <html class="no-js lt-ie9 lt-ie8" lang="">
 <![endif]-->
      <!--[if IE 8]>         
      <html class="no-js lt-ie9" lang="">
    <![endif]-->
    <!--[if gt IE 8]><!--> 
    <html class="no-js" lang="fr">
    <!--<![endif]-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Email Editor  | Matthieu Solente </title>
    <meta name="description" content="Email builder conçu par Matthieu solente">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css/fontawesome.min.css" />
    <link rel="stylesheet" href="css/solid.min.css" />
    <link rel="stylesheet" media="print" href="css/print.css" />
    <link rel="stylesheet" type="text/css" href="css/prism.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
            <!--[if lt IE 9]>
            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
          <![endif]-->
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="js/generateFile.js"></script>

          <script src="tinymce/js/tinymce/tinymce.min.js"></script>
          <script src="js/plugin.js"></script>
         <!--  <script src="https://cloud.tinymce.com/stable/tinymce.min.js?apiKey=3gf7l1y9sp0vh80wbmphy4xqh5ky73c4rkogkj022vp0rrg8"></script>  
         --><script> 

          tinymce.init({
   selector: '#mytextarea',  // change this value according to your HTML
   
   plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak fullpage',
   'searchreplace wordcount visualblocks visualchars code fullscreen',
   'insertdatetime media nonbreaking save table contextmenu directionality',
   'emoticons template paste textcolor colorpicker textpattern case imagetools'],
   toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | case',
   toolbar2: 'print preview media | forecolor backcolor emoticons',
   image_title: true,
   verify_html : false,
   allow_conditional_comments: true,
   allow_html_in_named_anchor: true,
   element_format : 'html',
   automatic_uploads: true,
   file_picker_types: 'image',
   file_picker_callback: function (cb, value, meta) {
     var input = document.createElement('input');
     input.setAttribute('type', 'file');
     input.setAttribute('accept', 'image/*');
     input.onchange = function () {
       var file = this.files[0];

       var reader = new FileReader();
       reader.onload = function () {
         var id = 'blobid' + (new Date()).getTime();
         var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
         var base64 = reader.result.split(',')[1];
         var blobInfo = blobCache.create(id, file, base64);
         blobCache.add(blobInfo);
         cb(blobInfo.blobUri(), { title: file.name });
       };
       reader.readAsDataURL(file);
     };

     input.click();
   }
 });
</script>
            <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
          <![endif]-->
          <body id="<?=basename($_SERVER['PHP_SELF'],'.php')?>">
           <main>
            <header>
              <div class="flex-container p-0">
                <div class="flex-row p-0">

                  <h1 class="site-title">Email editor</h1>

                  <button type="button" id="dark" title="toggle dark mode"><em class="fas fa-adjust" title="dark mode" aria-hidden="true"></em></button>
                </div>
              </div>
            </header>
            <div class="flex-container">
             <div class="flex-row">