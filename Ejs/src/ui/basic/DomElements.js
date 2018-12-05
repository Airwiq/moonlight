class Details extends View {
    constructor(id, title, items = []) {
        super(id, 'details', ['vw-Details']);
        this.attributes.header = new DetailsHeader(`${id}-header`, title);
        this.addItem(this.attributes.header);
        this.addItems(items);
        this.setAttribute('open', '');
    }
};
class DetailsHeader extends View {
    constructor(id, title, items = []) {
        super(id, 'summary', ['vw-DetailsHeader'], items);
        this.innerText = title;
    }
};

class ImageView extends View {
    constructor(id, src = '') {
        super(id, 'img', ['vw-ImageView']);
    }
    setImage(src) {
        this.setAttribute('src', src);
    }
}
class Input extends View {
    constructor(id, type) {
        super(id, type, ['vw-Input']);
    }
}
class Table extends View {
    constructor(id, items = []) {
        super(id, 'table', ['vw-Table'], items);
    }
}

class TableRow extends View {
    constructor(items = []) {
        super(null, 'tr', ['vw-TableRow'], items);
    }
}
class TableHead extends View {
    constructor(text, items = []) {
        super(null, 'th', ['vw-TableHead'], items);
        this.innerText = text;
    }
}
class TableCell extends View {
    constructor(text, items = []) {
        super(null, 'td', ['vw-TableColumn'], items);
        this.innerText = text;
    }
}

