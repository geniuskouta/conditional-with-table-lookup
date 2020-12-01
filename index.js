function isCool(stuff) {
    let result;
    let coolStuff = {
        bike: function () {
            console.log(`${stuff} is cool!`);
        },
        guitar: function () {
            console.log(`${stuff} is cool!`);
        },
        skateboard: function () {
            console.log(`${stuff} is cool!`);
        },
        default: function () {
            if(!stuff) {
                console.log('You didn\'t pass an argument.');
                return ;
            }
            console.log(`${stuff} is not very cool...`);
        }
    }
    result = coolStuff[stuff] || coolStuff.default;
    result();
}

isCool('guitar');
isCool('bass');
isCool();
