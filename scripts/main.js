function Execute(){
    const result = readText(
        (text) => {
            writeText(text);
        }
    );
}
function ExecuteAndJumpToGoogle(){
    const result = readText(
        (text) => {
            createOrRefreshSubWindow(process(text));
        }
    );
}

function createOrRefreshSubWindow(text) {
    const url =  encodeURI("https://translate.google.co.jp/?hl=ja#view=home&op=translate&sl=en&tl=ja&text=" + text);
    window.open(url, "subWindow");
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
document.querySelector('#process-button-google').addEventListener('click', ExecuteAndJumpToGoogle);


