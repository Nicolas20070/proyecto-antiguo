import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/style-responsive.css';
import './assets/css/zabuto_calendar.css';
import './assets/js/gritter/css/jquery.gritter.css';
import './assets/lineicons/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { addClient } from '../../apiservice'; // Asegúrate de que esta ruta sea correcta

function Register() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    direccion: '',
    telefono: '',
  });

  const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { nombre, email, contraseña, direccion, telefono } = formData;

    if (!nombre || !email || !contraseña || !direccion || !telefono) {
      window.alert('Por favor, complete todos los campos.');
      return;
    }

    const newClient = {
      nombre,
      email,
      contraseña,
      direccion,
      telefono
    };

    try {
      await addClient(newClient);
      window.alert('Registro exitoso.'); // Alerta del sistema
      setFormData({
        nombre: '',
        email: '',
        contraseña: '',
        direccion: '',
        telefono: '',
      });
    } catch (error) {
      window.alert('Error al registrar el usuario. Inténtelo de nuevo.'); // Alerta del sistema
      console.error('Error al registrar el usuario:', error);
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
            zIndex: '1000' // Ensure sidebar is on top
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
              <Link to="/servicio_F">
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
          <form className="form-login" onSubmit={handleSubmit}>
            <h2 className="form-login-heading">Registrarse</h2>
            <div className="login-wrap">
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                autoFocus
              />
              <br />
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Correo"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                id="contraseña"
                className="form-control"
                placeholder="Contraseña"
                value={formData.contraseña}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                id="direccion"
                className="form-control"
                placeholder="Dirección"
                value={formData.direccion}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                id="telefono"
                className="form-control"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
              />
              <br />
              <button className="btn btn-theme btn-block" type="submit">
                <i className="fa fa-lock" /> Registrarse
              </button>
              <hr />
              <div className="registration">
                ¿Ya tienes cuenta?<br />
                <Link to="/login">
                  Inicio de Sesión
                </Link>
                <br />
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
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 className="modal-title">Olvidaste tu contraseña?</h4>
                  </div>
                  <div className="modal-body">
                    <p>Ingrese el correo para poder restablecer su contraseña.</p>
                    <input type="text" name="email" placeholder="Correo" autoComplete="off" className="form-control placeholder-no-fix" />
                  </div>
                  <div className="modal-footer">
                    <button data-dismiss="modal" className="btn btn-default" type="button">Cancelar</button>
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
                <li><i className="fa fa-map-marker" aria-hidden="true" /> cl 134 Bis #45a-20!<br /> Bogotá</li>
                <li><i className="fa fa-envelope" aria-hidden="true" /> mastercenterplus@gmail.com</li>
                <li><i className="fa fa-volume-control-phone" aria-hidden="true" /> +57 3118089487</li>
              </ul>
              <ul className="social_icon">
                <li><a href="https://www.facebook.com/groups/569329231237225/?ref=share&mibextid=NSMWBT"><i className="fa fa-facebook-f" /></a></li>
                <li><a href="https://www.tiktok.com/@mastercenter_plus?_t=8oTBfyMPmtS&_r=1"><i className="fa fa-tiktok" /></a></li>
                <li><a href="https://www.instagram.com/mastercenter_plus?igsh=M2UxMmxpaWpxcWky"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h3>Menú</h3>
              <ul className="link_icon">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicio_F">Servicios</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            2014 - Alvarez.is
            <Link to="#top" className="go-top">
              <i className="fa fa-chevron-up"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Register;
