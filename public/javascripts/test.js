/*
HTML5 âœ° Boilerplate

style.css contains a reset, font normalization and some base styles.

credit is left where credit is due.
much inspiration was taken from these projects:
yui.yahooapis.com/2.8.1/build/base/base.css
camendesign.com/design/
praegnanz.de/weblog/htmlcssjs-kickstart
 */

/*
html5doctor.com Reset Stylesheet (Eric Meyer's Reset Reloaded + HTML5 baseline)
v1.6.1 2010-09-17 | Authors: Eric Meyer & Richard Clark
html5doctor.com/html-5-reset-stylesheet/
 */


html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display:block;
}

nav ul { list-style:none; }

blockquote, q { quotes:none; }

blockquote:before, blockquote:after,
q:before, q:after { content:''; content:none; }

a { margin:0; padding:0; font-size:100%; vertical-align:baseline; background:transparent; }

ins { background-color:#ff9; color:#000; text-decoration:none; }

mark { background-color:#ff9; color:#000; font-style:italic; font-weight:bold; }

del { text-decoration: line-through; }

abbr[title], dfn[title] { border-bottom:1px dotted; cursor:help; }

/* tables still need cellspacing="0" in the markup */
table { border-collapse:collapse; border-spacing:0; }

hr { display:block; height:1px; border:0; border-top:1px solid #ccc; margin:1em 0; padding:0; }

input, select { vertical-align:middle; }

/* END RESET CSS */



/* fonts.css from the YUI Library: developer.yahoo.com/yui/
refer to developer.yahoo.com/yui/3/cssfonts/ for font sizing percentages

there are three custom edits:
 * remove arial, helvetica from explicit font stack
 * we normalize monospace styles ourselves
 * table font-size is reset in the HTML5 reset above so there is no need to repeat
 */

body { font:13px/1.231 sans-serif; *font-size:small; } /* hack retained to preserve specificity */

select, input, textarea, button { font:99% sans-serif; }

/* normalize monospace sizing
 * en.wikipedia.org/wiki/MediaWiki_talk:Common.css/Archive_11#Teletype_style_fix_for_Chrome
 */
pre, code, kbd, samp { font-family: monospace, sans-serif; }


/*
 * minimal base styles
 */


body, select, input, textarea {
  color: #222;
}

#main p {
  line-height: 1.4em;
}
#main p {
  line-height: 1.4em;
}
#main p, #main h2, #main h3, #main dl, #main ul, #main table {
  margin-bottom: 1em;
}
#main ul {
  list-style: disc;
  margin-left: 20px;
}


/* headers (h1,h2,etc) have no default font-size or margin,
you'll want to define those yourself. */
h1,h2,h3,h4,h5,h6 { font-weight: bold; }

h2, h3 { font-family: Trebuchet MS }

/* always force a scrollbar in non-IE: */
html { overflow-y: scroll; }


/* accessible focus treatment: people.opera.com/patrickl/experiments/keyboard/test */
a:hover, a:active { outline: none; }

a, a:active, a:visited { color: #31519A; }
a:hover { color: #036; }


ol { list-style-type: decimal; }

/* remove margins for navigation lists */
nav ul, nav li { margin: 0; }

small { font-size: 85%; }
strong, th { font-weight: bold; }

td { vertical-align: top; }

/* set sub, sup without affecting line-height: gist.github.com/413930*/
sub, sup { font-size: 75%; line-height: 0; position: relative; }
sup { top: -0.5em; }
sub { bottom: -0.25em; }

pre {
  padding: 15px;

  /* www.pathf.com/blogs/2008/05/formatting-quoted-code-in-blog-posts-css21-white-space-pre-wrap/ */
  white-space: pre; /* CSS2 */
  white-space: pre-wrap; /* CSS 2.1 */
  white-space: pre-line; /* CSS 3 (and 2.1 as well, actually) */
  word-wrap: break-word; /* IE */
}

textarea { overflow: auto; } /* www.sitepoint.com/blogs/2010/08/20/ie-remove-textarea-scrollbars/ */

.ie6 legend, .ie7 legend { margin-left: -7px; } /* thnx ivannikolic! */

/* align checkboxes, radios, text inputs with their label
by: Thierry Koblentz tjkdesign.com/ez-css/css/base.css  */
input[type="radio"] { vertical-align: text-bottom; }
input[type="checkbox"] { vertical-align: baseline; }
.ie7 input[type="checkbox"] { vertical-align: baseline; }
.ie6 input { vertical-align: text-bottom; }

/* hand cursor on clickable input elements */
label, input[type="button"], input[type="submit"], input[type="image"], button { cursor: pointer; }

/* webkit browsers add a 2px margin outside the chrome of form elements */
button, input, select, textarea { margin: 0; }

/* colors for form validity */
input:valid, textarea:valid   {  }
input:invalid, textarea:invalid {
  border-radius: 1px;
  -moz-box-shadow: 0px 0px 5px red;
  -webkit-box-shadow: 0px 0px 5px red;
  box-shadow: 0px 0px 5px red;
}
.no-boxshadow input:invalid,
.no-boxshadow textarea:invalid { background-color: #f0dddd; }


/* These selection declarations have to be separate.
No text-shadow: twitter.com/miketaylr/status/12228805301
Also: hot pink. */
::-moz-selection{ background: #0095da; color:#fff; text-shadow: none; }
::selection { background:#0095da; color:#fff; text-shadow: none; }

/*  j.mp/webkit-tap-highlight-color */
a:link { -webkit-tap-highlight-color: #FF5E99; }

/* make buttons play nice in IE:
www.viget.com/inspire/styling-the-button-element-in-internet-explorer/ */
button {  width: auto; overflow: visible; }

/* bicubic resizing for non-native sized IMG:
code.flickr.com/blog/2008/11/12/on-ui-quality-the-little-things-client-side-image-resizing/ */
.ie7 img { -ms-interpolation-mode: bicubic; }


span.price {
  font-size: 1.5em;
}
span.price.discounted {
  color: #f00;
  text-decoration: line-through;
}
span.price.selling {
  font-weight: bold;
}

h1{
  color: #D3D3D3;
  font: normal normal 3.5em Arvo;
  text-transform: uppercase;
  margin: 60px 0 20px 0;
  padding-bottom: 10px;
}

h1 a {
  margin-left: 20px;
  text-transform:lowercase;
}

h2{
  font: normal normal 2em Arvo;
  text-transform: uppercase;
  margin: 30px 0 10px 0;
  padding-bottom: 10px;
}

h3 {
  color: #777;
  font: normal normal 2em Arvo;
  margin-bottom: 10px;
}
header a, #banner nav ul li a {
  text-transform: uppercase;
  text-decoration: none;
}

/* for image replacement */
.ir { display: block; text-indent: -999em; overflow: hidden; background-repeat: no-repeat; text-align: left; direction: ltr; }

/* Hide for both screenreaders and browsers
css-discuss.incutio.com/wiki/Screenreader_Visibility */
.hidden { display: none; visibility: hidden; }

/* Hide only visually, but have it available for screenreaders
www.webaim.org/techniques/css/invisiblecontent/  &  j.mp/visuallyhidden
Updated to ensure no other style overrides the styles defined in this rule */
.visuallyHidden {
  border: 0 !important;
  clip: rect(0 0 0 0);
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
}

/* Hide visually and from screenreaders, but maintain layout */
.invisible { visibility: hidden; }

/* >> The Magnificent CLEARFIX: Updated to prevent margin-collapsing on child elements << j.mp/bestclearfix */
.clearfix:before, .clearfix:after { content: "\0020"; display: block; height: 0; visibility: hidden; }
.clearfix:after { clear: both; }
/* fix clearfix: blueprintcss.lighthouseapp.com/projects/15318/tickets/5-extra-margin-padding-bottom-of-page */
.clearfix { zoom: 1; }
/* Textual Styles */
span.bold {font-weight: bold;}

.inline { display: inline }



/*
 * media queries for responsive design
 * these follow after primary styles so they will successfully override.
 */

@media all and (orientation:portrait) {
  /* style adjustments for portrait mode goes here */

}

@media all and (orientation:landscape) {
  /* style adjustments for landscape mode goes here */

}

/* Grade-A Mobile Browsers (Opera Mobile, Mobile Safari, Android Chrome)
consider this: www.cloudfour.com/css-media-query-for-mobile-is-fools-gold/ */
@media screen and (max-device-width: 480px) {


  /* uncomment if you don't want iOS and WinMobile to mobile-optimize the text for you
  j.mp/textsizeadjust
  html { -webkit-text-size-adjust:none; -ms-text-size-adjust:none; } */
}

/*
 * print styles
 * inlined to avoid required HTTP connection www.phpied.com/delay-loading-your-print-css/
 */
@media print {
  * { background: transparent !important; color: black !important; text-shadow: none !important; filter:none !important;
    -ms-filter: none !important; } /* black prints faster: sanbeiji.com/archives/953 */
    a, a:visited { color: #444 !important; text-decoration: underline; }
    a[href]:after { content: " (" attr(href) ")"; }
    abbr[title]:after { content: " (" attr(title) ")"; }
    .ir a:after, a[href^="javascript:"]:after, a[href^="#"]:after { content: ""; }  /* don't show links for images, or javascript/internal links */
    pre, blockquote { border: 1px solid #999; page-break-inside: avoid; }
    thead { display: table-header-group; } /* css-discuss.incutio.com/wiki/Printing_Tables */
    tr, img { page-break-inside: avoid; }
    @page { margin: 0.5cm; }
    p, h2, h3 { orphans: 3; widows: 3; }
    h2, h3{ page-break-after: avoid; }
}

/* @override http://localhost:3000/stylesheets/screen.css */

body#product_list {
  background: #fff url(/assets/store/bg.png) repeat-x;
}

body {
  background: #fff url(/assets/store/narrow_bg-d0c31673db43ce0a62a64ba6ab64d7b2.png) repeat-x;
}

#banner, #container, footer .inner {width: 960px; margin: 0 auto;}

header, footer {background-color: #000;}
header nav *, footer div#secondary * {display: inline-block;}
header {
  position: relative;
  z-index: 100;
  height: 58px;
  margin: 0 auto;
}

header form {
  position: absolute;
  left: 320px;
  top: 23px;
  padding: 0;
}
header form input {
  background: #fff url(/assets/store/search_bg_s1-c8733c07461d7ed98257e019ff59fec8.gif) no-repeat;
  border: 0;
  width: 146px;
  height: 23px;
  padding: 0 25px 0 10px;
  color: #333;
  line-height: 23px;
}
header form input.empty  {
  color: #aaa;
} 


header #logo {
  position: absolute;
  left:  0; top: 11px;
}



header nav {
  position: absolute;
  right: 0;
  top: 24px;
  text-align: right;
}
header nav a, header nav a:visited,header nav a:hover {
  margin: 0 0 0 12px;
  text-align: right;
  font: normal normal normal 1.1em/1.6em Arvo;
  color: #fff;
}

header nav a.cart {color: #B30000;}

footer {
  background: #fff url(/assets/store/footer_bkgd-3f5167bf042b4d1fe3994fbced4dc139.jpg) repeat-x bottom left;
  margin: 80px 0 0; clear: both;
  font-family: Trebuchet MS;
}

footer .inner {
  height: 520px;
  position:  relative;
}

footer #kid {
  position: absolute;
  bottom: 60px;
}
footer #about-railsdog-radio {
  position: absolute;
  width: 710px;
  left: 250px;
  bottom: 0px;
  height: 390px;
  font-size: 150%;
  line-height: 150%;
  color: #666;
}
#more-about-railsdog-radio {
  text-align: right;
  font-size: 70%;
}
#more-about-railsdog-radio a {
  text-decoration: none;
}

footer #about-railsdog-radio strong { color: #000; }
footer #contact-us, footer #social, footer #menu {
  width: 210px;
  position: absolute;
  bottom: 0;
  height: 170px;
}
footer #contact-us a, footer #social a, footer #menu a { color: #797A7D; }
footer #contact-us p, footer #social p, footer #menu p {
  color: #797A7D;
  line-height: 2.0em;
  font-size: 1.2em;
}
footer #contact-us h3, footer #social h3, footer #menu h3 {
  color: #fff;
  font-size: 1.5em;
  margin-bottom: 0.5em;
}
footer #contact-us {
  left: 250px;
}
footer #social {
  left: 500px;
}
footer #menu {
  left: 750px;
}
footer #social a {
  display: block;
  width: 25px;
  height: 25px;
  float: left;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-image: url(/assets/store/social-icons-7030df7096ec75742816373ae3a12be7.png);
}
footer #social a:hover {
  background-image: url(/assets/store/social-icons-rollover-fcfb1f6997096bf656cee72f9a290fc0.png);
}
footer #social a span    { display: none; }
footer #social #rss      { background-position: -37px 0   }
footer #social #twitter  { background-position: -75px 0  }


