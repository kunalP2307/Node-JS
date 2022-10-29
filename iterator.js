arr = ['kunal','vivek','sahil']

// for(i = 0 ; i<3; i++){
//     console.log(arr[i])
// }

let ct = arr[Symbol.iterator]();
console.log(typeof(ct))

let val = ct.next();
console.log(ct.next().value)

let name = "kunal"
let nt = name[Symbol.iterator]()
let res = nt.next()
while(!res.done){
    console.log(res.value)
    res = nt.next()
}