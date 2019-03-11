  /* jshint esversion: 6 */ 
/*main load*/
  function onload_main() {
    console.log("=======onload_main=======");
    addDetails();
    addLinks();

    var url = window.location.href;
    var arr = url.split("?");
    var para = arr[1];
    onGuideSelect(para);
  }

// set iframe height
function onload_content() {
    var contentIFrame = document.getElementById("content_iframe");
    var h = content_iframe.contentWindow.document.body.clientHeight + 100;
    contentIFrame.setAttribute("height", h);
}

//guide selected
function onGuideSelect(url) {
     var contentIFrame = document.getElementById("content_iframe");
     contentIFrame.src = url;
}


//===========create guides catalog============

/*ids*/
let HMLT_ID = "htmlDetails";
let CSS_ID = "cssDetails";
let JS_ID = "jsDetails";


/*add details*/
function createDetails($id, $summary, $open = false) {
    var d = document.createElement("details");
    d.open = $open;
    d.id = $id;
    
    var s = document.createElement("summary");
    s.textContent = $summary;
    d.appendChild(s);

    var ol = document.createElement("ol");
    d.appendChild(ol);

    return d;
}

/*add guide link*/
function addLink($text, $url, $detailsID) {
    var a = document.createElement("a");
    a.href = "?" + $url;
    a.textContent = $text;

    var li = document.createElement("li");
    li.appendChild(a);

    var d = document.getElementById($detailsID);
    var ol = d.querySelector("details > ol");
    ol.appendChild(li);
}

/*add details*/
function addDetails() {
      var div = document.querySelector(".column-container>.column-catalog");
    var d;

    d = createDetails(HMLT_ID, "HTML");
    div.appendChild(d);

    d = createDetails(CSS_ID, "CSS", true);
    div.appendChild(d);

    d = createDetails(JS_ID, "JS");
    div.appendChild(d);
}

/*add links*/
function addLinks() {
    // html
    addLink("Document Object Model", "html/DOM.html", HMLT_ID);

    // css
    addLink("CSS Selector", "css/css selector.html", CSS_ID);
    addLink("Box model", "css/box model.html", CSS_ID);
    addLink("CSS Layout", "css/css layout.html", CSS_ID);



    // js
    addLink("Manipulation Document", "js/Manipulation Document.html", JS_ID);
}







