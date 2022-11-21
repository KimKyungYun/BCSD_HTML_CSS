const text = document.getElementById('input_do');
const active_box = document.getElementById('active_box');
const done_box = document.getElementById('done_box');

/*text.addEventListener('keydown', (f) => {
    if (f.keyCode == 13) {
        if (text.value == "")
            alert("할 일을 입력하시오");
        else {
            let new_do = document.createElement('span');
            let done_button = document.createElement('button');
            new_do.setAttribute('class','new_do');
            done_button.setAttribute('class', 'done_button btn');
            new_do.innerHTML = text.value;
            done_button.innerHTML = "Done";
            new_do.appendChild(done_button);

            done_button.addEventListener('click',()=>{
                done_button.innerHTML = "delete";
                done_box.appendChild(new_do);
                done_button.addEventListener('click',()=>{
                    new_do.remove();
                });
            });

            active_box.appendChild(new_do);
            text.value = "";


        }
    }
});*/
function addNewDo(){
    let new_do = document.createElement('span');
    let done_button = document.createElement('button');
    new_do.setAttribute('class','new_do');
    done_button.setAttribute('class', 'done_button btn')
    new_do.innerHTML = text.value;
    done_button.innerHTML = "Done";
    new_do.appendChild(done_button);

    done_button.onclick=() => clickDone(done_button);

    active_box.appendChild(new_do);
    text.value="";

    return false;
}
function clickDone(btn){
    btn.innerHTML = "delete";
    done_box.appendChild(btn.parentElement);

    btn.onclick=() => clickDelete(btn);
}
function clickDelete(btn){
    btn.parentElement.remove();
}