footer #copyright {
  color: #797A7D;
  position: absolute;
  bottom: 20px;
  right: 0;
}



#sidebar .list-box {
  width: 230px;
  float: left;
  background-color: #F3F3F3;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  padding:  0px 30px 30px 30px;
  color: #666;
  font-family: Trebuchet MS;
}

.list-box {
  padding-top: 30px; /* match #contact  */
}
.list-box h2 {
  color: #364D8C;
}
.list-box h2, #homepage #contact h2 {
  font-family: Arvo;
  font-size: 170%;
  text-transform: uppercase;
  font-weight: normal;
  margin-bottom: 0.75em;
  border-bottom: 1px solid #A3A3A3;
  padding-bottom: 0.5em;
}
.list-box li {
  font-size: 1.25em;
  line-height: 1.5em;
}
.list-box a {
  color: #666;
  text-decoration: none;
}
.list-box a:hover {
  text-decoration: underline;
}
#recent-products {
  margin-top: 40px;
}

.breadcrumbs, .pagination {
  font-size: 1.1em;
  padding: 0 0 20px 0;
}
.breadcrumbs ul {
  margin-left: 0px !important;
}
.breadcrumbs li {
  float: left;
  list-style: none;
}
.pagination {
  text-align: right;
}





button, a.button {
  border: none;
  background-color: #0095DA;
  color: #fff!important;
  padding: 10px 18px 9px 18px;
  font-size: 16px;
  font-family: Arvo;
  text-transform: uppercase;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  font-weight: normal;
}
a.button {
  text-decoration: none;
  line-height: 37px;
}
button:hover, a.button:hover {
  background-color: #0068B8;
}
body#product-list, body#product-details {
  background-image: url(/assets/store/bg-61814c07a1303f72008629fa6c2688b2.jpg);
}

body#product-details #banner, body#product-list #banner {
  height: 143px;
  background-repeat: no-repeat;
  margin-bottom: 30px;
}

body#product-details #banner, body#product-list #banner {
  position: relative;
}
body#product-details #banner h1, body#product-list #banner h1 {
  position: absolute;
  color: #fff;
  font-family: Trebuchet MS;
  font-size: 4em;
  line-height: 140px;
  text-shadow: rgba(0,0,0,1) 1px 1px 2px;
}

body#product-list #banner img {
  position: absolute;
  top: 0; left: 0;
  z-index: 1;
}

body#product-list #main, body#product-details #main, body#content #main {
  width: 600px;
  float: left;
  margin-right: 70px;
}

#sidebar {
  width: 290px;
  float: left;
}

body#product-list .product {
  border-top: 1px solid #a3a3a3;
  border-bottom: 1px solid #a3a3a3;
  margin-top: -1px;
}

body#product-list .product h2 {
  font-size: 1.5em;
  margin: 10px 0 0;
}

body#product-list .product .image {
  width: 280px;
  float: left;
  margin-bottom: 10px;
}

body#product-list .product .details {
  float: left;
  width: 320px;
}

body#product-list .product .details p {
  margin: 14px 0;
}

body#product-list .product .description {
  clear: left;
}

body#product-list #main .list {
  margin-bottom: 20px;
}
body#product-list h1, body#product-details h1 {
  margin: 0px;
}
body#product-details #product-images {
  width: 380px;
  margin-bottom: 20px;
}

body#product-details #cart-form {
  width: 220px;
}

body#product-details #product-images, body#product-details #cart-form {
  float: left;
}

body#product-details #product-description {
  clear: left;
  border-top: 1px solid #A3A3A3;
  padding-top: 10px;
}

#product-images #main-image {
  width: 350px;
  text-align: center;
  min-height: 240px;
}

#product-images #thumbnails ul {
  list-style: none;
  background-color: #ff0;
}

#product-images #thumbnails li {
  background-color: #0ff;
}

#product-images #thumbnails li a {
  display: block;
  width: 45px;
  height: 35px;
  float: left;
  border: 2px solid #ccc;
  margin: 0 2px 0 2px;
  text-align: center;
}

#product-images #thumbnails li a img {
  width: 45px;
}

#product-images #thumbnails li a:hover {
  border: 2px solid #31519A;
}

#cart-form {
  margin-bottom: 20px;
}

#cart-form form {
  width: 220px;
}

#cart-form dl {
  font-size: 1.2em;
  width: 100%;
  margin: 0;
  padding: 5px 0 5px 0;
}

#cart-form dt, #cart-form dd {
  float: left;
  line-height: 1.5em;
}

#cart-form dt {
  clear: left;
  color: #666;
  width: 140px;
}

#cart-form dd {
  width: 80px;
  text-align: right;
  font-size: 1.1em;
}

#cart-form dd .price {
  font-size: 1em;
}

hr {
  clear: left;
  visibility: hidden;
}

#cart-form dl.part-numbers {
  font-size: 0.8em;
}

dl.prices {
  border-top: 1px solid #A7A7A7;
  border-bottom: 1px solid #A7A7A7;
}

dl.part-numbers dd {
  font-weight: bold;
}

#cart-form .extras input {
  float: left;
  height: 30px;
}

#cart-form .extras label {
  margin-left: 20px;
  display: block;
}
body#cart h1 {
  border-bottom: 1px solid #D9D9D9;
}

table#cart-detail {
  width: 100%;
}

table#cart-detail th {
  color: #777;
  font-weight: normal;
  text-align: left;
  padding-bottom: 5px;
}

table#cart-detail th, table#cart-detail td {
  border-bottom: 1px solid #D9D9D9;
}

table#cart-detail td {
  padding: 10px 0;
  font-weight: bold;
  font-size: 1.2em;
  vertical-align: middle;
}

table#cart-detail tr.totals td, table#cart-detail tr.actions td {
  padding: 20px 0;
}

table#cart-detail tr.totals td, table#cart-detail td.actions {
  text-align: right;
}

table#cart-detail td.image {
  width: 180px;
}
table#cart-detail td.normal {
  font-weight: normal;
  vertical-align: middle;
}
table#cart-detail td.normal img {
  vertical-align: sub;

}


table#cart-detail td.image img {
  vertical-align: middle;
}

table#cart-detail td.description {
  width: 250px;
  padding-right: 50px;
}

table#cart-detail td.quantity {
  width: 75px;
  padding: 0;
}

table#cart-detail td.quantity input {
  margin: 0!important;
  width: 75px;
  border: 1px solid #949494;
  padding: 4px;
}

table#cart-detail td.unit-price, table#cart-detail td.total {
  width: 60px;
}

table#cart-detail td.actions {
  width: 130px;
}

table#cart-detail td.operator {
  color: #999;
  font-weight: normal;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
}

table#cart-detail a.delete {
  background-color: #333;
}

table#cart-detail .actions {
  margin: 20px 0px;
}

table#cart-detail .actions div {
  float: left;
  margin: 10px;
}

table#cart-detail .move_item form{
  display:none;
  margin: 2px 8px;
}

body#cart a.checkout {
  background-color: #E41E1E;
}

body#cart p.actions {
  text-align: right;
  font-size: 1.20em;
}

body#cart p.actions, body#cart p.actions a {
  color: #999;
  margin-bottom: 40px;
}

#edit_wishlist {
  padding: 0px 140px 10px;
  display: none;
  border-bottom: 1px solid #D9D9D9;
  margin-bottom: 20px;
}
#edit_wishlist label{
  color: #777777;
}
#edit_wishlist input[type='text'] {
  border: 2px solid #A0A0A0;
  border-radius:2px;
  margin-bottom: 4px;
}
#edit_wishlist input[type="checkbox"] {
  vertical-align: baseline;
}
#edit_wishlist div {
  float: left;
}
#edit_wishlist a.button{
  float: left;
  line-height: 15px;
  margin: 25px 110px;
}
/* Styles for Checkout pages */
/* ul, ol { margin-left: 2em; } */


ul, ol {
  margin-left: 0em;
  list-style: none;
}
body#checkout ul.fields {
  list-style: none;
}

input.blue {
  color: #fff;
  background-color: #0095da;
}

input.red {
  color: #fff;
  background-color: #e41e1e;
}

select {
  padding: 7px 5px 5px;
  color: #333;
}

input[type='text'], input[type='password'] {
  font-size: 18px;
  padding: 7px 5px 5px;
  border: 2px solid #A0A0A0;
  border-radius:2px;
  margin-bottom: 4px;
  color: #333;

}

input[type='checkbox'] {
  vertical-align: middle;
}

label {
  color: #747474;
  font-size: 14px;
  margin-bottom: 2px;
  display: block;
}

label.tick {
  display: inline; 
  vertical-align: -2px;
}

body#checkout div[role='main-content'] {
  float:left;
}

body#checkout div[role='checkout'] {
  vertical-align:top;
  padding: 0 0 100px 0;
  float: left;
}

body#checkout div[role='checkout'] div[role='title'] {
  margin: 40px 0 20px 0;
  letter-spacing:2px;
  color: #d4d4d4;
  font: 40px Arvo, Georgia, "Times New Roman", Times, serif;

}

body#checkout div[role='checkout'] div#tabs {
  font: 18px Georgia, "Times New Roman", Times, serif;
  float: left;
  z-index: 99;
  background-color: #fff;
  width:660px;
}

body#checkout div[role="checkout"] div#tabs ul {
  margin: 0;
  font: 45px "Arvo", sans-serif;
}

