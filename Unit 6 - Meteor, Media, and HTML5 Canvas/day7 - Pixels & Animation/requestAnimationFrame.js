<!DOCTYPE HTML>
<html lang="en">
	<head>
		<title>RequestAnimationFrame.js example</title>
	</head>
	<body>
		<script src="js/RequestAnimationFrame.js"></script>
		<script>

			var canvas, context;

			init();
			animate();

			function init() {

				canvas = document.createElement( 'canvas' );
				canvas.width = 256;
				canvas.height = 256;

				context = canvas.getContext( '2d' );

				document.body.appendChild( canvas );

			}

			function animate() {

				requestAnimationFrame( animate );
				draw();

			}

			function draw() {

				var time = new Date().getTime() * 0.002;
				var x = Math.sin( time ) * 96 + 128;
				var y = Math.cos( time * 0.9 ) * 96 + 128;

				context.fillStyle = 'rgb(245,245,245)';
				context.fillRect( 0, 0, 255, 255 );

				context.fillStyle = 'rgb(255,0,0)';
				context.beginPath();
				context.arc( x, y, 10, 0, Math.PI * 2, true );
				context.closePath();
				context.fill();

			}

		</script>

		<div style="width:256px">
			<a href="javascript:location='view-source:' + window.location.href;">view source</a><br /><br/>

			<a href="http://dev.chromium.org/developers/design-documents/requestanimationframe-implementation">requestAnimationFrame()</a> allows modern browsers to stop drawing graphics when a tab or window is not visible. Improving overall performance and batteries on mobile devices.<br /><br />

			<a href="https://gist.github.com/838785">RequestAnimationFrame.js</a> emulates the basic usage for old browsers.
		</div>
	</body>
</html>
