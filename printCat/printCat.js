const cat=document.querySelector('#catImg');
function clicked() {
    axios({
        url: 'https://api.thecatapi.com/v1/images/search?size=full',
        method: 'get',
        data: {}
    })
        .then((response) => {
            cat.id= response.data[0].id;
            cat.src= response.data[0].url;
            cat.style.width = response.data[0].width;
            cat.style.height= response.data[0].height;
        });
}