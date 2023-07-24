
import { Form, Button, Table } from 'react-bootstrap';
import './App.css';
import { sendData, getData } from "./Logic";
import { useState, useEffect } from 'react';
function App() {

  const [values, setValues] = useState({
    name: "",
    author: "",
    isbn: "",
    edition: ""
  });


  const [books, setBooks] = useState([]);

  // let currentDate = Date();

  const changeValue = (field) => {

    // console.log("Estado de la constante values => ", values);

    // console.log(field.target);

    // console.log("Propiedad 'name' del campo es =>", field.target.name);
    // console.log("valor  del campo es =>", field.target.value);
    // console.log(field.target.type);
    // console.log(field.target.placeholder);

    let data = {
      ...values,
      [field.target.name]: field.target.value,
    }

    console.log("Valor variable data", data);

    setValues(data);
  }


  useEffect(() => {

    console.log("Cambio de estado variable values", 2 + 2)

    getData(setBooks)
  }, [values]);


  return (

    <div id="form-container" style={{ backgroundColor: "rgb(232, 232, 233)" }}>

      <h3>LIBROS REGISTRADOS</h3>

      <br />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Autor</th>
            <th>ISBN</th>
            <th>Edición</th>
          </tr>
        </thead>
        <tbody>

          {
            books.map(element => {
              // console.log("resultado", element);
              return (
                <>
                  <tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.author}</td>
                    <td>{element.isbn}</td>
                    <td>{element.edition}</td>
                  </tr>
                </>)
            })
          }

        </tbody>
      </Table>
      <br />


      <h3>DATOS A ENVIAR</h3>
      <p>
        Nombre: {values.name}
      </p>
      <p>
        Autor:  {values.author}
      </p>
      <p>
        ISBN: {values.isbn}
      </p>
      <p>
        Edición: {values.edition}
      </p>


      <h3>FORMULARIO LIBRO</h3>
      <br />
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre Libro</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Ingrese Nombre libro"
            onChange={(field) => { changeValue(field) }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Autor Libro</Form.Label>
          <Form.Control type="text"
            name="author"
            placeholder="Ingrese Nombre Autor libro"
            onChange={(field) => { changeValue(field) }} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>ISBN Libro</Form.Label>
          <Form.Control type="text"
            name="isbn"
            placeholder="Ingrese ISBN Libro"
            onChange={(field) => { changeValue(field) }} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Edición Libro</Form.Label>
          <Form.Control type="text"
            name="edition"
            placeholder="Ingrese Edición libro"
            onChange={(field) => { changeValue(field) }} />
        </Form.Group>

        <div className='d-grid gap-3'>
          <Button variant='primary' onClick={() => { sendData(values); getData(setBooks); }} > Enviar </Button>
          {/* <Button variant='primary' onClick={() => getData(setBooks)}> Consultar </Button> */}
        </div>

      </Form>

      <br />


    </div>

  );
}



export default App;
