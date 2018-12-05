
var Views = {
    constructor: function(el){
        el.fx = function(){
            console.log(123);
        };
    }
}
class EMC2 extends HTMLDivElement{
    
    constructor(){
        super();
        Views.constructor(this);
        this.style.backgroundColor = '#ff0000';
        this.style.display = 'block';
        this.innerText = 'T';
        this.fx();
    }        
};
class A extends EMC2{
    constructor(){
        super();
        this.innerText += 'T';
    }
}
customElements.define('emc-2', EMC2, {extends: 'div'});
customElements.define('emc-3', A, {extends: 'div'});
