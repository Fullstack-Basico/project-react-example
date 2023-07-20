
import { Form, Button } from 'react-bootstrap';
import './App.css';
import { sendData } from "./Logic";
import { useState } from 'react';
function App() {

  const [values, setValues] = useState({
    name: "",
    author: "",
    isbn: "",
    edition: ""
  });

  let currentDate = Date();

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




  return (

    <div id="form-container" style={{ backgroundColor: "rgb(232, 232, 233)" }}>

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
          <Button variant='primary' onClick={()=>sendData(values)} > Enviar </Button>
          <Button variant='primary' > Consultar </Button>
        </div>

      </Form>

    </div>

  );
}



export default App;
