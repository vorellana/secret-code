console.log('secret codeee');

const msg1 =  ['Hey good lawyer', 'as I previously previewed', 'yam does a soup'];
const msg2 =  ['First I give money to Teresa', 'after I inform dad of', 'your horrible soup'];

// *** Traslation ***
const traslation = (msg) => {
    let decoMsg = ''; // decoded message
    msg.forEach((sentence, index) => {
        let count = 0;
        sentence.split(' ').forEach(word =>{
            const array = word.split('')
            if (count < array.length){
                decoMsg = decoMsg + array[count];
                count++;                
            }
        })
        if (index < (msg.length - 1))
            decoMsg = decoMsg + " ";
    });
    return decoMsg;
}

console.log('\n============== Secret Code ===============')
console.log('\nTest case 1:');
console.log('Input', msg1);
console.log('Output', [traslation(msg1)]);
console.log('\nTest case 2:');
console.log('Input', msg2);
console.log('Output', [traslation(msg2)]);
console.log('\n==========================================')