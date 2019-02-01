class Module{
    constructor(id, icon, title, content, submodules = []){
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.content = content;
        this.submodules = submodules;
    }
    getId(){
        return this.id;
    }
    getIcon(){
        return this.icon;
    }
    getTitle(){
        return this.title;
    }
    getContent(){
        return this.content;
    }
    getSubModules(){
        return this.submodules;
    }
    hasSubModules(){
        return this.submodules.length > 0;
    }
};
