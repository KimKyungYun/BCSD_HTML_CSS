let content=document.querySelector('#round');
let parent=document.querySelector('#box');

document.querySelector('div').addEventListener('click',(point)=>{
    content.style.left=point.clientX+'px';
    content.style.top=point.clientY+'px';
    content.style.transform='translate(-50%,-50%)';

})