body#checkout div[role='checkout'] div#tabs li {
  display: inline;
  float: left;
  background-color: #eceded;
  border-bottom: 5px solid #b7cbe9;
  width: 130px;
  height: 70px;
  padding-top: 10px;
}

body#checkout div[role='checkout'] div#tabs li.active {
  background-color: #fff;
  border: 5px solid #b7cbe9;
  border-bottom: none;
}

body#checkout div[role='checkout'] div#tabs li.end {
  border-right: 3px solid #eceded;
}

body#checkout div[role='checkout'] div#tabs li span.number {
  color: #bfbfbf;
  font-size: 54px;
  padding: 0 0 0 5px;
  display: inline-block;
  font-family: Arial;
}

body#checkout div[role='checkout'] div#tabs li.active span.number {
  color: #324781;
}


body#checkout div[role='checkout'] div#tabs li span.title {
  color: #bfbfbf;
  font-size: 18px;
  width: 85px;
  padding: 0 0 0 5px;
  display: inline-block;
}

body#checkout div[role='checkout'] div#tabs li.active span.title {
  color: #758ed0;
}

body#checkout div[role='content'] {
  border: 5px solid #b7cbe9;
  font-size: 18px;
  color: #A0A0A0;
  width: 530px;
  padding: 100px 60px 50px 60px;
}

body#checkout div[role='content'] h2 {
  font: 28px Arvo;
  color: #747474;
  margin: 0px;
  padding: 0px 0px 20px 0px;
}

body#checkout div[role='content'] div.submit {
  padding-top: 20px;
  text-align: center;
}

body#checkout div[role='content'] hr {
  margin: 40px -30px;
  visibility: visible;
  border: 1px solid #D4D4D4;
}

body#checkout div[role='content'] ul.fields {
  color: #747474;
  margin: 0px;
}

body#checkout div[role='content'] ul.fields li {
  padding: 0px 0 16px 0;
  text-align: left;
  clear: both;
}

body#checkout div[role='content'] ul.fields li.options {
  margin: 0px 50px;
  padding: 0px;
}

body#checkout div[role='content'] ul.fields li.options label {
  display: inline;
  vertical-align: -5px;
  font: 22px Arvo;
  margin-left: 15px;
}


body#checkout div[role='content'] ul.fields .quart {
  width: 127px;
  float: left;
  clear: none;
}

body#checkout div[role='content'] ul.fields .half {
  width: 254px;
  float: left;
  clear: none;
}

body#checkout div[role='content'] ul.fields .three-quart {
  width: 381px;
  float: left;
  clear: none;
}


body#checkout div[role='content'] ul.fields .last {
  margin-left: 20px;
}



body#checkout div[role='content'] ul.fields input[type='text'] {
  width: 100%;
}

body#checkout div[role='content'] ul.fields select {
  width: 100%;
}

body#checkout div[role='aside'] {
  border: 3px solid #eceded;
  width: 250px;
  float: left;
  margin: 100px 0px 0px 22px;
  padding: 10px;
  color: #7f7f7f;
  font-size: 14px;
}

body#checkout div[role='aside'] h3 {
  color: #0095da;
  font: 24px Arvo;
  margin: 10px 5px 10px 15px;
  padding: 0 0 10px 0;
}

body#checkout div[role='aside'] div[role='order'] table td {
  padding-right: 10px;
}

body#checkout div[role='aside'] div[role='order'] table.total {
  margin-top:20px;
  width: 100%;
  text-align: right;
}

body#checkout div[role='aside'] div[role='order'] th {
  font-weight: normal;
}

body#checkout div[role='aside'] div[role='order'] table.items td {
  padding-bottom: 10px;
}

body#checkout div[role='aside'] div[role='order'] table.total td {
  padding-bottom: 5px;
}


body#checkout div[role='aside'] div[role='order'] tr.total th, div[role='aside'] div[role='order'] tr.total td {
  font-weight: bold;
}


body#checkout div[role='aside'] div[role='order'] tr td.qty {
  width: 36px;
}

body#checkout div[role='aside'] div[role='order'] tr td.description {
  width: 160px;
}


body#checkout div[role='aside'] div[role='order'] tr td.price {
  width: 36px;
}

body#checkout .hidden{
  display: none;
  visibility: visible;
}

/* End Styles for Checkout page */

body#login #social_login {
  float: left;
  width: 46%;
  padding: 0px 2%;
}

body#login #local_login {
  float: left;
  width: 46%;
  padding: 0px 2%;
}

#social_login p.social_link{
  margin: 20px 25%; 
}

body#login form {
  width: 70%;
}

body#login #local_login input[type='text'] {
  width: 100%
}

body#login #local_login input[type='password'] {
  width: 100%
}

body#login #local_login button {
  margin: 0 33%;
}
.authentications {
  margin-bottom: 30px;
}

.authentication {
  float: left;
  background-color: #EEE;
  border: solid 1px #999;
  padding: 5px 10px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  position: relative;
  margin-right: 10px;
}

.authentication .remove {
  text-decoration: none;
  position: absolute;
  top: 3px;
  right: 3px;
  color: #333;
  padding: 2px 4px;
  font-size: 10px;
}

.authentication .remove:hover {
  color: #FFF;
  background-color: #777;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
}

.authentication img {
  float: left;
}

.authentication .provider, .authentication .uid {
  margin-left: 38px;
  margin-right: 20px;
}

.authentication .provider {
  font-weight: bold;
}

.authentication .uid {
  color: #666;
  font-size: 11px;
}

.auth_provider img {
  display: block;
}

.auth_provider {
  float: left;
  text-decoration: none;
  margin-right: 20px;
  text-align: center;
  margin-bottom: 10px;
}
.flash {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  font-size: 1.3em;
  margin-bottom: 1em;
  padding: 0.8em;
}
.flash.notice {
  background: #ccddff url(/assets/store/shadow_top-0fe3b412e266c039b508d163f5f302d2.png) 0px -50px repeat-x;
  color: #556699;
  border: 1px solid #99aacc;
  margin-top: 1em;
}
.flash.errors {
  background: #f4b4b4 url(/assets/store/shadow_top-0fe3b412e266c039b508d163f5f302d2.png) 0px -50px repeat-x;
  color: #000000;
  border: 1px solid #000000;
  margin-top: 1em;
}
.formError {
  font-size: 1.3em;
  margin-bottom: 1em;
  padding: 0.8em;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background: #f4b4b4 url(/assets/store/shadow_top-0fe3b412e266c039b508d163f5f302d2.png) 0px -50px repeat-x;
  color: #000000;
  border: 1px solid #000000;
}
.formError p { margin: 0px; }
.formError ul { margin-bottom: 0px; }
.formError h2 {
  font-weight: bold;
  font-size: 1em;
  margin: 0px;
}
#errorExplanation {
  font-size: 1.3em;
  margin: 1em 0;
  padding: 0.8em;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background: #f4b4b4 url(/assets/store/shadow_top-0fe3b412e266c039b508d163f5f302d2.png) 0px -50px repeat-x;
  color: #000000;
  border: 1px solid #000000;
}
#errorExplanation p { margin: 0px; }
#errorExplanation ul { margin-bottom: 0px; }
#errorExplanation h2 {
  font-size: 1em;
  margin: 0px;
}
.ac_results {
  padding: 0px;
  border: 1px solid black;
  background-color: white;
  overflow: hidden;
  z-index: 99999;
}

.ac_results ul {
  width: 100%;
  list-style-position: outside;
  list-style: none;
  padding: 0;
  margin: 0;
}

.ac_results li {
  margin: 0px;
  padding: 2px 5px;
  cursor: default;
  display: block;
  /*
  if width will be 100% horizontal scrollbar will apear
  when scroll mode will be used
  */
  /*width: 100%;*/
  font: menu;
  font-size: 12px;
  /*
  it is very important, if line-height not setted or setted
  in relative units scroll will be broken in firefox
  */
  line-height: 16px;
  overflow: hidden;
}

.ac_loading {
  background: white url('indicator.gif') right center no-repeat;
}

.ac_odd {
  background-color: #eee;
}

.ac_over {
  background-color: #0A246A;
  color: white;
}
/*!
 * jQuery Mobile v1.0a2
 * http://jquerymobile.com/
 *
 * Copyright 2010, jQuery Project
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
* Note: Code is in draft form and is subject to change 
*/



/* theme bar,body,btn containers
----------------------------------*/

