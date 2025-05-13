import "./App.css";

function App() {
  return (
    <>
      <div className="formulario">
        <h1>Inicio de Sesión</h1>
        <form method="post">
          {/**Input del nombre del Usuario */}
          <div className="username">
            <input type="text" required></input>
            <label>Nombre de Usuario</label>
          </div>

          {/** Input de la contraseña*/}
          <div className="contraseña">
            <input type="password" required></input>
            <label>Contraseña</label>
          </div>

          <div className="Recordar">¿Olvido su contraseña?</div>
          {/** Boton Iniciar */}
          <input type="submit" value="Iniciar"></input>
        </form>
      </div>
    </>
  );
}

export default App;
