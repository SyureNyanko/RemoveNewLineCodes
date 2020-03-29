function Execute(){
    const result = readText(
        (text) => {
            console.log(text);
            writeText(text);
        }
    );
}

function process(input){
    return input.replace(/\r?\n/g, '');
}

function writeText(text){
    if(navigator.clipboard){
        navigator.clipboard.writeText(process(text));
    }
}

const readText = (callback) => {
    if(navigator.clipboard) {
        navigator.clipboard.readText()
        .then(function(text){
            callback(text);
        });
        return true;
    } else {
        return false;
    }
}

document.querySelector('#process-button').addEventListener('click', Execute);

