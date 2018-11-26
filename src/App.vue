<template>
	<div id="app">
		<header>
			<div>
				<router-link id="logo" class="btn" to="/">Lapps</router-link>
				<router-link class="btn" to="/use">使う</router-link>
				<router-link class="btn" to="/develop">開発する</router-link>
				<router-link class="btn" to="/communicate">交流する</router-link>
			</div>
		</header>
		<router-view id="main" />

		<footer id="footer">
			<b-col>
				<div class="sns">
					<a :href="twitter_link" target="_blank" title="Twitter で共有">
						<img src="/twitter.png" class="twitter" alt="twitter">
					</a>
					<a :href="facebook_link" target="_blank" title="Facebook で共有">
						<img src="/facebook.png" class="facebook" alt="facebook">
					</a>
				</div>

				<div class="contact">
					<a href="mailto:m@jiyu.green">contact</a>
				</div>

				<div class="license">
					<a rel="license" :href="cc_url" target="_blank">
						<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
					</a>
				</div>
			</b-col>
		</footer>

		<div ref="btn-notify" id="btn-notify" class="onesignal-customlink-container"></div>
	</div>
</template>

<script>
export default {
	data() {
		let description = document.getElementById("description").getAttribute("content")
		let tw =  "https://twitter.com/intent/tweet?text=" + encodeURIComponent(description + "\n" + location.href + "\n" + " #GreenChain")
		let fb = "https://www.facebook.com/sharer/sharer.php?u=" + location.href + "&t=" + encodeURIComponent(description)

		return {
			twitter_link: tw,
			facebook_link: fb,
			cc_url: `http://creativecommons.org/licenses/by-nc/4.0/deed.ja`,
		}
	},
	created() {
		(function (i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function () {
				(i[r].q = i[r].q || []).push (arguments)
			}, i[r].l = 1 * new Date ();
			a = s.createElement (o), m = s.getElementsByTagName (o)[0];
			a.async = 1;
			a.src   = g;
			m.parentNode.insertBefore (a, m)
		}) (window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

		ga ('create', 'UA-123676187-6', 'auto');
		ga ('send', 'pageview');

		function insertCallback(parent, funcname, callback, ...args) {
			let oldFunc = parent[funcname] ? parent[funcname] : function (){}
			parent[funcname] = function() {
				oldFunc.apply(this, arguments)
				return callback(...args)
			}
		}

		function notify_analytics(l) {
			let newPage = l.pathname + l.hash
			ga('set', 'page', newPage)
			ga('send', 'pageview')
		}

		insertCallback(window.history, "pushState", notify_analytics, location)
		insertCallback(window.history, "replaceState", notify_analytics, location)
	}
}
</script>

<style>
/* Common */
html, #app, img, header {
	background-color: #e1fae1 !important;
	font-size: 18px;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

#main {
	text-align: left;
}

body {
	font-size: 3rem;
	background-color: #e6ffe6;
}

.container {
	max-width: 800px !important;
}

/* Heading */

h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}

/* Button */

.btn-success {
	background-image: -webkit-linear-gradient(top,#5cb85c 0,#419641 100%);
	background-image: -o-linear-gradient(top,#5cb85c 0,#419641 100%);
	background-image: -webkit-gradient(linear,left top,left bottom,from(#5cb85c),to(#419641));
	background-image: linear-gradient(to bottom,#5cb85c 0,#419641 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);
	filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
	background-repeat: repeat-x;
	border-color: #3e8f3e;
}

.btn-default {
	text-shadow: 0 1px 0 #fff;
	background-image: -webkit-linear-gradient(top,#fff 0,#e0e0e0 100%);
	background-image: -o-linear-gradient(top,#fff 0,#e0e0e0 100%);
	background-image: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#e0e0e0));
	background-image: linear-gradient(to bottom,#fff 0,#e0e0e0 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe0e0e0', GradientType=0);
	filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
	background-repeat: repeat-x;
	border-color: #000;
}

/* Anker */

a:link {
	color: green;
}
a:visited {
	color: darkgreen;
}
a:hover {
	color: green !important;
}
a:active {
	color: green;
}

/* Header */

header {
	width: 100%;
	position: fixed;
	top: 0;
	border-bottom: 1px solid darkgreen;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	height: 45px;
}

header > div {
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
}

header a {
	color:green;
	font-weight: normal !important;
}

header a:hover {
	color: green;
}

header a:active {
	color: green;
}

header a:visited {
	color: darkgreen;
}

header .btn {
	margin-left: 2%;
}

/* footer */

footer {
	border-top: 1px solid darkgreen;
	margin-top: 50px;
}

footer + #btn-notify {
	display: none !important;
}

.twitter, .facebook {
	width: 10%;
	max-width: 50px;
	margin-left: 10px;
}

#twitter-widget-1 {
	margin-right: 10px;
}

.facebook {
	margin-top: 10px;
	margin-bottom: 10px;
}

.fb-like {
	margin-right: 10px;
}

.license {
	margin-top: 10px;
	margin-bottom: 20px;
}

/* Vue Toast */
.toasted.bubble {
	background-color: limegreen !important;
	border-color: limegreen !important;
}

.toasted.outline {
	background-color: #dc3545 !important;
	border-color: #dc3545 !important;
	color: white !important;
}
</style>
