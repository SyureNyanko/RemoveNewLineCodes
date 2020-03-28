function ExecuteKick(){
    var input = getInput();
    input = process(input);
    putOutput(input);
}

function process(input){
    return input.replace(/\r?\n/g, '');
}

function getInput(){
    var input = document.getElementById("textarea-input").value;
    return input;
}

function putOutput(output){
    document.getElementById("textarea-output").value = output;
}

document.querySelector('#process-button').addEventListener('click', ExecuteKick)
