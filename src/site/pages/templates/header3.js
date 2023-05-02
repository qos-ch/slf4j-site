
function insertLogoAndMenu() {
    document.write('    <div class="dropdown">');
    document.write('        <button id="mainMenuButton" class="link">');
    document.write('              <span class="bar">&#x2630;&nbsp;</span>  <img class="logo" src="'+ prefix +'images/logos/SLF4J_72dpi.png"/>');
    document.write('        </button>');
    document.write('        <div class="dropdown-menu information-grid">');
    document.write('            <div>'); // hanging div start
    document.write('                <div class="dropdown-heading">Logback project</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="'+ prefix +'index.html"><i class="fa-regular fa-house"></i>  SLF4J Home page</a>'); // &#127968;
    document.write('                    <a href="'+ prefix +'docs.html"><i class="fa-regular fa-book"></i> Documentation</a>'); // &#128214; &#128195;
    document.write('                    <a href="'+ prefix +'download.html"><i class="fa-regular fa-download"></i> Download</a>'); // &#128229;
    document.write('                    <a href="'+ prefix +'license.html"><i class="fa-regular fa-copyright"></i> License</a>');
    document.write('                    <a href="'+ prefix +'news.html"><i class="fa-regular fa-bullhorn"></i> News</a>'); // &#127908;
    document.write('                    <a href="'+ prefix +'log4shell.html"><i class="fa-regular fa-skull-crossbones"></i> log4shell</a>');
    document.write('                    <a href="https://search.maven.org/search?q=g:org.slf4j%20AND%20v:2.0.%3F">');
    document.write('                       <i class="fa-regular fa-magnifying-glass"></i> Search for SLF4J 2.0.x');
    document.write('                     </a>');
    document.write('                </div>');
    document.write('            </div>'); // hanging div END
    document.write('            <div>');  // hanging div start
    document.write('                <div class="dropdown-heading">Support</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="'+ prefix +'mailing-lists.html"><i class="fa-regular fa-envelope"></i> Mailing Lists</a>');  //&#9993;
    document.write('                    <a href="'+ prefix +'bug-reporting.html"><i class="fa-regular fa-bug"></i> Bug Reporting</a>'); //&#129440; &#128027;

    document.write('                    <a href="' + prefix + 'count/github.html">'); // &#11153;
    document.write('                           <i class="fa-regular fa-code-branch"></i> Source Repository');
    //document.write('                        <img style="vertical-align: middle;" class="github-logo" src="' + prefix + 'images/GitHub-Mark-32px.png" alt="Source code" /> Source Repository</a>');
    document.write('                     </a>');
    document.write('                    <a href="' + prefix + 'count/tidelift.html">');
    document.write('                           <i class="fa-regular fa-t"></i> Tidelift');
    document.write('                     </a>');

    //document.write('                   <a href="http://www.qos.ch/shop/products/professionalSupport"><i class="fa-regular fa-rectangle-pro"></i> Support offerings</a>');
    document.write('                </div>');
    document.write('            </div>'); // hanging div END
    document.write('            <div>'); // hanging div START
    document.write('                <div class="dropdown-heading">Native implementations</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="' + prefix +'count/logback.html">  Logback</a>');
    document.write('                    <a href="' + prefix +'count/logevents.html">logevents</a>');
    document.write('                    <a href="' + prefix +'count/penna.html">penna</a>');    
    document.write('                </div>');
    document.write('             </div>'); // hanging div END
    document.write('            <div>'); // hanging div START
    document.write('                <div class="dropdown-heading">Wrapped implementations</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                   <a href="api/org/slf4j/jul/JDK14LoggerAdapter.html">slf4j-jdk14</a>');
    document.write('                   <a href="api/org/slf4j/reload4j/Reload4jLoggerAdapter.html">slf4j-log4j 1.x (superseded by slf4j-reload4j)</a>');
    document.write('                   <a href="api/org/slf4j/reload4j/Reload4jLoggerAdapter.html">slf4j-reload4j</a>');
    document.write('                   <a href="api/org/slf4j/simple/SimpleLogger.html">slf4j-simple</a>');
    document.write('                </div>');
    document.write('            </div>'); // hanging div END
    document.write('            <div>'); // hanging div START
    document.write('                <div class="dropdown-heading">Other implementations</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                   <a href="' + prefix +'count/tinylog.html">tinylog</a>');
    document.write('                   <a href="' + prefix +'count/jboss.html">JBoss logging</a>');
    document.write('                </div>');
    document.write('            </div>'); // hanging div END

    document.write('        </div>');
    document.write('    </div>');
}

document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/site3.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/menu2.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/stackoverflow-light.min.css"/>');

document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/font/fontawesome.min.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/font/brands.min.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/font/solid.min.css"/>');

document.write('<script type="text/javascript" src="'+prefix+'js/jquery-min.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/menuListener.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/decorator.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/highlight.min.js"></script>');

document.write('<div id="header">');

document.write('<div id="header-grid">');

document.write('<div id="header-grid-logo-item">');
insertLogoAndMenu();
document.write('</div>');

document.write('<div id="header-grid-icons-item">');

document.write('<div id="header-grid-icons-item-flex-container">');

document.write('      <div class="sponsor">');
document.write('      <a href="' + prefix +'count/sponsor.html"">');
document.write('        <img  class="sponsor-icon" src="' + prefix + 'images/sponsor.png" alt="Sponsor qos-ch"/>');
document.write('      </a>');
document.write('      </div>');

document.write('      <div class="twitter">');
document.write('      <a  href="' + prefix +'count/twitter.html">');
document.write('        <img  class="twitter-logo" src="' + prefix + 'images/TwitterLogo_blue.svg" alt="Follow @qos_ch on Twitter"/>');
document.write('       </a>');
document.write('      </div>');

// close header-grid-icons-item-flex-container
document.write('</div>');
// close #header-grid-icons-item
document.write('</div>');

// div close #header-grid-icons-item
document.write('  <div id="header-grid-line-item" class="headerline"></div>');

document.write('<div id="ad" class="top-message">');
document.write('    <p>Need an issue fixed as soon as possible? Consider <a href="'+prefix+'count/champion.html"><i class="fa-regular fa-trophy"></i> championing a release</a>.</p>');
document.write('</div>');

// document.write('<div id="ad">');
// document.write('    <script type="text/javascript" src="'+prefix+'templates/ad.js" ></script>');
// document.write('</div>');

// close #header-grid
document.write('</div>');

// close #header
document.write('</div>');

