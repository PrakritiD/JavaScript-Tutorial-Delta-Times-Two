
let pH = prompt('Enter pH value of substance',7); //returns what user enters/default/null

if (pH >= 0 && pH < 7) {
    alert('acidic');
} else if (pH > 7 && pH <= 14) {
    alert('basic');
} else if (pH == 7) {
    alert('neutral');
} else {
    alert('ERROR: pH value out of range');
}





//////////////////////////////////////////////


(1 == '1') && (1 === '1') && (1 === 1) 
//true && false ... => false
//alert((1 == '1') && (1 === '1') && (1 === 1));

////////////////////////////////////////////

(1 === '1') || (1 == 0) || (1 === 1)
// false || true => true
//alert((1 === '1') || (1 == 0) || (1 === 1));

///////////////////////////////////////////

//alert(!!(''));