import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';
import '../assets/css/zabuto_calendar.css';
import '../assets/js/gritter/css/jquery.gritter.css';
import '../assets/lineicons/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Cookies from 'universal-cookie';

function Inicio_E() {
  const cerrarSesion = () => {
    const cookies = new Cookies();
    cookies.remove('id', { path: "/" });
    cookies.remove('nombre', { path: "/" });
    cookies.remove('cargo', { path: "/" });
    cookies.remove('edad', { path: "/" });
    cookies.remove('email', { path: "/" });
    cookies.remove('telefono', { path: "/" });
    cookies.remove('CC', { path: "/" });
    cookies.remove('estado', { path: "/" });
    window.location.href = '/login';
  };
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario no está autenticado (no existe la cookie 'email')
    if (!cookies.get('email')) {
      // Redirigir al índice (login)
      navigate('/login');
    }
  }, [navigate]);
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
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
            <p className="centered"><Link to="/perfil_e"><img src="/img/Master_center.jpg" className="img-circle" width="100" alt="profile" /></Link></p>
            <li className="mt">
              <Link to="/perfil_e">
                <i className="fa fa-user" />
                <span>Ver perfil</span>
              </Link>
            </li>
            <li className="divider" />
            <li className="sub-menu">
              <Link to="/inventario_e">
                <i className="fa fa-cubes" />
                <span>Inventario</span>
              </Link>
            </li>
            <li className="sub-menu">
              <Link to="/servicios_e">
                <i className="fa fa-cogs" />
                <span>Servicios</span>
              </Link>
            </li>
            <li className="sub-menu">
              <Link to="/cita_e">
                <i className="fa fa-calendar" />
                <span>Citas</span>
              </Link>
            </li>
            <li className="sub-menu">
              <Link to="/vehiculos_e">
                <i className="fa fa-car" />
                <span>Automóviles registrados</span>
              </Link>
            </li>
            <li className="sub-menu">
              <Link to="/procesos_e">
                <i className="fa fa-tasks" />
                <span>Procesos abiertos</span>
              </Link>
            </li>
            <li className="divider" />
            <li className="sub-menu">
                <button onClick={cerrarSesion} className="btn btn-link">
                  <i className="fa fa-sign-out" />
                    <span>Cerrar sesión</span>
                 </button>
              </li>
          </ul>
        </div>
      </aside>

      <div>
        {/* Banner Section */}
        <section className="banner_main">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <div className="text-bg">
                  <h1>Master <br />Center</h1>
                  <span>Tu Taller Especializado en BMW y Mini Cooper</span>
                  <p>Servicio y reparacion de vehiculos BMW y Mini Cooper en Bogotá <br /> ¡Visitanos cl 134 Bis #45a-20!</p>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <div id="about" className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-7">
                <div className="about_box">
                  <div className="titlepage">
                    <h2><strong className="yellow" style={{color: '#760404'}}>Acerca de Nosotros</strong><br /> TU TALLER ESPECIALIZADO EN BMW Y MINI COOPER</h2>
                  </div>
                  <h3>SERVICIOS DE ALTA CALIDAD PARA MANTENER TU BMW O MINI COOPER EN ÓPTIMAS CONDICIONES.</h3>
                  <p>En Master Center, ofrecemos un servicio integral para vehículos BMW y Mini Cooper. Nuestro equipo de expertos garantiza la mejor atención y mantenimiento para tu vehículo.</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div className="about_img">
                  <figure><img src="/img/MASTER-CENTER.jpg" alt="#" /></figure>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <h3>Contactanos</h3>
              <ul className="location_icon">
                <li><i className="fa fa-map-marker" aria-hidden="true" /> cl 134 Bis #45a-20! <br /> Bogotá</li>
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
              <h3>Menu</h3>
              <div className="menu-container">
                <ul className="link_icon">
                  <li><Link to="/inicio_e">Inicio</Link></li>
                  <li><Link to="/perfil_e">Perfil</Link></li>
                  <li><Link to="/inventario_e">Inventario</Link></li>
                  <li><Link to="/servicios_e">Servicios</Link></li>
                </ul>
                <ul className="link_icon">
                  <li><Link to="/cita_e">Citas</Link></li>
                  <li><Link to="/vehiculos_e">Automóviles Registrados</Link></li>
                  <li><Link to="/procesos_e">Procesos Abiertos</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            2014 - Alvarez.is
            <Link to="#" className="go-top">
              <i className="fa fa-angle-up" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Inicio_E;
