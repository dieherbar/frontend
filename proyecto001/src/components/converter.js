import data from 'public/data.json'
// $.getJSON('data.json', function (json) {
//     var arrayLocal = [];
//     for (var key in json) {
//         if (json.hasOwnProperty(key)) {
//             var item = json[key];
//             arrayLocal.push({
//                 name: item.name,
//                image: item.image
//             });            
//         }
//     }
//     });
//     console.log(array)

function convertir(){
    const myJsonArray = data;
    const myJsArray = Array.from(JSON.parse(myJsonArray));
    return (myJsArray);
}
   

