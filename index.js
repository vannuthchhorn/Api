url = "https://jsonplaceholder.typicode.com/todos";
const method = "GET";
const syncs = "true";
const api = new XMLHttpRequest();
api.open(method, url, syncs);
api.onload = () => {
    const data = JSON.parse(api.response);
    const result = document.querySelector('table');
    data.forEach(item =>{
        if(item.id <=50) {
            result.innerHTML +=`
                <tr>
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.completed}</td>
                </tr>
            `;
        }
    })
}
api.send();