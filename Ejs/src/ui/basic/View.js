class BasicView {
    constructor(id, tag, css = []) {
        this._EL = document.createElement(tag);
        this._EL.VIEW = this;
        this.id = id;
        this.classList = css;
                
    }

    set NODE(n) {
        this._EL = n;
    }
    get NODE() {
        return this._EL;
    }
    getViewParent() {
        return this._EL.parentElement.VIEW;
    }

    addEventListener() { return this._EL.addEventListener.apply(this._EL, arguments); }
    appendChild() { return this._EL.appendChild.apply(this._EL, arguments); }
    blur() { return this._EL.blur.apply(this._EL, arguments); }
    click() { return this._EL.click.apply(this._EL, arguments); }
    cloneNode() { return this._EL.cloneNode.apply(this._EL, arguments); }
    compareDocumentPosition() { return this._EL.compareDocumentPosition.apply(this._EL, arguments); }
    contains() { return this._EL.contains.apply(this._EL, arguments); }
    exitFullscreen() { return this._EL.exitFullscreen.apply(this._EL, arguments); }
    focus() { return this._EL.focus.apply(this._EL, arguments); }
    getAttribute() { return this._EL.getAttribute.apply(this._EL, arguments); }
    getAttributeNode() { return this._EL.getAttributeNode.apply(this._EL, arguments); }
    getBoundingClientRect() { return this._EL.getBoundingClientRect.apply(this._EL, arguments); }
    getElementsByClassName() { return this._EL.getElementsByClassName.apply(this._EL, arguments); }
    getElementsByTagName() { return this._EL.getElementsByTagName.apply(this._EL, arguments); }
    hasAttribute() { return this._EL.hasAttribute.apply(this._EL, arguments); }
    hasAttributes() { return this._EL.hasAttributes.apply(this._EL, arguments); }
    hasChildNodes() { return this._EL.hasChildNodes.apply(this._EL, arguments); }
    insertAdjacentElement() { return this._EL.insertAdjacentElement.apply(this._EL, arguments); }
    insertAdjacentHTML() { return this._EL.insertAdjacentHTML.apply(this._EL, arguments); }
    insertAdjacentText() { return this._EL.insertAdjacentText.apply(this._EL, arguments); }
    insertBefore() { return this._EL.insertBefore.apply(this._EL, arguments); }
    isDefaultNamespace() { return this._EL.isDefaultNamespace.apply(this._EL, arguments); }
    isEqualNode() { return this._EL.isEqualNode.apply(this._EL, arguments); }
    isSameNode() { return this._EL.isSameNode.apply(this._EL, arguments); }
    isSupported() { return this._EL.isSupported.apply(this._EL, arguments); }
    normalize() { return this._EL.normalize.apply(this._EL, arguments); }
    querySelector() { return this._EL.querySelector.apply(this._EL, arguments); }
    querySelectorAll() { return this._EL.querySelectorAll.apply(this._EL, arguments); }
    removeAttribute() { return this._EL.removeAttribute.apply(this._EL, arguments); }
    removeAttributeNode() { return this._EL.removeAttributeNode.apply(this._EL, arguments); }
    removeChild() { return this._EL.removeChild.apply(this._EL, arguments); }
    removeEventListener() { return this._EL.removeEventListener.apply(this._EL, arguments); }
    replaceChild() { return this._EL.replaceChild.apply(this._EL, arguments); }
    requestFullscreen() { return this._EL.requestFullscreen.apply(this._EL, arguments); }
    scrollIntoView() { return this._EL.scrollIntoView.apply(this._EL, arguments); }
    setAttribute() { return this._EL.setAttribute.apply(this._EL, arguments); }
    setAttributeNode() { return this._EL.setAttributeNode.apply(this._EL, arguments); }
    toString() { return this._EL.toString.apply(this._EL, arguments); }

    set accessKey(v) { this._EL.accessKey = v; }
    get accessKey() { return this._EL.accessKey; }
    set attributes(v) { this._EL.attributes = v; }
    get attributes() { return this._EL.attributes; }
    set childElementCount(v) { this._EL.childElementCount = v; }
    get childElementCount() { return this._EL.childElementCount; }
    set childNodes(v) { this._EL.childNodes = v; }
    get childNodes() { return this._EL.childNodes; }
    set children(v) { this._EL.children = v; }
    get children() { return this._EL.children; }
    set classList(v) { this._EL.classList = v; }
    get classList() { return this._EL.classList; }
    set className(v) { this._EL.className = v; }
    get className() { return this._EL.className; }
    set clientHeight(v) { this._EL.clientHeight = v; }
    get clientHeight() { return this._EL.clientHeight; }
    set clientLeft(v) { this._EL.clientLeft = v; }
    get clientLeft() { return this._EL.clientLeft; }
    set clientTop(v) { this._EL.clientTop = v; }
    get clientTop() { return this._EL.clientTop; }
    set clientWidth(v) { this._EL.clientWidth = v; }
    get clientWidth() { return this._EL.clientWidth; }
    set contentEditable(v) { this._EL.contentEditable = v; }
    get contentEditable() { return this._EL.contentEditable; }
    set dir(v) { this._EL.dir = v; }
    get dir() { return this._EL.dir; }
    set firstChild(v) { this._EL.firstChild = v; }
    get firstChild() { return this._EL.firstChild; }
    set firstElementChild(v) { this._EL.firstElementChild = v; }
    get firstElementChild() { return this._EL.firstElementChild; }
    set id(v) { this._EL.id = v; }
    get id() { return this._EL.id; }
    set innerHTML(v) { this._EL.innerHTML = v; }
    get innerHTML() { return this._EL.innerHTML; }
    set innerText(v) { this._EL.innerText = v; }
    get innerText() { return this._EL.innerText; }
    set isContentEditable(v) { this._EL.isContentEditable = v; }
    get isContentEditable() { return this._EL.isContentEditable; }
    set lang(v) { this._EL.lang = v; }
    get lang() { return this._EL.lang; }
    set lastChild(v) { this._EL.lastChild = v; }
    get lastChild() { return this._EL.lastChild; }
    set lastElementChild(v) { this._EL.lastElementChild = v; }
    get lastElementChild() { return this._EL.lastElementChild; }
    set namespaceURI(v) { this._EL.namespaceURI = v; }
    get namespaceURI() { return this._EL.namespaceURI; }
    set nextSibling(v) { this._EL.nextSibling = v; }
    get nextSibling() { return this._EL.nextSibling; }
    set nextElementSibling(v) { this._EL.nextElementSibling = v; }
    get nextElementSibling() { return this._EL.nextElementSibling; }
    set nodeName(v) { this._EL.nodeName = v; }
    get nodeName() { return this._EL.nodeName; }
    set nodeType(v) { this._EL.nodeType = v; }
    get nodeType() { return this._EL.nodeType; }
    set nodeValue(v) { this._EL.nodeValue = v; }
    get nodeValue() { return this._EL.nodeValue; }
    set offsetHeight(v) { this._EL.offsetHeight = v; }
    get offsetHeight() { return this._EL.offsetHeight; }
    set offsetWidth(v) { this._EL.offsetWidth = v; }
    get offsetWidth() { return this._EL.offsetWidth; }
    set offsetLeft(v) { this._EL.offsetLeft = v; }
    get offsetLeft() { return this._EL.offsetLeft; }
    set offsetParent(v) { this._EL.offsetParent = v; }
    get offsetParent() { return this._EL.offsetParent; }
    set offsetTop(v) { this._EL.offsetTop = v; }
    get offsetTop() { return this._EL.offsetTop; }
    set ownerDocument(v) { this._EL.ownerDocument = v; }
    get ownerDocument() { return this._EL.ownerDocument; }
    set parentNode(v) { this._EL.parentNode = v; }
    get parentNode() { return this._EL.parentNode; }
    set parentElement(v) { this._EL.parentElement = v; }
    get parentElement() { return this._EL.parentElement; }
    set previousSibling(v) { this._EL.previousSibling = v; }
    get previousSibling() { return this._EL.previousSibling; }
    set previousElementSibling(v) { this._EL.previousElementSibling = v; }
    get previousElementSibling() { return this._EL.previousElementSibling; }
    set scrollHeight(v) { this._EL.scrollHeight = v; }
    get scrollHeight() { return this._EL.scrollHeight; }
    set scrollLeft(v) { this._EL.scrollLeft = v; }
    get scrollLeft() { return this._EL.scrollLeft; }
    set scrollTop(v) { this._EL.scrollTop = v; }
    get scrollTop() { return this._EL.scrollTop; }
    set scrollWidth(v) { this._EL.scrollWidth = v; }
    get scrollWidth() { return this._EL.scrollWidth; }
    set style(v) { this._EL.style = v; }
    get style() { return this._EL.style; }
    set tabIndex(v) { this._EL.tabIndex = v; }
    get tabIndex() { return this._EL.tabIndex; }
    set tagName(v) { this._EL.tagName = v; }
    get tagName() { return this._EL.tagName; }
    set textContent(v) { this._EL.textContent = v; }
    get textContent() { return this._EL.textContent; }
    set title(v) { this._EL.title = v; }
    get title() { return this._EL.title; }

    set onabort (v) {this._EL.onabort = v;}
    get onabort () {return this._EL.onabort;}
    set onafterprint (v) {this._EL.onafterprint = v;}
    get onafterprint () {return this._EL.onafterprint;}
    set onanimationend (v) {this._EL.onanimationend = v;}
    get onanimationend () {return this._EL.onanimationend;}
    set onanimationiteration (v) {this._EL.onanimationiteration = v;}
    get onanimationiteration () {return this._EL.onanimationiteration;}
    set onanimationstart (v) {this._EL.onanimationstart = v;}
    get onanimationstart () {return this._EL.onanimationstart;}
    set onbeforeprint (v) {this._EL.onbeforeprint = v;}
    get onbeforeprint () {return this._EL.onbeforeprint;}
    set onbeforeunload (v) {this._EL.onbeforeunload = v;}
    get onbeforeunload () {return this._EL.onbeforeunload;}
    set onblur (v) {this._EL.onblur = v;}
    get onblur () {return this._EL.onblur;}
    set oncanplay (v) {this._EL.oncanplay = v;}
    get oncanplay () {return this._EL.oncanplay;}
    set oncanplaythrough (v) {this._EL.oncanplaythrough = v;}
    get oncanplaythrough () {return this._EL.oncanplaythrough;}
    set onchange (v) {this._EL.onchange = v;}
    get onchange () {return this._EL.onchange;}
    set onclick (v) {this._EL.onclick = v;}
    get onclick () {return this._EL.onclick;}
    set oncontextmenu (v) {this._EL.oncontextmenu = v;}
    get oncontextmenu () {return this._EL.oncontextmenu;}
    set oncopy (v) {this._EL.oncopy = v;}
    get oncopy () {return this._EL.oncopy;}
    set oncut (v) {this._EL.oncut = v;}
    get oncut () {return this._EL.oncut;}
    set ondblclick (v) {this._EL.ondblclick = v;}
    get ondblclick () {return this._EL.ondblclick;}
    set ondrag (v) {this._EL.ondrag = v;}
    get ondrag () {return this._EL.ondrag;}
    set ondragend (v) {this._EL.ondragend = v;}
    get ondragend () {return this._EL.ondragend;}
    set ondragenter (v) {this._EL.ondragenter = v;}
    get ondragenter () {return this._EL.ondragenter;}
    set ondragleave (v) {this._EL.ondragleave = v;}
    get ondragleave () {return this._EL.ondragleave;}
    set ondragover (v) {this._EL.ondragover = v;}
    get ondragover () {return this._EL.ondragover;}
    set ondragstart (v) {this._EL.ondragstart = v;}
    get ondragstart () {return this._EL.ondragstart;}
    set ondrop (v) {this._EL.ondrop = v;}
    get ondrop () {return this._EL.ondrop;}
    set ondurationchange (v) {this._EL.ondurationchange = v;}
    get ondurationchange () {return this._EL.ondurationchange;}
    set onended (v) {this._EL.onended = v;}
    get onended () {return this._EL.onended;}
    set onerror (v) {this._EL.onerror = v;}
    get onerror () {return this._EL.onerror;}
    set onfocus (v) {this._EL.onfocus = v;}
    get onfocus () {return this._EL.onfocus;}
    set onfocusin (v) {this._EL.onfocusin = v;}
    get onfocusin () {return this._EL.onfocusin;}
    set onfocusout (v) {this._EL.onfocusout = v;}
    get onfocusout () {return this._EL.onfocusout;}
    set onfullscreenchange (v) {this._EL.onfullscreenchange = v;}
    get onfullscreenchange () {return this._EL.onfullscreenchange;}
    set onfullscreenerror (v) {this._EL.onfullscreenerror = v;}
    get onfullscreenerror () {return this._EL.onfullscreenerror;}
    set onhashchange (v) {this._EL.onhashchange = v;}
    get onhashchange () {return this._EL.onhashchange;}
    set oninput (v) {this._EL.oninput = v;}
    get oninput () {return this._EL.oninput;}
    set oninvalid (v) {this._EL.oninvalid = v;}
    get oninvalid () {return this._EL.oninvalid;}
    set onkeydown (v) {this._EL.onkeydown = v;}
    get onkeydown () {return this._EL.onkeydown;}
    set onkeypress (v) {this._EL.onkeypress = v;}
    get onkeypress () {return this._EL.onkeypress;}
    set onkeyup (v) {this._EL.onkeyup = v;}
    get onkeyup () {return this._EL.onkeyup;}
    set onload (v) {this._EL.onload = v;}
    get onload () {return this._EL.onload;}
    set onloadeddata (v) {this._EL.onloadeddata = v;}
    get onloadeddata () {return this._EL.onloadeddata;}
    set onloadedmetadata (v) {this._EL.onloadedmetadata = v;}
    get onloadedmetadata () {return this._EL.onloadedmetadata;}
    set onloadstart (v) {this._EL.onloadstart = v;}
    get onloadstart () {return this._EL.onloadstart;}
    set onmessage (v) {this._EL.onmessage = v;}
    get onmessage () {return this._EL.onmessage;}
    set onmousedown (v) {this._EL.onmousedown = v;}
    get onmousedown () {return this._EL.onmousedown;}
    set onmouseenter (v) {this._EL.onmouseenter = v;}
    get onmouseenter () {return this._EL.onmouseenter;}
    set onmouseleave (v) {this._EL.onmouseleave = v;}
    get onmouseleave () {return this._EL.onmouseleave;}
    set onmousemove (v) {this._EL.onmousemove = v;}
    get onmousemove () {return this._EL.onmousemove;}
    set onmouseover (v) {this._EL.onmouseover = v;}
    get onmouseover () {return this._EL.onmouseover;}
    set onmouseout (v) {this._EL.onmouseout = v;}
    get onmouseout () {return this._EL.onmouseout;}
    set onmouseup (v) {this._EL.onmouseup = v;}
    get onmouseup () {return this._EL.onmouseup;}
    set onmousewheel (v) {this._EL.onmousewheel = v;}
    get onmousewheel () {return this._EL.onmousewheel;}
    set onoffline (v) {this._EL.onoffline = v;}
    get onoffline () {return this._EL.onoffline;}
    set ononline (v) {this._EL.ononline = v;}
    get ononline () {return this._EL.ononline;}
    set onopen (v) {this._EL.onopen = v;}
    get onopen () {return this._EL.onopen;}
    set onpagehide (v) {this._EL.onpagehide = v;}
    get onpagehide () {return this._EL.onpagehide;}
    set onpageshow (v) {this._EL.onpageshow = v;}
    get onpageshow () {return this._EL.onpageshow;}
    set onpaste (v) {this._EL.onpaste = v;}
    get onpaste () {return this._EL.onpaste;}
    set onpause (v) {this._EL.onpause = v;}
    get onpause () {return this._EL.onpause;}
    set onplay (v) {this._EL.onplay = v;}
    get onplay () {return this._EL.onplay;}
    set onplaying (v) {this._EL.onplaying = v;}
    get onplaying () {return this._EL.onplaying;}
    set onpopstate (v) {this._EL.onpopstate = v;}
    get onpopstate () {return this._EL.onpopstate;}
    set onprogress (v) {this._EL.onprogress = v;}
    get onprogress () {return this._EL.onprogress;}
    set onratechange (v) {this._EL.onratechange = v;}
    get onratechange () {return this._EL.onratechange;}
    set onresize (v) {this._EL.onresize = v;}
    get onresize () {return this._EL.onresize;}
    set onreset (v) {this._EL.onreset = v;}
    get onreset () {return this._EL.onreset;}
    set onscroll (v) {this._EL.onscroll = v;}
    get onscroll () {return this._EL.onscroll;}
    set onsearch (v) {this._EL.onsearch = v;}
    get onsearch () {return this._EL.onsearch;}
    set onseeked (v) {this._EL.onseeked = v;}
    get onseeked () {return this._EL.onseeked;}
    set onseeking (v) {this._EL.onseeking = v;}
    get onseeking () {return this._EL.onseeking;}
    set onselect (v) {this._EL.onselect = v;}
    get onselect () {return this._EL.onselect;}
    set onshow (v) {this._EL.onshow = v;}
    get onshow () {return this._EL.onshow;}
    set onstalled (v) {this._EL.onstalled = v;}
    get onstalled () {return this._EL.onstalled;}
    set onstorage (v) {this._EL.onstorage = v;}
    get onstorage () {return this._EL.onstorage;}
    set onsubmit (v) {this._EL.onsubmit = v;}
    get onsubmit () {return this._EL.onsubmit;}
    set onsuspend (v) {this._EL.onsuspend = v;}
    get onsuspend () {return this._EL.onsuspend;}
    set ontimeupdate (v) {this._EL.ontimeupdate = v;}
    get ontimeupdate () {return this._EL.ontimeupdate;}
    set ontoggle (v) {this._EL.ontoggle = v;}
    get ontoggle () {return this._EL.ontoggle;}
    set ontouchcancel (v) {this._EL.ontouchcancel = v;}
    get ontouchcancel () {return this._EL.ontouchcancel;}
    set ontouchend (v) {this._EL.ontouchend = v;}
    get ontouchend () {return this._EL.ontouchend;}
    set ontouchmove (v) {this._EL.ontouchmove = v;}
    get ontouchmove () {return this._EL.ontouchmove;}
    set ontouchstart (v) {this._EL.ontouchstart = v;}
    get ontouchstart () {return this._EL.ontouchstart;}
    set ontransitionend (v) {this._EL.ontransitionend = v;}
    get ontransitionend () {return this._EL.ontransitionend;}
    set onunload (v) {this._EL.onunload = v;}
    get onunload () {return this._EL.onunload;}
    set onvolumechange (v) {this._EL.onvolumechange = v;}
    get onvolumechange () {return this._EL.onvolumechange;}
    set onwaiting (v) {this._EL.onwaiting = v;}
    get onwaiting () {return this._EL.onwaiting;}
    set onwheel (v) {this._EL.onwheel = v;}
    get onwheel () {return this._EL.onwheel;}
};

class View extends BasicView {
    constructor(id, tag, css = [], items = []) {
        super(id, tag, css);
        this.views = {};
        this.items = [];
        this.refs = {};
        this.setItems(items);
    }
    addItem(item) {
        this.items.push(item);
        this.appendChild(item.NODE);
    }
    addItems(items) {
        for (let i = 0, item; item = items[i]; i++) {
            this.addItem(item);
        }
    }
    setItems(items) {
        this.innerHTML = '';
        this.items = [];
        this.addItems(items);
    }
}
































































































