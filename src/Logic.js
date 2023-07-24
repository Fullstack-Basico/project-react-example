

function sendData(data) {

    console.log("Datos Enviados =>", data);

    let url = "http://127.0.0.1:8000/api/book";
    let params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }

    fetch(url, params).then((response) => {

        console.log(response);
        console.log(response.json());

        if (response.status === 201) {
            alert("Creación Exitosa Libro !!");
        } else {
            alert("Error en la creación de Libro !!");
        }
    });
    return true
}

const getData = async (fnSetBooks)=>{

    let url = "http://127.0.0.1:8000/api/books";
    let params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    let responseResult = await fetch(url,params);

    // console.log(responseResult);

    let dataResult = await responseResult.json();

    // console.log(dataResult);

    fnSetBooks(dataResult);

    return true

}


export { sendData, getData };