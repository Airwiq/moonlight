

exports.App = App = {
    name: 'Huhu',
    instances: []
};

var IPC;
App.init = function (el, ipc, win) {
    IPC = ipc;
    IPC.on('app-add-instance', function (evt, arg) {
        App.instances[arg] = evt.sender;        
    });
    IPC.on('app-open-frame', function (evt, arg) {
        let queue = Object.values(App.instances);
        for(let i = 0, s; s = queue[i]; i++){
            s.send('ui-open-frame',arg);
        }
    });
};



