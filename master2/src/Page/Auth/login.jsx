import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/style-responsive.css';
import './assets/css/zabuto_calendar.css';
import './assets/js/gritter/css/jquery.gritter.css';
import './assets/lineicons/style.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:5000/empleados";
const cookies = new Cookies();

function Login() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario está autenticado (existe la cookie 'email')
    if (cookies.get('email')) {
      // Redirigir a la página de inicio_a
      navigate('/inicio_a');
    }
  }, [navigate]);

  const [sidebarActive, setSidebarActive] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  // Función para alternar la visibilidad del sidebar
  const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
  };

  // Manejador de cambio para inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Función para iniciar sesión
  const iniciarSesion = async () => {
    try {
      // Verificar si el usuario es empleado
      const responseEmpleado = await axios.get(`${baseUrl}?email=${form.email}`);
      const empleados = responseEmpleado.data;
  
      // Verificar si el usuario es cliente
      const responseCliente = await axios.get('http://localhost:5000/clientes');
      const clientes = responseCliente.data;
  
      // Si se encuentra un empleado con ese email, verificar la contraseña
      if (empleados.length > 0) {
        const empleado = empleados[0]; // Suponiendo que solo hay un empleado con ese email
  
        // Verificar si la contraseña es correcta
        if (empleado.password === md5(form.password)) {
          // Guardar cookies con la información del empleado
          cookies.set('id', empleado.id, { path: "/" });
          cookies.set('nombre', empleado.nombre, { path: "/" });
          cookies.set('cargo', empleado.cargo, { path: "/" });
          cookies.set('edad', empleado.edad, { path: "/" });
          cookies.set('email', empleado.email, { path: "/" });
          cookies.set('telefono', empleado.telefono, { path: "/" });
          cookies.set('CC', empleado.CC, { path: "/" });
          cookies.set('estado', empleado.estado, { path: "/" });
  
          // Redirigir según el rol (Administrador o Empleado)
          if (empleado.cargo === "Administrador") {
            alert(`Bienvenido Administrador ${empleado.nombre}`);
            window.location.href = "./inicio_a"; // Redirigir a la página de administrador
          } else {
            alert(`Bienvenido Empleado ${empleado.nombre}`);
            window.location.href = "./inicio_e"; // Redirigir a la página de empleado
          }
          return; // Termina la ejecución si es un empleado
        }
      }
  
      // Si no es empleado, verificar si es un cliente
      const cliente = clientes.find(cliente => cliente.email === form.email);
      if (cliente && cliente.contraseña === form.password) {
        // Guardar cookies con la información del cliente
        cookies.set('id', cliente.cliente_id, { path: "/" });
        cookies.set('nombre', cliente.nombre, { path: "/" });
        cookies.set('email', cliente.email, { path: "/" });
        cookies.set('telefono', cliente.telefono, { path: "/" });
  
        alert(`Bienvenido Cliente ${cliente.nombre}`);
        window.location.href = "./inicio_c"; // Redirigir a la página de cliente
      } else {
        alert('El correo o la contraseña no son correctos');
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      alert('Hubo un error durante el inicio de sesión. Por favor, inténtelo de nuevo.');
    }
  };
  
  


  return (
    <div id="container">
      {/* Header */}
      <header className="header black-bg">
        <div className="sidebar-toggle-box" onClick={toggleSidebar}>
          <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Menu"></div>
        </div>
        <Link to="/" className="logo"><b>Master Center</b></Link>
        <div className="top-menu">
          <ul className="nav pull-right top-menu">
            <li><Link className="fa fa-sign-in" aria-hidden="true" to="/login" style={{ fontSize: '30px' }}></Link></li>
            <li><Link className="fa fa-user-plus" aria-hidden="true" to="/register" style={{ fontSize: '30px' }}></Link></li>
          </ul>
        </div>
      </header>

      {/* Sidebar */}
      <aside>
        <div
          id="sidebar"
          className={`nav-collapse ${sidebarActive ? 'active' : ''}`}
          style={{
            width: '250px',
            height: '100%',
            position: 'fixed',
            top: '0',
            left: sidebarActive ? '0' : '-250px',
            transition: 'left 0.3s ease',
            zIndex: '1000'
          }}
        >
          <ul className="sidebar-menu" id="nav-accordion">
            <p className="centered"><Link to="/profile"><img src="/img/Master_center.jpg" className="img-circle" width="100" alt="profile" /></Link></p>
            <li className="mt">
              <Link className="active" to="/">
                <i className="fa fa-home"></i>
                <span>Inicio</span>
              </Link>
            </li>
            <li className="sub-menu">
              <Link to="/servicios">
                <i className="fa fa-cogs"></i>
                <span>Servicios</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <br />

      <div id="login-page">
        <div className="container">
          <form className="form-login" onSubmit={e => e.preventDefault()}>
            <h2 className="form-login-heading">Iniciar Sesión</h2>
            <div className="login-wrap">
              <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="Correo" autoFocus />
              <br />
              <input type="password" className="form-control" name="password" onChange={handleChange} placeholder="Contraseña" />
              <label className="checkbox">
                <span className="pull-right">
                  <br />
                  <a href="#myModal" data-bs-toggle="modal"> Olvidaste tu contraseña?</a>
                </span>
              </label>
              <br />
              <button className="btn btn-theme btn-block" type="button" onClick={iniciarSesion}><i className="fa fa-lock" /> Iniciar Sesión</button>
              <hr />
              <div className="registration">
                No tienes cuenta?<br />
                <Link to="/register">
                  Registrarse /
                </Link>
                <Link to="/">
                  Volver
                </Link>
              </div>
            </div>
            {/* Modal */}
            <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal" className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Olvidaste tu contraseña?</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>Ingrese el Correo para poder restablecer su contraseña.</p>
                    <input type="text" name="email" placeholder="Correo" autoComplete="off" className="form-control placeholder-no-fix" />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button className="btn btn-theme" type="button">Enviar</button>
                  </div>
                </div>
              </div>
            </div>
            {/* modal */}
          </form>	  
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <h3>Contáctanos</h3>
              <ul className="location_icon">
                <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true" /></a> cl 134 Bis #45a-20!
                  <br /> Bogotá
                </li>
                <li><a href="#"><i className="fa fa-envelope" aria-hidden="true" /></a> mastercenterplus@gmail.com</li>
                <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true" /></a> +57 3118089487</li>
              </ul>
              <ul className="social_icon">
                <li> <a href="https://www.facebook.com/groups/569329231237225/?ref=share&mibextid=NSMWBT"><i className="fa fa-facebook-f" /></a></li>
                <li> <a href="https://www.tiktok.com/@mastercenter_plus?_t=8oTBfyMPmtS&_r=1"><i className="fa fa-tiktok" /></a></li>
                <li> <a href="https://www.instagram.com/mastercenter_plus?igsh=M2UxMmxpaWpxcWky"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h3>Menú</h3>
              <ul className="link_icon">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            2014 - Alvarez.is
            <a href="#top" className="go-top">
              <i className="fa fa-angle-up" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
