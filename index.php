<?php include('header.php');?>
<div class="flex-container">
	<div class="flex-row text-center p-0">
		<div class="flex-col-xs-12 p-0">
			<h1>Email Editor</h1>
		</div>
	</div>	
</div>


<div class="generator_tinyMce" id="tinyMce_code">
	<div class="flex-container">
		<div class="flex-row">
			<div class="generator_slide">Templates</div>
			<div class="flex-col-xs-12 flex-col-md-5 generator_sidebar">


				<button type="button" class="component" id="add-template--visiteur-0">
					<span> 0 </span>
					<div class="components">
						<div class="template template-visiteur-0"></div>
					</div>
				</button>
				<button type="button" class="component" id="add-template--visiteur-1">
					<span> 1 </span>
					<div class="components">
						<div class="template template-visiteur-1"></div>
					</div>
				</button>
				<button type="button" class="component" id="add-template--article">
					<span> article </span>
					<div class="components">
						<div class="template template-visiteur-article"></div>
					</div>
				</button>

				<a class="close" href="#">X</a>
			</div>

			<div class="flex-col-xs-12 relative">
				<fieldset>
					<textarea id="mytextarea">Copy paste yout html here, edit and print it !</textarea>
				</fieldset>
			</div>



			<div class="flex-col-xs-12">
				<button type="button" id="btnHtml" type="button" onClick="saveTextAsFile()">Generate the html file</button>
			</div>


			<p>To indent the generated code please use <a href="https://alter.email/">alter email </a></p>
		</div>
	</div>
</div>





<?php include('footer.php') ?>