var direccion = null;//"http://172.16.4.88/servicio.php";
var cambio = new Boolean(false);

function actualizar_host(){
		
	 direccion='http://' + document.getElementById('txt_direccion1').value + '.' + document.getElementById('txt_direccion2').value + '.' + document.getElementById('txt_direccion3').value + '.' + document.getElementById('txt_direccion4').value + '/servicio.php'; 
		localStorage.setItem('host', direccion);
		
};

var my_media = null;

	function playAudio(id) {
		var audioElement = document.getElementById(id);
		var url = audioElement.getAttribute('src');
		console.log("La url es: " + url);
		my_media = new Media(url, ondSuccess, onError);
		
		// Play audio
		my_media.play();
	}
	
	function stopAudio() {
            if (my_media) {
                my_media.stop();
            }
        }

		// onSuccess Callback
        function onSuccess() {
            console.log("playAudio():Audio Success");
        }
        // onError Callback
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

	
$(document).ready(function() {
	
	function close(){
	navigator.app.exitApp();
	
	}
	function silenciar()
	{
		stopAudio();
		/*$('#snd_irfoco1')[0].muted=true;
		$('#snd_irfoco2')[0].muted=true;
		$('#b1')[0].muted=true;
		$('#b2')[0].muted=true;
		$('#c1')[0].muted=true;
		$('#c2')[0].muted=true;*/
	};

	function eliminar() {
						
	document.getElementById('txt_direccion1').value="";
	document.getElementById('txt_direccion2').value="";
	document.getElementById('txt_direccion3').value="";
	document.getElementById('txt_direccion4').value="";
		
	};
	
	$('#borrar').click(function()
	{
		eliminar();
		window.alert("Usted borro la direccion de host!");
						
	});
						
	
   $('#botoniraf1').mousemove(function()
		{	
			//silenciar();
			alert("La ruta:" + snd_irfoco1);
			playAudio('snd_irfoco1');
			
			//silenciar();
			//$('#snd_irfoco1')[0].muted=false;
			//$('#snd_irfoco1')[0].play();
			
		
		});
		
       $('#botoniraf2').mousemove(function()
		{	
		
		playAudio('snd_irfoco2');
			
		});
		
	$('#Ef1').mousemove(function()
		{
			silenciar();
				$('#b1')[0].muted=false;
				$('#b1')[0].play();
		});
		
	$('#Ef2').mousemove(function()
		{
			silenciar();
				$('#b2')[0].muted=false;
				$('#b2')[0].play();
		});
		 
	$('#Af1').mousemove(function()
		{
			silenciar();
				$('#c1')[0].muted=false;
				$('#c1')[0].play();
		});
		
	$('#Af2').mousemove(function()
		{
			silenciar();
				$('#c2')[0].muted=false;
				$('#c2')[0].play();
		});

		 //if(Conf.host==null)
			 
	$('#Ef1').click(function()
		{
			//if (cambio==true)
				//{
					//actualizar_host();
				//}
					$.ajax
					({
						url: direccion,
						type: 'POST',
						data: { 'operacion': 1, 'puerto': 17},
						crossDomain:true,
						success: function(r)
						{	
							alert(r);
						}
					});
		});
	
	$('#Ef2').click(function()
		{
			//if (cambio==true)
				//{
					//actualizar_host();
				//}
					$.ajax
					({
						url: direccion,
						type: 'POST',
						data: { 'operacion': 0, 'puerto': 17},
						crossDomain:true,
						success: function(r)
						{	
							alert(r);
						}
					});
		});
	
	$('#Af1').click(function()
		{
			//if (cambio==true)
			//{
			//	actualizar_host();
			//}
				$.ajax
				({
					url: direccion,
					type: 'POST',
					data: { 'operacion': 1, 'puerto': 23},
					crossDomain:true,
					success: function(r)
					{	
						alert(r);
					}
				});
		});
	
	$('#Af2').click(function()
		{
			//if (cambio==true)
			//{
				//actualizar_host();
			//}
				$.ajax
				({
					url: direccion,
					type: 'POST',
					data: { 'operacion': 0, 'puerto': 23},
					crossDomain:true,
					success: function(r)
					{	
						alert(r);
					}	
				});
		});
	
	$('.Ef1').click(function()
		{
			//if (cambio==true)
			//{
				//actualizar_host();
			//}
				$.ajax
				({
					url: direccion,
					type: 'POST',
					data: { 'operacion': 1, 'puerto': 17},
					crossDomain:true,
					success: function(r)
					{	
						alert(r);
					}
				});
		});

	$('.Ef2').click(function()
		{
			//if (cambio==true)
				//{
					//actualizar_host();
				//}
					$.ajax
					({
						url: direccion,
						type: 'POST',
						data: { 'operacion': 0, 'puerto': 17},
						crossDomain:true,
						success: function(r)
						{	
							alert(r);
						}
					});
		});
		
	$('.Af1').click(function()
		{
			//if (cambio==true)
			//{
				//actualizar_host();
			//}
				$.ajax
				({
					url: direccion,
					type: 'POST',
					data: { 'operacion': 1, 'puerto': 23},
					crossDomain:true,
					success: function(r)
					{	
						alert(r);
					}
				});
		});
		
		$('.Af2').click(function()
		{
			//if (cambio==true)
			//{
				//actualizar_host();
			//}
				$.ajax
				({
					url: direccion,
					type: 'POST',
					data: { 'operacion': 0, 'puerto': 23},
					crossDomain:true,
					success: function(r)
					{	
						alert(r);
					}	
				});
		});
	
	$('#cambio').click(function() {
					if(document.getElementById('txt_direccion1').value.length == "" ) {
						window.alert("ingresar todos los elementos");
					}
					else if(document.getElementById('txt_direccion2').value.length == "" ){
							window.alert("ingresar todos los elementos");
					}
					else if(document.getElementById('txt_direccion3').value.length == "" ){
							window.alert("ingresar todos los elementos");
					}
					else if(document.getElementById('txt_direccion4').value.length == "" ){
							window.alert("ingresar todos los elementos");
					}
					
					else{
					actualizar_host();	
					window.alert("Cambio de host correcto!");
					cambio = new Boolean(true);
					}
					
		
		});
	if (localStorage.getItem('host')==null) {
		$('#mch').click();
	}
	else{
		direccion=localStorage.getItem('host');
	}
	
});