.ui-bar-a {  border: 1px solid #2A2A2A; background: #111111; color: #fff; font-weight: bold; text-shadow: 0 -1px 1px #000; background-image: -moz-linear-gradient(top, #3c3c3c, #111111); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #3c3c3c),color-stop(1, #111111));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#3c3c3c', EndColorStr='#111111')"; }
.ui-bar-a, .ui-bar-a input, .ui-bar-a select, .ui-bar-a textarea, .ui-bar-a button { font-family: Helvetica, Arial, sans-serif; }
.ui-bar-a .ui-link-inherit { color: #fff; }
.ui-bar-a .ui-link { color: #7cc4e7; font-weight: bold; }

.ui-body-a {  border: 1px solid #2A2A2A; background: #222222; color: #fff;  text-shadow: 0 1px 0 #000; font-weight: normal; background-image: -moz-linear-gradient(top, #666666, #222222); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #666666),color-stop(1, #222222)); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#666666', EndColorStr='#222222)')"; }
.ui-body-a, .ui-body-a input, .ui-body-a select, .ui-body-a textarea, .ui-body-a button { font-family: Helvetica, Arial, sans-serif; }
.ui-body-a .ui-link-inherit { color: #fff; }
.ui-body-a .ui-link { color: #2489CE; font-weight: bold; }
.ui-br { border-bottom: 1px solid rgba(130,130,130,.3); }

.ui-btn-up-a { border: 1px solid #222; background: #333333; font-weight: bold; color: #fff; cursor: pointer;  text-shadow: 0 -1px 1px #000; text-decoration: none; background-image: -moz-linear-gradient(top, #555555, #333333); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #555555),color-stop(1, #333333));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#555555', EndColorStr='#333333')"; }
.ui-btn-up-a a.ui-link-inherit { color: #fff; }
.ui-btn-hover-a { border: 1px solid #000; background: #444444; font-weight: bold; color: #fff;  text-shadow: 0 -1px 1px #000; text-decoration: none; background-image: -moz-linear-gradient(top, #666666, #444444); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #666666),color-stop(1, #444444));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#666666', EndColorStr='#444444')";   }
.ui-btn-hover-a a.ui-link-inherit { color: #fff; }
.ui-btn-down-a { border: 1px solid #000; background: #3d3d3d; font-weight: bold; color: #fff; text-shadow: 0 -1px 1px #000; background-image: -moz-linear-gradient(top, #333333, #5a5a5a); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #333333),color-stop(1, #5a5a5a));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#333333', EndColorStr='#5a5a5a')"; }
.ui-btn-down-a a.ui-link-inherit { color: #fff; }
.ui-btn-up-a, .ui-btn-hover-a, .ui-btn-down-a { font-family: Helvetica, Arial, sans-serif; }




.ui-bar-b {  border: 1px solid #456f9a; background: #5e87b0; color: #fff; font-weight: bold; text-shadow: 0 -1px 1px #254f7a; background-image: -moz-linear-gradient(top, #81a8ce, #5e87b0); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #81a8ce),color-stop(1, #5e87b0));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#81a8ce', EndColorStr='#5e87b0')"; }
.ui-bar-b, .ui-bar-b input, .ui-bar-b select, .ui-bar-b textarea, .ui-bar-b button { font-family: Helvetica, Arial, sans-serif; }
.ui-bar-b .ui-link-inherit { color: #fff; }
.ui-bar-b .ui-link { color: #7cc4e7; font-weight: bold; }

.ui-body-b { border: 1px solid #C6C6C6; background: #cccccc; color: #333333; text-shadow: 0 1px 0 #fff; font-weight: normal; background-image: -moz-linear-gradient(top, #e6e6e6, #cccccc); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #e6e6e6),color-stop(1, #cccccc));  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#e6e6e6', EndColorStr='#cccccc')"; }
.ui-body-b, .ui-body-b input, .ui-body-b select, .ui-body-b textarea, .ui-body-b button { font-family: Helvetica, Arial, sans-serif; }
.ui-body-b .ui-link-inherit { color: #333333; }
.ui-body-b .ui-link { color: #2489CE; font-weight: bold; }

.ui-btn-up-b { border: 1px solid #145072; background: #2567ab; font-weight: bold; color: #fff; cursor: pointer;  text-shadow: 0 -1px 1px #145072; text-decoration: none; background-image: -moz-linear-gradient(top, #4e89c5, #2567ab); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #5f9cc5),color-stop(1, #396b9e));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#4e89c5', EndColorStr='#2567ab')"; }
.ui-btn-up-b a.ui-link-inherit { color: #fff; }
.ui-btn-hover-b { border: 1px solid #00516e; background: #4b88b6; font-weight: bold; color: #fff;  text-shadow: 0 -1px 1px #014D68; background-image: -moz-linear-gradient(top, #72b0d4, #4b88b6); text-decoration: none; background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #72b0d4),color-stop(1, #4b88b6));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#72b0d4', EndColorStr='#4b88b6')";  }
.ui-btn-hover-b a.ui-link-inherit { color: #fff; }
.ui-btn-down-b { border: 1px solid #225377; background: #4e89c5; font-weight: bold; color: #fff; text-shadow: 0 -1px 1px #225377; background-image: -moz-linear-gradient(top, #396b9e, #4e89c5); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #396b9e),color-stop(1, #4e89c5));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#396b9e', EndColorStr='#4e89c5')"; }
.ui-btn-down-b a.ui-link-inherit { color: #fff; }
.ui-btn-up-b, .ui-btn-hover-b, .ui-btn-down-b { font-family: Helvetica, Arial, sans-serif; }




.ui-bar-c {  border: 1px solid #B3B3B3; background: #e9eaeb; color: #3E3E3E; font-weight: bold; text-shadow: 0 1px 1px #fff; background-image: -moz-linear-gradient(top, #f0f0f0, #e9eaeb); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #f0f0f0),color-stop(1, #e9eaeb));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#f0f0f0', EndColorStr='#e9eaeb')"; }
.ui-bar-c, .ui-bar-c input, .ui-bar-c select, .ui-bar-c textarea, .ui-bar-c button { font-family: Helvetica, Arial, sans-serif; }

.ui-body-c { border: 1px solid #B3B3B3; color: #333333; text-shadow: 0 1px 0 #fff; background: #f0f0f0; background-image: -moz-linear-gradient(top, #fff, #f0f0f0); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #fff),color-stop(1, #f0f0f0));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#ffffff', EndColorStr='#f0f0f0')";  }
.ui-body-c, .ui-body-c input, .ui-body-c select, .ui-body-c textarea, .ui-body-c button { font-family: Helvetica, Arial, sans-serif; }
.ui-body-c .ui-link-inherit { color: #333333; }
.ui-body-c .ui-link { color: #2489CE; font-weight: bold; }

.ui-btn-up-c { border: 1px solid #ccc; background: #eee; font-weight: bold; color: #444; cursor: pointer;  text-shadow: 0 1px 1px #f6f6f6; text-decoration: none; background-image: -moz-linear-gradient(top, #fdfdfd, #eeeeee); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #fdfdfd),color-stop(1, #eeeeee));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#fdfdfd', EndColorStr='#eeeeee')"; }
.ui-btn-up-c a.ui-link-inherit { color: #2F3E46; }

.ui-btn-hover-c { border: 1px solid #aaa; background: #f5f5f5; font-weight: bold; color: #111111; text-decoration: none; text-shadow: 0 1px 1px #fff; background-image: -moz-linear-gradient(top, #ffffff, #f5f5f5); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #ffffff),color-stop(1, #f5f5f5));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#ffffff', EndColorStr='#f5f5f5')"; }
.ui-btn-hover-c a.ui-link-inherit { color: #2F3E46; }

.ui-btn-down-c { border: 1px solid #808080; background: #fdfdfd; font-weight: bold; color: #111111; text-shadow: 0 1px 1px #ffffff; background-image: -moz-linear-gradient(top, #eeeeee, #fdfdfd); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #eeeeee),color-stop(1, #fdfdfd));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#eeeeee', EndColorStr='#fdfdfd')"; }
.ui-btn-down-c a.ui-link-inherit { color: #2F3E46; }
.ui-btn-up-c, .ui-btn-hover-c, .ui-btn-down-c { font-family: Helvetica, Arial, sans-serif; }


.ui-bar-d {  border: 1px solid #ccc; background: #bbb; color: #333; text-shadow: 0 1px 0 #eee; background-image: -moz-linear-gradient(top, #ddd, #bbb); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #ddd),color-stop(1, #bbb));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#ddd', EndColorStr='#bbb')"; }
.ui-bar-d, .ui-bar-d input, .ui-bar-d select, .ui-bar-d textarea, .ui-bar-d button { font-family: Helvetica, Arial, sans-serif; }
.ui-bar-d .ui-link-inherit { color: #333; }
.ui-bar-d .ui-link { color: #2489CE; font-weight: bold; }

.ui-body-d { border: 1px solid #ccc; color: #333333; text-shadow: 0 1px 0 #fff; background: #ffffff;  }
.ui-body-d, .ui-body-d input, .ui-body-d select, .ui-body-d textarea, .ui-body-d button { font-family: Helvetica, Arial, sans-serif; }
.ui-body-d .ui-link-inherit { color: #333333; }
.ui-body-d .ui-link { color: #2489CE; font-weight: bold; }

.ui-btn-up-d { border: 1px solid #ccc; background: #fff; font-weight: bold; color: #444; text-decoration: none; text-shadow: 0 1px 1px #fff; }
.ui-btn-up-d a.ui-link-inherit { color: #333; }
.ui-btn-hover-d { border: 1px solid #aaa; background: #eeeeee; font-weight: bold; color: #222; cursor: pointer;  text-shadow: 0 1px 1px #fff; text-decoration: none; background-image: -moz-linear-gradient(top, #fdfdfd, #eeeeee); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #fdfdfd),color-stop(1, #eeeeee));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#fdfdfd', EndColorStr='#eeeeee')"; }
.ui-btn-hover-d a.ui-link-inherit { color: #222; }

.ui-btn-down-d { border: 1px solid #aaaaaa; background: #ffffff; font-weight: bold; color: #111; text-shadow: 0 1px 1px #ffffff; background-image: -moz-linear-gradient(top, #eeeeee, #ffffff); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #eeeeee),color-stop(1, #ffffff));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#eeeeee', EndColorStr='#ffffff')"; }
.ui-btn-down-d a.ui-link-inherit { border: 1px solid #808080; background: #ced0d2; font-weight: bold; color: #111; text-shadow: none; background-image: -moz-linear-gradient(top, #cccccc, #eeeeee); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #cccccc),color-stop(1, #eeeeee));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#cccccc', EndColorStr='#eeeeee')"; }
.ui-btn-up-d, .ui-btn-hover-d, .ui-btn-down-d { font-family: Helvetica, Arial, sans-serif; }


.ui-bar-e {  border: 1px solid #F7C942; background: #fadb4e; color: #333; text-shadow: 0 1px 0 #fff; background-image: -moz-linear-gradient(top, #fceda7, #fadb4e); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #fceda7),color-stop(1, #fadb4e));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#fceda7', EndColorStr='#fadb4e')"; }
.ui-bar-e, .ui-bar-e input, .ui-bar-e select, .ui-bar-e textarea, .ui-bar-d button { font-family: Helvetica, Arial, sans-serif; }
.ui-bar-e .ui-link-inherit { color: #333; }
.ui-bar-e .ui-link { color: #2489CE; font-weight: bold; }

.ui-body-e { border: 1px solid #F7C942; color: #333333; text-shadow: 0 1px 0 #fff; background: #faeb9e; background-image: -moz-linear-gradient(top, #fff, #faeb9e); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #fff),color-stop(1, #faeb9e));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#ffffff', EndColorStr='#faeb9e')"; }
.ui-body-e, .ui-body-e input, .ui-body-e select, .ui-body-e textarea, .ui-body-e button { font-family: Helvetica, Arial, sans-serif; }
.ui-body-e .ui-link-inherit { color: #333333; }
.ui-body-e .ui-link { color: #2489CE; font-weight: bold; }


.ui-btn-up-e { border: 1px solid #F7C942; background: #fadb4e; font-weight: bold; color: #333; cursor: pointer;  text-shadow: 0 1px 1px #fe3; text-decoration: none; text-shadow: 0 1px 0 #fff; background-image: -moz-linear-gradient(top, #fceda7, #fadb4e); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #fceda7),color-stop(1, #fadb4e));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#fceda7', EndColorStr='#fadb4e')"; }
.ui-btn-up-e a.ui-link-inherit { color: #333; }

.ui-btn-hover-e { border: 1px solid #e79952; background: #fbe26f; font-weight: bold; color: #111; text-decoration: none; text-shadow: 0 1px 1px #fff; background-image: -moz-linear-gradient(top, #fcf0b5, #fbe26f); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #fcf0b5),color-stop(1, #fbe26f));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#fcf0b5', EndColorStr='#fbe26f')"; }

.ui-btn-hover-e a.ui-link-inherit { color: #333; }
.ui-btn-down-e { border: 1px solid #F7C942; background: #fceda7; font-weight: bold; color: #111; text-shadow: 0 1px 1px #ffffff; background-image: -moz-linear-gradient(top, #fadb4e, #fceda7); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #fadb4e),color-stop(1, #fceda7));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#fadb4e', EndColorStr='#fceda7')"; }
.ui-btn-down-e a.ui-link-inherit { color: #333; }
.ui-btn-up-e, .ui-btn-hover-e, .ui-btn-down-e { font-family: Helvetica, Arial, sans-serif; }


/* links within "buttons" */
a.ui-link-inherit { text-decoration: none !important; }

/* Active class used as the "on" state across all themes */
.ui-btn-active { border: 1px solid #155678; background: #4596ce; font-weight: bold; color: #fff; cursor: pointer;  text-shadow: 0 -1px 1px #145072; text-decoration: none; background-image: -moz-linear-gradient(top, #85bae4, #5393c5); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #85bae4),color-stop(1, #5393c5));   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#85bae4', EndColorStr='#5393c5')"; }
.ui-btn-active a.ui-link-inherit {  color: #fff; }

/* button inner top highlight */
.ui-btn-inner { border-top: 1px solid #fff; border-color: rgba(255,255,255,.3);  }


/* Container Corner radius */
.ui-corner-tl { -moz-border-radius-topleft: .6em; -webkit-border-top-left-radius: .6em; border-top-left-radius: .6em; }
.ui-corner-tr { -moz-border-radius-topright: .6em; -webkit-border-top-right-radius: .6em; border-top-right-radius: .6em; }
.ui-corner-bl { -moz-border-radius-bottomleft: .6em; -webkit-border-bottom-left-radius: .6em; border-bottom-left-radius: .6em; }
.ui-corner-br { -moz-border-radius-bottomright: .6em; -webkit-border-bottom-right-radius: .6em; border-bottom-right-radius: .6em; }
.ui-corner-top { -moz-border-radius-topleft: .6em; -webkit-border-top-left-radius: .6em; border-top-left-radius: .6em; -moz-border-radius-topright: .6em; -webkit-border-top-right-radius: .6em; border-top-right-radius: .6em; }
.ui-corner-bottom { -moz-border-radius-bottomleft: .6em; -webkit-border-bottom-left-radius: .6em; border-bottom-left-radius: .6em; -moz-border-radius-bottomright: .6em; -webkit-border-bottom-right-radius: .6em; border-bottom-right-radius: .6em; }
.ui-corner-right {  -moz-border-radius-topright: .6em; -webkit-border-top-right-radius: .6em; border-top-right-radius: .6em; -moz-border-radius-bottomright: .6em; -webkit-border-bottom-right-radius: .6em; border-bottom-right-radius: .6em; }
.ui-corner-left { -moz-border-radius-topleft: .6em; -webkit-border-top-left-radius: .6em; border-top-left-radius: .6em; -moz-border-radius-bottomleft: .6em; -webkit-border-bottom-left-radius: .6em; border-bottom-left-radius: .6em; }
.ui-corner-all { -moz-border-radius: .6em; -webkit-border-radius: .6em; border-radius: .6em; }



/* Interaction Cues
----------------------------------*/
.ui-disabled { cursor: default !important; opacity: .3; }

/* Icons
----------------------------------*/
/* .ui-icon { background-position: 50% 50%; background-repeat: no-repeat; background-color: #fff; background-color: rgba(0,0,0,.4);  -moz-border-radius: 9px; -webkit-border-radius: 9px; border-radius: 9px; } */

.ui-icon { background-image: url(images/icons-18-white.png); background-repeat: no-repeat; background-color: #666; background-color: rgba(0,0,0,.4);  -moz-border-radius: 9px; -webkit-border-radius: 9px; border-radius: 9px; }
.ui-icon-disc { background-color: #666; background-color: rgba(0,0,0,.3);  -moz-border-radius: 9px; -webkit-border-radius: 9px; border-radius: 9px; }

/* alt color */
.ui-icon-black { background-image: url(images/icons-18-black.png); }
.ui-icon-black-disc { background-color: #fff; background-color: rgba(255,255,255,.3);  -moz-border-radius: 9px; -webkit-border-radius: 9px; border-radius: 9px; }

/* retina */
@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (max--moz-device-pixel-ratio: 2) {
    .ui-icon { background-image: url(images/icons-36-white.png); background-size: 558px 18px; }
	.ui-icon-black { background-image: url(images/icons-36-black.png); }
}

/*plus minus*/
.ui-icon-plus { background-position: -0 0; }
.ui-icon-minus { background-position: -36px 0; }

/* delete/close */
.ui-icon-delete { background-position: -72px 0; }

/*arrows*/
.ui-icon-arrow-r { background-position: -108px 0; }
.ui-icon-arrow-l { background-position: -144px 0; }
.ui-icon-arrow-u { background-position: -180px 0; }
.ui-icon-arrow-d { background-position: -216px 0; }

.ui-icon-check { background-position: -252px 0; }
.ui-icon-gear { background-position: -288px 0; }
.ui-icon-refresh { background-position: -324px 0; }
.ui-icon-forward { background-position: -360px 0; }
.ui-icon-back { background-position: -396px 0; }

.ui-icon-grid { background-position: -432px 0; }
.ui-icon-star { background-position: -468px 0; }
.ui-icon-alert { background-position: -504px 0; }
.ui-icon-info { background-position: -540px 0; }

/*checks,radios*/
.ui-icon-checkbox-off,
.ui-icon-checkbox-on,
.ui-icon-radio-off,
.ui-icon-radio-on { background-color: transparent; -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0; background-size: 20px 20px; }

.ui-icon-checkbox-off { background-image: url(images/form-check-off.png);  }
.ui-icon-checkbox-on { background-image: url(images/form-check-on.png);  }
.ui-icon-radio-off { background-image: url(images/form-radio-off.png);}
.ui-icon-radio-on { background-image: url(images/form-radio-on.png);  }

.ui-icon-search { background-image: url(images/icon-search-black.png); background-size: 16px 16px; }

/* loading icon */
.ui-icon-loading { background-image: url(images/ajax-loader.png); width: 40px; height: 40px;  -moz-border-radius: 20px; -webkit-border-radius: 20px; border-radius: 20px; background-size: 35px 35px; }

/* btn Corner radius */
.ui-btn-corner-tl { -moz-border-radius-topleft: 1em; -webkit-border-top-left-radius: 1em; border-top-left-radius: 1em; }
.ui-btn-corner-tr { -moz-border-radius-topright: 1em; -webkit-border-top-right-radius: 1em; border-top-right-radius: 1em; }
.ui-btn-corner-bl { -moz-border-radius-bottomleft: 1em; -webkit-border-bottom-left-radius: 1em; border-bottom-left-radius: 1em; }
.ui-btn-corner-br { -moz-border-radius-bottomright: 1em; -webkit-border-bottom-right-radius: 1em; border-bottom-right-radius: 1em; }
.ui-btn-corner-top { -moz-border-radius-topleft: 1em; -webkit-border-top-left-radius: 1em; border-top-left-radius: 1em; -moz-border-radius-topright: 1em; -webkit-border-top-right-radius: 1em; border-top-right-radius: 1em; }
.ui-btn-corner-bottom { -moz-border-radius-bottomleft: 1em; -webkit-border-bottom-left-radius: 1em; border-bottom-left-radius: 1em; -moz-border-radius-bottomright: 1em; -webkit-border-bottom-right-radius: 1em; border-bottom-right-radius: 1em; }
.ui-btn-corner-right {  -moz-border-radius-topright: 1em; -webkit-border-top-right-radius: 1em; border-top-right-radius: 1em; -moz-border-radius-bottomright: 1em; -webkit-border-bottom-right-radius: 1em; border-bottom-right-radius: 1em; }
.ui-btn-corner-left { -moz-border-radius-topleft: 1em; -webkit-border-top-left-radius: 1em; border-top-left-radius: 1em; -moz-border-radius-bottomleft: 1em; -webkit-border-bottom-left-radius: 1em; border-bottom-left-radius: 1em; }
.ui-btn-corner-all { -moz-border-radius: 1em; -webkit-border-radius: 1em; border-radius: 1em;}

/* radius clip */
.ui-corner-tl, .ui-corner-tr, .ui-corner-bl, 
.ui-corner-br, .ui-corner-top, .ui-corner-bottom, 
.ui-corner-right, .ui-corner-left, .ui-corner-all,
.ui-btn-corner-tl, .ui-btn-corner-tr, .ui-btn-corner-bl, 
.ui-btn-corner-br, .ui-btn-corner-top, .ui-btn-corner-bottom, 
.ui-btn-corner-right, .ui-btn-corner-left, .ui-btn-corner-all {
  -webkit-background-clip: padding-box;
     -moz-background-clip: padding-box;
          background-clip: padding-box;
}

/* Overlays */
.ui-overlay { background: #666; opacity: .5; filter:Alpha(Opacity=50); position: absolute;  width: 100%; height: 100%; }
.ui-overlay-shadow {  -moz-box-shadow: 0px 0px 12px rgba(0,0,0,.6); -webkit-box-shadow: 0px 0px 12px rgba(0,0,0,.6); box-shadow: 0px 0px 12px rgba(0,0,0,.6); }

.ui-shadow { -moz-box-shadow: 0px 1px 4px rgba(0,0,0,.3); -webkit-box-shadow: 0px 1px 4px rgba(0,0,0,.3); box-shadow: 0px 1px 4px rgba(0,0,0,.3); }
.ui-bar-a .ui-shadow, .ui-bar-b .ui-shadow , .ui-bar-c .ui-shadow  { -moz-box-shadow: 0px 1px 0 rgba(255,255,255,.3); -webkit-box-shadow: 0px 1px 0 rgba(255,255,255,.3); box-shadow: 0px 1px 0 rgba(255,255,255,.3); }
.ui-shadow-inset { -moz-box-shadow: inset 0px 1px 4px rgba(0,0,0,.2); -webkit-box-shadow: inset 0px 1px 4px rgba(0,0,0,.2); box-shadow: inset 0px 1px 4px rgba(0,0,0,.2); }
.ui-icon-shadow { -moz-box-shadow: 0px 1px 0 rgba(255,255,255,.4); -webkit-box-shadow: 0px 1px 0 rgba(255,255,255,.4); box-shadow: 0px 1px 0 rgba(255,255,255,.4);  }

/* set focus state last */
.ui-focus { outline-width: 0;  -moz-box-shadow: 0px 0px 12px #387bbe; -webkit-box-shadow: 0px 0px 12px #387bbe; box-shadow: 0px 0px 12px #387bbe; }

/* unset box shadow in browsers that don't do it right */
.ui-mobile-nosupport-boxshadow * { -moz-box-shadow: none !important; -webkit-box-shadow: none !important; box-shadow: none !important; }
.ui-mobile-nosupport-boxshadow .ui-focus { outline-width: 2px; }
/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
* Note: Code is in draft form and is subject to change 
*/

/* some unsets - more probably needed */
.ui-mobile fieldset, .ui-page { padding: 0; margin: 0; }
.ui-mobile a img, .ui-mobile fieldset { border: 0; }

/* responsive page widths */
.ui-mobile-viewport {  margin: 0; overflow-x: hidden; -webkit-text-size-adjust: none; -ms-text-size-adjust:none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }

/*orientations from js are available */
.portrait {  }
.landscape {  }

/* "page" containers - full-screen views, one should always be in view post-pageload */
.ui-page { top: 0; left: 0; width: 100%; min-height: 100%; position: absolute; display: none; border: 0; } 
.ui-page-active { display: block; overflow: visible; min-height: 100%; }

/* loading screen */
.ui-loading .ui-mobile-viewport { overflow: hidden !important; }
.ui-loading .ui-loader { display: block; }
.ui-loading .ui-page { overflow: hidden;  }
.ui-loader { display: none; position: absolute; opacity: .85; z-index: 10; top: 75px; left: 50%; width: 200px; margin-left: -130px; padding: 20px 30px; }
.ui-loader h1 { font-size: 15px; text-align: center; }
.ui-loader .ui-icon { position: static; display: block; opacity: .9; margin: 0 auto; width: 35px; height: 35px; background-color: transparent; }

/*fouc*/
.ui-mobile-rendering > * { visibility: hidden; }

/*headers, content panels*/
.ui-bar, .ui-body { position: relative; padding: .4em 15px;  overflow: hidden; display: block;  clear:both;  }
.ui-bar { font-size: 16px; margin: 0; }
.ui-bar h1, .ui-bar h2, .ui-bar h3, .ui-bar h4, .ui-bar h5, .ui-bar h6 { margin: 0; padding: 0; font-size: 16px; display: inline-block; }

.ui-header, .ui-footer { display: block; }
.ui-page .ui-header, .ui-page .ui-footer { position: relative; }
.ui-header .ui-btn-left { position: absolute; left: 10px; top: .4em;  }
.ui-header .ui-title, .ui-footer .ui-title { text-align: center; font-size: 16px; display: block; margin: .6em 90px .8em;  padding: 0;  text-overflow: ellipsis; overflow: hidden; white-space: nowrap; outline: 0 !important; }
.ui-header .ui-btn-right { position: absolute; right: 10px; top: .4em; }

/*content area*/
.ui-content { border-width: 0; overflow: visible; overflow-x: hidden; padding: 15px; }
.ui-page-fullscreen .ui-content { padding:0; }

/* icons sizing */
.ui-icon { width: 18px; height: 18px; }

/* fullscreen class on ui-content div */
.ui-fullscreen {  }
.ui-fullscreen img { max-width: 100%; }

/* non-js content hiding */
.ui-nojs { position: absolute; left: -9999px; }
/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
.spin  {
	-webkit-transform: rotate(360deg);
	-webkit-animation-name: spin;
	-webkit-animation-duration: 1s;
	-webkit-animation-iteration-count:  infinite;
}
@-webkit-keyframes spin {
	from {-webkit-transform: rotate(0deg);}
  	to {-webkit-transform: rotate(360deg);}
}

/* Transitions from jQtouch (with small modifications): http://www.jqtouch.com/
Built by David Kaneda and maintained by Jonathan Stark.
*/
.in, .out {
	-webkit-animation-timing-function: ease-in-out;
	-webkit-animation-duration: 350ms;
}

.slide.in {
	-webkit-transform: translateX(0);
	-webkit-animation-name: slideinfromright;
}

.slide.out {
	-webkit-transform: translateX(-100%);
	-webkit-animation-name: slideouttoleft;
}

.slide.in.reverse {
	-webkit-transform: translateX(0);
	-webkit-animation-name: slideinfromleft;
}

.slide.out.reverse {
	-webkit-transform: translateX(100%);
	-webkit-animation-name: slideouttoright;
}

.slideup.in {
	-webkit-transform: translateY(0);
	-webkit-animation-name: slideinfrombottom;
	z-index: 10;
}

.slideup.out {
	-webkit-animation-name: dontmove;
	z-index: 0;
}

.slideup.out.reverse {
	-webkit-transform: translateY(100%);
	z-index: 10;
	-webkit-animation-name: slideouttobottom;
}

.slideup.in.reverse {
	z-index: 0;
	-webkit-animation-name: dontmove;
}
.slidedown.in {
	-webkit-transform: translateY(0);
	-webkit-animation-name: slideinfromtop;
	z-index: 10;
}

.slidedown.out {
	-webkit-animation-name: dontmove;
	z-index: 0;
}

.slidedown.out.reverse {
	-webkit-transform: translateY(-100%);
	z-index: 10;
	-webkit-animation-name: slideouttotop;
}

.slidedown.in.reverse {
	z-index: 0;
	-webkit-animation-name: dontmove;
}

@-webkit-keyframes slideinfromright {
    from { -webkit-transform: translateX(100%); }
    to { -webkit-transform: translateX(0); }
}

@-webkit-keyframes slideinfromleft {
    from { -webkit-transform: translateX(-100%); }
    to { -webkit-transform: translateX(0); }
}

@-webkit-keyframes slideouttoleft {
    from { -webkit-transform: translateX(0); }
    to { -webkit-transform: translateX(-100%); }
}

@-webkit-keyframes slideouttoright {
    from { -webkit-transform: translateX(0); }
    to { -webkit-transform: translateX(100%); }
}


@-webkit-keyframes slideinfromtop {
    from { -webkit-transform: translateY(-100%); }
    to { -webkit-transform: translateY(0); }
}

@-webkit-keyframes slideinfrombottom {
    from { -webkit-transform: translateY(100%); }
    to { -webkit-transform: translateY(0); }
}

@-webkit-keyframes slideouttobottom {
    from { -webkit-transform: translateY(0); }
    to { -webkit-transform: translateY(100%); }
}

@-webkit-keyframes slideouttotop {
    from { -webkit-transform: translateY(0); }
    to { -webkit-transform: translateY(-100%); }
}
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
}

@-webkit-keyframes fadeout {
    from { opacity: 1; }
    to { opacity: 0; }
}

.fade.in {
	opacity: 1;
	z-index: 10;
	-webkit-animation-name: fadein;
}
.fade.out {
	z-index: 0;
}

/* The properties in this body rule are only necessary for the 'flip' transition.
 * We need specify the perspective to create a projection matrix. This will add
 * some depth as the element flips. The depth number represents the distance of
 * the viewer from the z-plane. According to the CSS3 spec, 1000 is a moderate
 * value.
 */
.ui-mobile-viewport-transitioning {
	-webkit-perspective: 1000;
	position: absolute;
}

.ui-mobile-viewport-transitioning,
.ui-mobile-viewport-transitioning .ui-page {
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.flip {
	-webkit-animation-duration: .65s;
	-webkit-backface-visibility:hidden;
	-webkit-transform:translateX(0); /* Needed to work around an iOS 3.1 bug that causes listview thumbs to disappear when -webkit-visibility:hidden is used. */
}

.flip.in {
	-webkit-transform: rotateY(0) scale(1);
	-webkit-animation-name: flipinfromleft;
}

.flip.out {
	-webkit-transform: rotateY(-180deg) scale(.8);
	-webkit-animation-name: flipouttoleft;
}

/* Shake it all about */

.flip.in.reverse {
	-webkit-transform: rotateY(0) scale(1);
	-webkit-animation-name: flipinfromright;
}

.flip.out.reverse {
	-webkit-transform: rotateY(180deg) scale(.8);
	-webkit-animation-name: flipouttoright;
}

@-webkit-keyframes flipinfromright {
    from { -webkit-transform: rotateY(-180deg) scale(.8); }
    to { -webkit-transform: rotateY(0) scale(1); }
}

@-webkit-keyframes flipinfromleft {
    from { -webkit-transform: rotateY(180deg) scale(.8); }
    to { -webkit-transform: rotateY(0) scale(1); }
}

@-webkit-keyframes flipouttoleft {
    from { -webkit-transform: rotateY(0) scale(1); }
    to { -webkit-transform: rotateY(-180deg) scale(.8); }
}

@-webkit-keyframes flipouttoright {
    from { -webkit-transform: rotateY(0) scale(1); }
    to { -webkit-transform: rotateY(180deg) scale(.8); }
}


/* Hackish, but reliable. */

@-webkit-keyframes dontmove {
    from { opacity: 1; }
    to { opacity: 1; }
}

.pop {
	-webkit-transform-origin: 50% 50%;
}

.pop.in {
	-webkit-transform: scale(1);
    opacity: 1;
	-webkit-animation-name: popin;
	z-index: 10;
}

.pop.out.reverse {
	-webkit-transform: scale(.2);
	opacity: 0;
	-webkit-animation-name: popout;
	z-index: 10;
}

.pop.in.reverse {
	z-index: 0;
	-webkit-animation-name: dontmove;
}

@-webkit-keyframes popin {
    from {
        -webkit-transform: scale(.2);
        opacity: 0;
    }
    to {
        -webkit-transform: scale(1);
        opacity: 1;
    }
}

@-webkit-keyframes popout {
    from {
        -webkit-transform: scale(1);
        opacity: 1;
    }
    to {
        -webkit-transform: scale(.2);
        opacity: 0;
    }
}/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/

/* content configurations. */
.ui-grid-a, .ui-grid-b, .ui-grid-c, .ui-grid-d { overflow: hidden; }
.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d, .ui-block-e { margin: 0; padding: 0; border: 0; float: left; }

/* grid a: 50/50 */
.ui-grid-a .ui-block-a, .ui-grid-a .ui-block-b { width: 50%; }
.ui-grid-a .ui-block-a { clear: left; }

/* grid b: 33/33/33 */
.ui-grid-b .ui-block-a, .ui-grid-b .ui-block-b, .ui-grid-b .ui-block-c { width: 33.333%; }
.ui-grid-b .ui-block-a { clear: left; }

/* grid c: 25/25/25/25 */
.ui-grid-c .ui-block-a, .ui-grid-c .ui-block-b, .ui-grid-c .ui-block-c, .ui-grid-c .ui-block-d { width: 25%; }
.ui-grid-c .ui-block-a { clear: left; }

/* grid d: 20/20/20/20/20 */
.ui-grid-d .ui-block-a, .ui-grid-d .ui-block-b, .ui-grid-d .ui-block-c, .ui-grid-d .ui-block-d, .ui-grid-d .ui-block-e { width: 20%; }
.ui-grid-d .ui-block-a { clear: left; }/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
/* fixed page header & footer configuration */
.ui-header, .ui-footer, .ui-page-fullscreen .ui-header, .ui-page-fullscreen .ui-footer  { position: absolute;  overflow: hidden; width: 100%; border-left-width: 0; border-right-width: 0; }
.ui-header-fixed, .ui-footer-fixed {
	z-index: 1000;
	-webkit-transform: translateZ(0); /* Force header/footer rendering to go through the same rendering pipeline as native page scrolling. */
}
.ui-footer-duplicate, .ui-page-fullscreen .ui-fixed-inline { display: none; }
.ui-page-fullscreen .ui-header, .ui-page-fullscreen .ui-footer { opacity: .9; }
/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
.ui-navbar { overflow: hidden;  }
.ui-navbar ul, .ui-navbar-expanded ul { list-style:none; padding: 0; margin: 0; position: relative; display: block; border: 0;}
.ui-navbar-collapsed ul { float: left; width: 75%; margin-right: -2px; }
.ui-navbar-collapsed .ui-navbar-toggle { float: left; width: 25%; }
.ui-navbar li.ui-navbar-truncate { position: absolute; left: -99999px; top: -99999px; }
.ui-navbar li .ui-btn, .ui-navbar .ui-navbar-toggle .ui-btn { display: block; font-size: 12px; text-align: center; margin: 0; outline: none; border-right-width: 0; }
.ui-navbar li .ui-btn {  margin-right: -1px; }
.ui-navbar li .ui-btn:last-child { margin-right: 0; }
.ui-header .ui-navbar li .ui-btn, .ui-header .ui-navbar .ui-navbar-toggle .ui-btn,
.ui-footer .ui-navbar li .ui-btn, .ui-footer .ui-navbar .ui-navbar-toggle .ui-btn { border-top-width: 0; border-bottom-width: 0; }
.ui-navbar .ui-btn-inner { padding-left: 2px; padding-right: 2px; }
.ui-navbar-noicons li .ui-btn .ui-btn-inner, .ui-navbar-noicons .ui-navbar-toggle .ui-btn-inner { padding-top: .8em; padding-bottom: .9em; }
/*expanded page styles*/
.ui-navbar-expanded .ui-btn { margin: 0; font-size: 14px; }
.ui-navbar-expanded .ui-btn-inner { padding-left: 5px; padding-right: 5px;  }
.ui-navbar-expanded .ui-btn-icon-top .ui-btn-inner { padding: 45px 5px 15px; text-align: center; }
.ui-navbar-expanded .ui-btn-icon-top .ui-icon { top: 15px; }
.ui-navbar-expanded .ui-btn-icon-bottom .ui-btn-inner { padding: 15px 5px 45px; text-align: center; }
.ui-navbar-expanded .ui-btn-icon-bottom .ui-icon { bottom: 15px; }
.ui-navbar-expanded li .ui-btn .ui-btn-inner { min-height: 2.5em; }
.ui-navbar-expanded .ui-navbar-noicons .ui-btn .ui-btn-inner { padding-top: 1.8em; padding-bottom: 1.9em; }/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
.ui-btn { display: block; text-align: center; cursor:pointer;  position: relative; margin: .5em 5px; padding: 0; }
.ui-btn:focus, .ui-btn a:focus { outline: none; }
.ui-header .ui-btn, .ui-footer .ui-btn, .ui-bar .ui-btn { display: inline-block; font-size: 13px; margin: 0; }
.ui-btn-inline { display: inline-block; }
.ui-btn-inner { padding: .6em 25px; display: block; height: 100%; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; position: relative; }
.ui-header .ui-btn-inner, .ui-footer .ui-btn-inner, .ui-bar .ui-btn-inner { padding: .4em 8px .5em; }
.ui-btn-icon-notext { display: inline-block; width: 20px; height: 20px; padding: 1px 0px 1px 2px; text-indent: -9999px; }
.ui-btn-icon-notext .ui-btn-inner { padding: 0; }
.ui-btn-icon-notext .ui-btn-text { position: absolute; left: -999px; }
.ui-btn-icon-left .ui-btn-inner { padding-left: 33px; }
.ui-header .ui-btn-icon-left .ui-btn-inner,
.ui-footer .ui-btn-icon-left .ui-btn-inner,
.ui-bar .ui-btn-icon-left .ui-btn-inner { padding-left: 27px; }
.ui-btn-icon-right .ui-btn-inner { padding-right: 33px; }
.ui-header .ui-btn-icon-right .ui-btn-inner,
.ui-footer .ui-btn-icon-right .ui-btn-inner,
.ui-bar .ui-btn-icon-right .ui-btn-inner { padding-right: 27px; }
.ui-btn-icon-top .ui-btn-inner { padding-top: 33px; }
.ui-header .ui-btn-icon-top .ui-btn-inner,
.ui-footer .ui-btn-icon-top .ui-btn-inner,
.ui-bar .ui-btn-icon-top .ui-btn-inner { padding-top: 27px; }
.ui-btn-icon-bottom .ui-btn-inner { padding-bottom: 33px; }
.ui-header .ui-btn-icon-bottom .ui-btn-inner,
.ui-footer .ui-btn-icon-bottom .ui-btn-inner,
.ui-bar .ui-btn-icon-bottom .ui-btn-inner { padding-bottom: 27px; }

/*btn icon positioning*/
.ui-btn-icon-notext .ui-icon { display: block; }
.ui-btn-icon-left .ui-icon, .ui-btn-icon-right .ui-icon { position: absolute; top: 50%; margin-top: -9px; }
.ui-btn-icon-top .ui-icon, .ui-btn-icon-bottom .ui-icon { position: absolute; left: 50%;  margin-left: -9px; }
.ui-btn-icon-left .ui-icon { left: 10px; }
.ui-btn-icon-right .ui-icon {right: 10px; }
.ui-header .ui-btn-icon-left .ui-icon,
.ui-footer .ui-btn-icon-left .ui-icon,
.ui-bar .ui-btn-icon-left .ui-icon { left: 4px; }
.ui-header .ui-btn-icon-right .ui-icon,
.ui-footer .ui-btn-icon-right .ui-icon,
.ui-bar .ui-btn-icon-right .ui-icon { right: 4px; }
.ui-header .ui-btn-icon-top .ui-icon,
.ui-footer .ui-btn-icon-top .ui-icon,
.ui-bar .ui-btn-icon-top .ui-icon { top: 4px; }
.ui-header .ui-btn-icon-bottom .ui-icon,
.ui-footer .ui-btn-icon-bottom .ui-icon,
.ui-bar .ui-btn-icon-bottom .ui-icon { bottom: 4px; }
.ui-btn-icon-top .ui-icon { top: 5px; }
.ui-btn-icon-bottom .ui-icon { bottom: 5px; }
/*hiding native button,inputs */
.ui-btn-hidden {  position: absolute; left: -9999px; }
/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
.ui-collapsible-contain { margin: .5em 0; }
.ui-collapsible-heading { font-size: 16px; display: block; margin: 0 -8px; padding: 0; border-width: 0 0 1px 0; position: relative; }
.ui-collapsible-heading a { text-align: left; margin: 0;  }
.ui-collapsible-heading a .ui-btn-inner { padding-left: 40px; }
.ui-collapsible-heading a span.ui-btn { position: absolute; left: 6px; top: 50%; margin: -12px 0 0 0; width: 20px; height: 20px; padding: 1px 0px 1px 2px; text-indent: -9999px; }
.ui-collapsible-heading a span.ui-btn .ui-btn-inner { padding: 0; }
.ui-collapsible-heading a span.ui-btn .ui-icon { left: 0; margin-top: -10px; }
.ui-collapsible-heading-status { position:absolute; left:-99999px; }
.ui-collapsible-content {  display: block; padding: 10px 0 10px 8px; }
.ui-collapsible-content-collapsed { display: none; }

.ui-collapsible-set { margin: .5em 0; }
.ui-collapsible-set .ui-collapsible-contain { margin: -1px 0 0; }/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
.ui-controlgroup, fieldset.ui-controlgroup { padding: 0; margin: .5em 0 1em; }
.ui-bar .ui-controlgroup { margin: 0 .3em; }
.ui-controlgroup-label { font-size: 16px; line-height: 1.4; font-weight: normal; margin: 0 0 .3em; }
.ui-controlgroup-controls { display: block; width: 95%;}
.ui-controlgroup li { list-style: none; }
.ui-controlgroup-vertical .ui-btn,
.ui-controlgroup-vertical .ui-checkbox, .ui-controlgroup-vertical .ui-radio { margin: 0; border-bottom-width: 0;  }
.ui-controlgroup-vertical .ui-controlgroup-last { border-bottom-width: 1px; }
.ui-controlgroup-horizontal { padding: 0; }
.ui-controlgroup-horizontal .ui-btn,
.ui-controlgroup-horizontal .ui-checkbox, .ui-controlgroup-horizontal .ui-radio { margin: 0 -5px 0 0; display: inline-block;  }
.ui-controlgroup-horizontal .ui-checkbox .ui-btn, .ui-controlgroup-horizontal .ui-radio .ui-btn,
.ui-controlgroup-horizontal .ui-checkbox:last-child, .ui-controlgroup-horizontal .ui-radio:last-child { margin-right: 0; }
.ui-controlgroup-horizontal .ui-controlgroup-last { margin-right: 0; }
.ui-controlgroup .ui-checkbox label, .ui-controlgroup .ui-radio label { font-size: 16px;  }
/* conflicts with listview..
.ui-controlgroup .ui-btn-icon-notext { width: 30px; height: 30px; text-indent: -9999px; }
.ui-controlgroup .ui-btn-icon-notext .ui-btn-inner {  padding: 5px 6px 5px 5px; }
*/

.min-width-480px .ui-controlgroup-label { vertical-align: top; display: inline-block;  width: 20%;  margin: 0 2% 0 0;  }
.min-width-480px .ui-controlgroup-controls { width: 60%; display: inline-block; } /*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
.ui-dialog .ui-header, .ui-dialog .ui-content,  .ui-dialog .ui-footer { margin: 15px; position: relative; }
.ui-dialog .ui-header, .ui-dialog .ui-footer { z-index: 10; width: auto; }
.ui-dialog .ui-content, .ui-dialog .ui-footer { margin-top: -15px;  }/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
.ui-checkbox, .ui-radio { position:relative;  margin: .2em 0 .5em;  }
.ui-checkbox .ui-btn, .ui-radio .ui-btn { margin: 0; text-align: left; }
.ui-checkbox .ui-btn-icon-left .ui-btn-inner,.ui-radio .ui-btn-icon-left .ui-btn-inner { padding-left: 45px; }
.ui-checkbox .ui-btn-icon-right .ui-btn-inner, .ui-radio .ui-btn-icon-right .ui-btn-inner { padding-right: 45px; }
.ui-checkbox .ui-btn-icon-left .ui-icon, .ui-radio .ui-btn-icon-left .ui-icon {left: 15px; }
.ui-checkbox .ui-btn-icon-right .ui-icon, .ui-radio .ui-btn-icon-right .ui-icon {right: 15px; }
/* input, label positioning */
.ui-checkbox input,.ui-radio input { position:absolute; left:20px; top:50%; width: 10px; height: 10px;  margin:-5px 0 0 0; outline: 0 !important; }/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
.ui-field-contain { background: none; padding: 1.5em 0; margin: 0; border-bottom-width: 1px; overflow: visible; }
.ui-field-contain:first-child { border-top-width: 0; }
@media screen and (max-width: 480px){ 
	.ui-field-contain { border-width: 0; padding: 0; margin: 1em 0; }
}/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
.ui-select { display: block; }
.ui-select select { position: absolute; left: -99999px; }
.ui-select .ui-btn-icon-right .ui-btn-inner { padding-right: 45px; } 
.ui-select .ui-btn-icon-right .ui-icon { right: 15px;  }

/* labels */
label.ui-select { font-size: 16px; line-height: 1.4;  font-weight: normal; margin: 0 0 .3em; display: block; }

/*listbox*/
.ui-listbox { position: absolute; padding: 0; z-index: 100 !important; width: 80%; max-width: 350px; padding: 6px; }
.ui-listbox .ui-listview { margin: 0;
 }
.ui-listbox-hidden { top: -999999px; left: -99999px; }
.ui-listbox-screen { position: absolute; top: 0; left: 0; width: 100%; height: 100%;  z-index: 99; }
.ui-screen-hidden, .ui-listbox-list .ui-li .ui-icon { display: none; }
.ui-listbox-list .ui-btn-active .ui-icon { display: block; }

/*used in listbox - to be removed/replaced with page-style hiding*/
.ui-helper-hidden,.ui-mobile .ui-content-hidden { display: none; }

.min-width-480px label.ui-select { display: inline-block;  width: 20%;  margin: 0 2% 0 0; }
.min-width-480px .ui-select { width: 60%; display: inline-block; } /*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
label.ui-input-text { font-size: 16px; line-height: 1.4; display: block; font-weight: normal; margin: 0 0 .3em; }
input.ui-input-text, textarea.ui-input-text { background-image: none; padding: .4em; line-height: 1.4; font-size: 16px; display: block; width: 95%; }
textarea.ui-input-text { height: 50px; -webkit-transition: height 200ms linear; -moz-transition: height 200ms linear; -o-transition: height 200ms linear; transition: height 200ms linear; }
.ui-input-search { padding: 0 30px; width: 77%; background-position: 8px 50%; background-repeat: no-repeat; position: relative; }
.ui-input-search input.ui-input-text { border: none; width: 98%; padding: .4em 0; margin: 0; display: block; background: transparent none; outline: 0 !important; }
.ui-input-search .ui-input-clear { position: absolute; right: 2px; top: 50%; margin-top: -12px; }
.ui-input-search .ui-input-clear-hidden { display: none; }

/* orientation adjustments - incomplete!*/
.min-width-480px label.ui-input-text  { vertical-align: top;   }
.min-width-480px label.ui-input-text { display: inline-block;  width: 20%;  margin: 0 2% 0 0; }
.min-width-480px input.ui-input-text, 
.min-width-480px textarea.ui-input-text, 
.min-width-480px .ui-input-search { width: 60%; display: inline-block; } 
.min-width-480px .ui-input-search { width: 50%; }/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
.ui-listview { margin: 0; counter-reset: listnumbering; }
.ui-content .ui-listview { margin: -15px; }
.ui-content .ui-listview-inset { margin: 1em 0;  }
.ui-listview, .ui-li { list-style:none; padding:0; zoom: 1; }
.ui-li { display: block; margin:0; position: relative; overflow: hidden; text-align: left; border-width: 0; border-top-width: 1px; }
.ui-li .ui-btn-text { text-overflow: ellipsis; overflow: hidden; white-space: nowrap;  }
.ui-li-divider, .ui-li-static { padding: .5em 15px; font-size: 14px; font-weight: bold; counter-reset: listnumbering;  }
ol.ui-listview .ui-link-inherit:before, .ui-li-dec { font-size: .8em; display: inline-block; padding-right: .3em; font-weight: normal;counter-increment: listnumbering; content: counter(listnumbering) ". "; }
ol.ui-listview .ui-li-jsnumbering:before { content: "" !important; } /* to avoid chance of duplication */
.ui-listview-inset .ui-li { border-right-width: 1px; border-left-width: 1px; }
.ui-li:last-child { border-bottom-width: 1px; }
.ui-li .ui-btn-inner { display: block; position: relative; padding: .7em 75px .7em 15px; }
.ui-li-has-thumb .ui-btn-inner { min-height: 60px; padding-left: 100px; }
.ui-li-has-icon .ui-btn-inner {  min-height: 20px; padding-left: 40px; }
.ui-li-heading { font-size: 16px; font-weight: bold; display: block; margin: .6em 0; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;  }
.ui-li-desc {  font-size: 12px; font-weight: normal; display: block; margin: -.5em 0 .6em; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.ui-li-thumb, .ui-li-icon { position: absolute; left: 1px; top: 0; max-height: 80px; max-width: 80px; }
.ui-li-icon { max-height: 40px; max-width: 40px; left: 10px; top: .9em; }
.ui-li-thumb, .ui-li-icon, .ui-li-content { float: left; margin-right: 10px; }

.ui-li-aside { float: right; width: 50%; text-align: right; margin: .3em 0; }
.min-width-480px .ui-li-aside { width: 45%; }
.ui-li-has-alt .ui-btn-inner { padding-right: 95px; }
.ui-li-count { position: absolute; font-size: 11px; font-weight: bold; padding: .2em .5em; top: 50%; margin-top: -.9em; right: 38px; }
.ui-li-divider .ui-li-count { right: 10px; }
.ui-li-has-alt .ui-li-count { right: 55px; }
.ui-li-link-alt { position: absolute; width: 40px; height: 100%; border-width: 0; border-left-width: 1px; top: 0; right: 0; margin: 0; padding: 0; }
.ui-li-link-alt .ui-btn { overflow: hidden; position: absolute; right: 8px; top: 50%; margin: -11px 0 0 0; border-bottom-width: 1px; }
.ui-li-link-alt .ui-btn-inner { padding: 0; position: static; }
.ui-li-link-alt .ui-btn .ui-icon { right: 50%; margin-right: -9px;  }

.ui-listview-filter { border-width: 0; overflow: hidden; margin: -15px -15px 15px -15px }
.ui-listview-filter .ui-input-search { margin: 5px; width: auto; display: block; }

/* Odd iPad positioning issue. */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    .ui-li .ui-btn-text { overflow:  visible; }
}/*
* jQuery Mobile Framework
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) or GPL (GPL-LICENSE.txt) licenses.
*/
label.ui-slider { display: block; }
input.ui-slider-input, .min-width-480px input.ui-slider-input { display: inline-block; width: 40px; }
select.ui-slider-switch { display: none; }
div.ui-slider { position: relative; display: inline-block; overflow: visible; height: 15px; padding: 0; margin: 0 2% 0 20px; top: 4px; width: 66%; }
a.ui-slider-handle { position: absolute; z-index: 10;  top: 50%; width: 28px; height: 28px; margin-top: -15px; margin-left: -15px; }
a.ui-slider-handle .ui-btn-inner { padding-left: 0; padding-right: 0; }
.min-width-480px label.ui-slider { display: inline-block;  width: 20%;  margin: 0 2% 0 0; }
.min-width-480px div.ui-slider { width: 45%; }

div.ui-slider-switch { height: 32px;  overflow: hidden; margin-left: 0; }
div.ui-slider-inneroffset { margin-left: 50%; position: absolute; top: 1px; height: 100%; width: 50%; }
div.ui-slider-handle-snapping { -webkit-transition: left 100ms linear; }
div.ui-slider-labelbg { position: absolute; top:0; margin: 0; border-width: 0; }
div.ui-slider-switch div.ui-slider-labelbg-a { width: 60%; height: 100%; left: 0; }
div.ui-slider-switch div.ui-slider-labelbg-b { width: 60%; height: 100%; right: 0; }
.ui-slider-switch-a div.ui-slider-labelbg-a, .ui-slider-switch-b div.ui-slider-labelbg-b { z-index: 1; }
.ui-slider-switch-a div.ui-slider-labelbg-b, .ui-slider-switch-b div.ui-slider-labelbg-a { z-index: 10; }

div.ui-slider-switch a.ui-slider-handle { z-index: 20;  width: 101%; height: 32px; margin-top: -18px; margin-left: -101%; }
span.ui-slider-label { width: 100%; position: absolute;height: 32px;  font-size: 16px; text-align: center; line-height: 2; background: none; border-color: transparent; }
span.ui-slider-label-a { left: -100%;  margin-right: -1px }
span.ui-slider-label-b { right: -100%;  margin-left: -1px }
/*
*/

/*
 * This is a manifest file that'll automatically include all the stylesheets available in this directory
 * and any sub-directories. You're free to add application-wide styles to this file and they'll appear at
 * the top of the compiled file, but it's generally better to create a new file per style scope.
 *


*/

body#homepage { background-image: url(/assets/store/homepage/bg-1fcb99c1be14f4f344a6377613fe2cef.png) }

#homepage #banner {
  height: 340px;
  position: relative;
  height: 340px;
  margin-bottom: 20px;
  z-index: 2;
}
div#banner div.button {
  position: absolute;
  top: 49px;
  left: 640px;
}
div#banner div.button img {
  margin-bottom: 20px;
}
div#banner section {
  height: 303px;
}

#banner nav {
  width: 100%;
}
#banner nav ul {width:100%;}
#banner nav ul li {
  width: 215px;
  list-style: none;
  display: block;
  float: left;
  line-height: 1em;
  text-align: center;
  padding-top: 3px;
}
#banner nav ul li.first, #banner nav ul li.last {
  width: 50px;
  font-weight: bold;
}
#banner nav ul li a {
  font: normal normal bold 1.2em/2.2em Helvetica,Arial,sans-serif;
  text-shadow: #CE2828 1px 1px 1px;
  color: #3E0303;
}
#banner nav ul li.current a,
#banner nav ul li a:hover {
  color:  #fff;
  text-shadow: #3E0303 1px 1px 1px;
}




#homepage #taxons {
  background: url(/assets/store/homepage/taxons-bg-88016dc9c098e726b5ec03bb3bbfdf67.png);
  width: 960px;
  margin-bottom: 30px;
}
#homepage #taxons div {
  width: 318px;
  padding: 1px;
  height: 309px;
  float: left;
  text-align: center;
}
#homepage #taxons h3 {
  font-size: 1.5em;
  margin: 20px 0 10px 0;
}
#homepage #taxons h3 a {
  text-decoration: none;
}


#homepage #contact {
  float: left;
  background-color: #F3F3F3;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  padding:  30px 30px 60px 30px;
  color: #666;
  font-family: Trebuchet MS;
}

#homepage #all-products , #homepage #contact {
  float: left;
}
#homepage #all-products {
  width: 460px;
  margin-right: 40px;
}
#homepage #all-products .left, #homepage #all-products .right {
  width: 210px;
  float: left;
}
#homepage #all-products .left {
  margin-right: 40px;
}

#homepage #contact {
  width: 400px;
 }
#homepage #contact h2 {
  color: #D72A2A;
}
#homepage #contact p {
  font-size: 1.5em;
  margin-bottom: 1em;
}
#homepage #contact table {
  width: 100%;
}
#homepage #contact td {
  font-size: 1.2em;
  padding-bottom: 10px;
}

body#checkout div[role='checkout'] div#tabs {
  font: 18px Georgia, "Times New Roman", Times, serif;
  float: left;
  z-index: 99;
  background-color: #fff;
  width:660px;
}

body#checkout div[role="checkout"] div#tabs ul {
  margin: 0;
  font: 45px "Arvo", sans-serif;
}

body#checkout div[role='checkout'] div#tabs li {
  display: inline;
  float: left;
  background-color: #eceded;
  border-bottom: 5px solid #b7cbe9;
  width: 216px;
  height: 70px;
}

body#checkout div[role='checkout'] div#tabs li.active {
  background-color: #fff;
  border: 5px solid #b7cbe9;
  border-bottom: none;
}

body#checkout div[role='checkout'] div#tabs li.end {
  border-right: 3px solid #eceded;
}

body#checkout div[role='checkout'] div#tabs li span.number {
  color: #bfbfbf;
  width: 30px;
  font-size: 60px;
  padding: 0 0 0 30px;
  display: inline-block;
  font-family: Arial;
}

body#checkout div[role='checkout'] div#tabs li.active span.number {
  color: #324781;
}


body#checkout div[role='checkout'] div#tabs li span.title {
  color: #bfbfbf;
  font-size: 18px;
  width: 90px;
  padding: 0 0 0 10px;
  display: inline-block;
}

body#checkout div[role='checkout'] div#tabs li.active span.title {
  color: #758ed0;
}

body#checkout div[role="content"] {
  width: 528px;
}
#wishlist_header h1, #wishlist_header div { float: left; width: 30%; }
