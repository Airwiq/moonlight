class AppFrameView extends View {
    constructor(frame, id, tag, css, items = []){
        super(id,tag,css,items);
        this.appframe = frame;
    }    
    getAppFrame(){
        return this.appframe;
    }
};
class Actionbar extends AppFrameView {
    constructor(frame, id, items = []) {
        super(frame, id, 'div', ['vw-Actionbar'], items);
    }
};
class Navbar extends AppFrameView {
    constructor(frame, id, items = []) {
        super(frame, id, 'div', ['vw-Navbar']);
        this.views.editors = new Details(`${id}-open-edtiors`,'Editors');
        this.addItem(this.getOpenEditors());
        this.addItems(items);
    }
    getOpenEditors(){
        return this.views.editors;
    }
};
class NavbarEditorEntry extends InfoItem{
    constructor(id,icon,title){
        super(id,icon,title);
        this.classList.add('vw-NavbarEditorEntry');        
    }
}
class NavbarWorkbenchSlider extends AppFrameView {
    constructor(frame, id) {
        super(frame, id, 'div', ['vw-NavbarWorkbenchSilder']);
        this.setAttribute('draggable', 'true');
        this.ondragstart = function (evt) {
            let vw = evt.target.VIEW.getViewParent();
            vw.getActionbar().ondragover = evt => { evt.preventDefault(); evt.dataTransfer.effectAllowed = "move"; };
            vw.getNavbar().ondragover = evt => { evt.preventDefault(); evt.dataTransfer.effectAllowed = "move"; };
            vw.getSlider().ondragover = evt => { evt.preventDefault(); evt.dataTransfer.effectAllowed = "move"; };
            vw.getWorkbench().ondragover = evt => { evt.preventDefault(); evt.dataTransfer.effectAllowed = "move"; };
            let cont = document.getElementById(vw.getWorkbench().getAttribute('active-editor'));
            if(cont != null){
               // cont.VIEW.ondragover = evt => { evt.preventDefault(); evt.dataTransfer.effectAllowed = "move"; };
            }
            
        };
        this.ondrag = function (evt) {
            evt.preventDefault();
            evt.dataTransfer.effectAllowed = "move";
            let x = evt.x;
            if (x >= 200) {                
                evt.target.VIEW.getAppFrame().style.gridTemplateColumns = `${x}px 5px auto`;
            }

        };
    }
};

class Workbench extends AppFrameView {
    constructor(frame, id) {
        super(frame, id, 'div', ['vw-Workbench']);
    }
};

class WorkbenchContent extends View{
    constructor(id,items=[]){
        super(id, 'div',['vw-WorkbenchContent'],items);
    }
}

class AppFrame extends View {
    constructor(id) {
        super(id, 'div', ['vw-AppFrame']);
        this.views.actionbar = new Actionbar(this,'ui-actionbar');
        this.views.navbar = new Navbar(this,'ui-navbar');
        this.views.slider = new NavbarWorkbenchSlider(this,'ui-navbarworkbenchslider');
        this.views.workbench = new Workbench(this,'ui-workbench');
        this.setItems([
            this.getActionbar(),
            this.getNavbar(),
            this.getSlider(),
            this.getWorkbench()
        ]);
    }
    getActionbar() {
        return this.views.actionbar;
    }
    getNavbar() {
        return this.views.navbar;
    }
    getSlider() {
        return this.views.slider;
    }
    getWorkbench() {
        return this.views.workbench;
    }
    openEditor(id, title, content){
        let display = document.getElementById(this.getNavbar().getAttribute('active-editor'));
        let selected = document.getElementById(`${this.getNavbar().getAttribute('active-editor')}-navbar-entry`);      
        let target = document.getElementById(id);      
        let entry = document.getElementById(`${id}-navbar-entry`);  
        if(target == null){
            target = new WorkbenchContent(id,[content]);  
            entry = new NavbarEditorEntry(`${id}-navbar-entry`,null,title);    
            entry.onclick = evt => this.openEditor(id,title);                              
            this.getNavbar().views.editors.addItem(entry);
            this.getWorkbench().addItem(target);            
        }else{
            target = target.VIEW;
            entry = entry.VIEW;
        }
        if(display != null){
            display = display.VIEW;
            
            display.removeAttribute('active');            
        }
        if(selected != null){
            selected = selected.VIEW;
            selected.removeAttribute('active');
        }
        target.setAttribute('active','true');
        entry.setAttribute('active','true');
        this.getNavbar().setAttribute('active-editor',id);                
        this.getWorkbench().setAttribute('active-editor',id);
    }
};


