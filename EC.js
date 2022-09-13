function Generate(){
    const private = privateKey()
    const krypt = M1(private)

    return {private, krypt}
}

function privateKey(){
    const private = Math.random().toFixed(5)
    

    return Number(private)
}

function M1(private){
    const m1 = ((2**private)%3)

    return m1
}

const m1 = Generate();
const m2 = Generate();

//console.log(m1, m2)

function CreateK(){
    const K1 = ((m1.krypt**m2.private)%3)
    const K2 = ((m2.krypt**m1.private)%3)

    return {K1, K2}

}

const { K1, K2 } = CreateK();
//console.log(CreateK())

function getMessage(message) {
    const messageToArray = message.split('');
    const decimalString = messageToArray.map((item) => item.charCodeAt(0));
    return decimalString.map((item) => item * K1);
}

function deCryptMessage(message) {
    return message.map((item) => String.fromCharCode(item / K2)).join('');
}

const message = 'USHIUSNHIUHDSIUHIU SUHIDUOS SUY9SODJ S';
console.log(getMessage(message));
console.log(deCryptMessage(getMessage(message)))



