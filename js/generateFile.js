/*Function to generate a txt or html file from the sample template: Fix IE */ 
 (function($){
    $.generateFile = function(options){

        options = options || {};

        if(!options.script || !options.filename || !options.content){
            throw new Error("Please enter all the required config options!");
        }

        // Creating an invisible iframe for IE:

        var iframe = $('<iframe>',{
            width:1,
            height:1,
            frameborder:0,
            css:{
                display:'none'
            }
        }).appendTo('body');

        var formHTML = '<form action="" method="post">'+
            '<input type="hidden" name="filename" />'+
            '<input type="hidden" name="content" />'+
            '</form>';

        // Creating the DOM for IE in the iframe

        setTimeout(function(){
            // iframe body
            var body = (iframe.prop('contentDocument') !== undefined) ?
                    iframe.prop('contentDocument').body :
                    iframe.prop('document').body;   // IE
            body = $(body);
            // Adding the form to the body
            body.html(formHTML);
            var form = body.find('form');
            form.attr('action',options.script);
            form.find('input[name=filename]').val(options.filename);
            form.find('input[name=content]').val(options.content);
            // Submission of the form to download.php. Creating the download window
            form.submit();
        },50);
    };

})(jQuery);

// 1 Generate the html file of the test template //
$(document).ready(function(){

    $('#btnPage').click(function(e){

        $.generateFile({
            filename    : 'index.html',
            content     : $('#final-code').val(),
            script      : 'makePage.php'
        });

        e.preventDefault();
    });
});

/* 2 Opens a window with the copy of the sample rendition for printing or saving as a PDF */
$(document).ready(function(){
 $("#btnPrint").on('click', function () {
            var divContents = $("#final-code").val()
            var printWindow = window.open('', '', 'height=600,width=600');
            printWindow.document.write('<html><head><title>Votre pdf - email visiteur</title>');
            printWindow.document.write('<link rel="stylesheet" media="print" href="../css/print.css" />');
			printWindow.document.write('<link rel="stylesheet" type="text/css" href="../css/style.css">');
            printWindow.document.write('</head><body >');
            printWindow.document.write(divContents);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            
        })
});


/* 3 Generate an html file from the updated rendering of the TinyMce editor */


 function saveTextAsFile()
	{
		var textToWrite = tinyMCE.activeEditor.getContent();
		var textFileAsBlob = new Blob([textToWrite], {type:'text/html'});
		var fileNameToSaveAs = "index.html";

		var downloadLink = document.createElement("a");
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "Téléchargez le fichier html actualisé";

		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		downloadLink.click();
	};