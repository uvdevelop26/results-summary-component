const scored = document.querySelectorAll('.score');
const roles = document.querySelectorAll('.role');
const icons = document.querySelectorAll('.icon');

//console.log(icons[0].attributes.src.nodeValue)
console.log(icons)



fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        const datos = data

        scored.forEach((item, index) => {
            item.innerHTML = datos[index].score
        })

        roles.forEach((item, index) => {
            item.innerHTML = datos[index].category
        })

        icons.forEach((item, index) => {
            item.attributes.src.nodeValue = datos[index].icon
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));