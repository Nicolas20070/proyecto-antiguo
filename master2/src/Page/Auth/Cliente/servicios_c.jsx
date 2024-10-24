import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';
import '../assets/css/zabuto_calendar.css';
import '../assets/js/gritter/css/jquery.gritter.css';
import '../assets/lineicons/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Servicios_C() {
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
        <Link to="/inicio_c" className="logo"><b>Master Center</b></Link>
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
            <p className="centered"><Link to="/perfil_c"><img src="/img/Master_center.jpg" className="img-circle" width="100" alt="profile" /></Link></p>
            <div>
              <li className="mt">
                <Link to="/perfil_c">
                  <i className="fa fa-user" />
                  <span>Ver perfil</span>
                </Link>
              </li>
              <li className="divider" />
              <li className="sub-menu">
                <Link className="active" to="/servicios_c">
                  <i className="fa fa-cubes" />
                  <span>Servicios</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link to="/citas_c">
                  <i className="fa fa-cogs" />
                  <span>Agendar Cita</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link to="/vehiculos_c">
                  <i className="fa fa-users" />
                  <span>Mis vehiculos</span>
                </Link>
              </li>
              <li className="divider" />
              <li className="sub-menu">
                <Link to="/">
                  <i className="fa fa-sign-out" />
                  <span>Cerrar sesión</span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </aside>

      <div>
        {/*Banner start*/}
        <section className="banner_main">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <div className="text-bg">
                  <h1>Servicios</h1>
                  <span>Tu Taller Especializado en BMW y Mini Cooper</span>
                  <p>Servicio y reparación de vehículos BMW y Mini Cooper en Bogotá <br /> ¡Visítanos cl 134 Bis #45a-20!</p>
                </div>
              </div>
              <div className="col-md-5 col-lg-5" />
            </div>
          </div>
        </section>
        <div className="container">
          <div className="inventory-actions">
            <input type="text" id="search" className="form-control search-box" placeholder="Buscar" />
          </div>
          <div className="service-box2">
            <h3>Servicio: Cambio de Aceite</h3>
            <p><strong>Descripción:</strong> Reemplazo del aceite del motor y filtro para asegurar el buen funcionamiento del motor.</p>
            <p><strong>Duración Estimada:</strong> 30 minutos</p>
            <p><strong>Costo Aproximado:</strong> $50</p>
            <p><strong>Categoría:</strong> Mantenimiento</p>
            <p><strong>Estado:</strong> Disponible</p>
            <p><strong>Proveedor:</strong> Interno</p>
          </div>
          <div className="service-box2">
            <h3>Servicio: Cambio de Pastillas de Freno</h3>
            <p><strong>Descripción:</strong> Sustitución de las pastillas de freno desgastadas para garantizar la seguridad del vehículo.</p>
            <p><strong>Duración Estimada:</strong> 1 hora</p>
            <p><strong>Costo Aproximado:</strong> $80</p>
            <p><strong>Categoría:</strong> Frenos</p>
            <p><strong>Estado:</strong> Disponible</p>
            <p><strong>Proveedor:</strong> Interno</p>
          </div>
          <div className="service-box2">
            <h3>Servicio: Alineación y Balanceo</h3>
            <p><strong>Descripción:</strong> Ajuste de la alineación y balanceo de las ruedas para un manejo seguro y estable.</p>
            <p><strong>Duración Estimada:</strong> 45 minutos</p>
            <p><strong>Costo Aproximado:</strong> $60</p>
            <p><strong>Categoría:</strong> Suspensión</p>
            <p><strong>Estado:</strong> Disponible</p>
            <p><strong>Proveedor:</strong> Interno</p>
          </div>
          <div className="service-box2">
            <h3>Servicio: Cambio de Bujías</h3>
            <p><strong>Descripción:</strong> Reemplazo de las bujías del motor para asegurar una correcta combustión.</p>
            <p><strong>Duración Estimada:</strong> 30 minutos</p>
            <p><strong>Costo Aproximado:</strong> $40</p>
            <p><strong>Categoría:</strong> Motor</p>
            <p><strong>Estado:</strong> Disponible</p>
            <p><strong>Proveedor:</strong> Interno</p>
          </div>
          <div className="service-box2">
            <h3>Servicio: Revisión General</h3>
            <p><strong>Descripción:</strong> Inspección completa del vehículo para identificar posibles problemas.</p>
            <p><strong>Duración Estimada:</strong> 2 horas</p>
            <p><strong>Costo Aproximado:</strong> $100</p>
            <p><strong>Categoría:</strong> Diagnóstico</p>
            <p><strong>Estado:</strong> Disponible</p>
            <p><strong>Proveedor:</strong> Interno</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <h3>Contactanos</h3>
              <ul className="location_icon">
                <li><Link to="#"><i className="fa fa-map-marker" aria-hidden="true" /></Link> cl 134 Bis #45a-20!
                  <br /> Bogotá
                </li>
                <li><Link to="#"><i className="fa fa-envelope" aria-hidden="true" /></Link>mastercenterplus@gmail.com</li>
                <li><Link to="#"><i className="fa fa-volume-control-phone" aria-hidden="true" /></Link>+57 3118089487</li>
              </ul>
              <ul className="social_icon">
                <li> <Link to="https://www.facebook.com/groups/569329231237225/?ref=share&mibextid=NSMWBT"><i className="fa fa-facebook-f" /></Link></li>
                <li> <Link to="https://www.tiktok.com/@mastercenter_plus?_t=8oTBfyMPmtS&_r=1"><i className="fa fa-tiktok" /></Link></li>
                <li> <Link to="https://www.instagram.com/mastercenter_plus?igsh=M2UxMmxpaWpxcWky"><i className="fa fa-instagram" /></Link></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h3>Servicios adicionales</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <ul className="link_icon">
                    <li> <Link to="/citas_c">Agendar Cita</Link></li>
                    <li> <Link to="/servicios_c">Servicios</Link></li>
                    <li> <Link to="/vehiculos_c">Mis vehiculos</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Servicios_C;
