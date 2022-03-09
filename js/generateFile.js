/*  Generate an html file from the updated rendering of the TinyMce editor */


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
