
function *display(){
    console.log('Kunal');
    console.log('Sahil');
    yield 'First Pause'
    console.log('abc');
    console.log('fsdf');
    yield 'Second Pause'
    console.log('xyz');
    console.log('pqqr');
}

let itr = display()
console.log(itr.next())
console.log(itr.next())
