class InfoItem extends View {
    constructor(id, icon, content) {
        super(id, 'div', ['vw-InfoItem']);
        this.setIcon(icon);
        this.setContent(content);
    }
    setIcon(icon) {
        let ico = null;
        if (icon == null) {
            if(this.views.icon != null){
                this.removeChild(this.views.icon.NODE);
                this.views.icon = null;
            }
        } else {            
            if (icon instanceof View) {
                ico = icon;
            } else {
                ico = new ImageView(`${this.id}-icon`, icon);
            }
            if (this.views.icon != null) {
                this.replaceChild(ico, this.views.icon.NODE);
            } else if(this.childElementCount > 0) {
                this.insertBefore(ico.NODE, this.childNodes[0]);                
            }
        }
        this.items = [];
        this.views.icon = ico;
        for(let i = 0,node; node = this.childNodes[i]; i++){
            this.items[i] = node.VIEW;
        }
    }
    setContent(content) {
        if(this.views.content != null){
            this.removeChild(this.views.content.NODE);
        }
        if(content == null){
            
        }else{
            let vw = null;
            if(content instanceof View){
                vw = content;
            }else{
                vw = new TextView(null,content);
            }
            this.appendChild(vw.NODE);
            this.views.content = vw;
        }
        this.items = [];
        for(let i = 0,node; node = this.childNodes[i]; i++){
            this.items[i] = node.VIEW;
        }
    }
}