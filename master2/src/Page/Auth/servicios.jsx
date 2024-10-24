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

function Servicios() {
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
          <ul className="nav pull-right top-menu">
            <li><Link className="fa fa-sign-in" aria-hidden="true" to="/login" style={{ fontSize: '30px' }}></Link></li>
            <li><Link className="fa fa-user-plus" aria-hidden="true" to="/registro" style={{ fontSize: '30px' }}></Link></li>
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
              <Link  to="/">
                <i className="fa fa-home"></i>
                <span>Inicio</span>
              </Link>
            </li>
            <li className="sub-menu">
              <Link className="active" to="/servicios">
                <i className="fa fa-cogs"></i>
                <span>Servicios</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div>
        {/* Banner Start */}
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
              <div className="col-md-5 col-lg-5">
              </div>
            </div>
          </div>
        </section>
        {/* Banner End */}

        <div className="card-group">
          <div className="card">
            <img src="/img/Servicios/Mantenimiento.jpg" className="card-img-top" alt="Mantenimiento Preventivo" />
            <div className="card-body">
              <h5 className="card-title">Mantenimiento Preventivo</h5>
              <p className="card-text">Realizamos revisiones y ajustes periódicos para prevenir fallas y asegurar el buen funcionamiento de su vehículo.</p>
            </div>
          </div>
          <div className="card">
            <img src="/img/Servicios/motores.jpg" className="card-img-top" alt="Reparación de Motor" />
            <div className="card-body">
              <h5 className="card-title">Reparación de Motor</h5>
              <p className="card-text">Detectamos y solucionamos problemas en el motor de su vehículo, restaurando su rendimiento óptimo.</p>
            </div>
          </div>
          <div className="card">
            <img src="/img/Servicios/Frenos.jpg" className="card-img-top" alt="Servicio de Frenos" />
            <div className="card-body">
              <h5 className="card-title">Servicio de Frenos</h5>
              <p className="card-text">Aseguramos un frenado efectivo y seguro con nuestros servicios especializados en frenos.</p>
            </div>
          </div>
        </div>

        <div className="card-group">
          <div className="card">
            <img src="/img/Servicios/Alineacion.jpg" className="card-img-top" alt="Alineación y Balanceo" />
            <div className="card-body">
              <h5 className="card-title">Alineación y Balanceo</h5>
              <p className="card-text">Mejoramos la estabilidad y el manejo de su vehículo con la alineación de ruedas y su efectivo balanceo.</p>
            </div>
          </div>
          <div className="card">
            <img src="/img/Servicios/Electricidad.jpg" className="card-img-top" alt="Electricidad Automotriz" />
            <div className="card-body">
              <h5 className="card-title">Electricidad Automotriz</h5>
              <p className="card-text">Reparamos y mantenemos los sistemas eléctricos de su vehículo para un funcionamiento óptimo.</p>
            </div>
          </div>
          <div className="card">
            <img src="/img/Servicios/Tecno-M.png" className="card-img-top" alt="Revisión Tecno-Mecánica" />
            <div className="card-body">
              <h5 className="card-title">Revisión Tecno-Mecánica</h5>
              <p className="card-text">Realizamos una inspección exhaustiva para cumplir con las normativas de seguridad y emisiones, evaluando todos los sistemas mecánicos y técnicos de su vehículo.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div id="map" style={{ margin: '20px 0', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ marginBottom: '20px' }}>Ubicación</h3>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.059570171813!2d-74.0470406844883!3d4.691859396678295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b388a6d3d5b%3A0xb3f71b236a151d38!2sCl%20134%20Bis%20%2345a-20%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1692321530714!5m2!1ses!2sco"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <h3>Contáctanos</h3>
              <ul className="location_icon">
                <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true" /></a> cl 134 Bis #45a-20!<br /> Bogotá</li>
                <li><a href="#"><i className="fa fa-envelope" aria-hidden="true" /></a> mastercenterplus@gmail.com</li>
                <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true" /></a> +57 3118089487</li>
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
                <li><Link to="/servicios">Servicios</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            2014 - Alvarez.is
            <a href="#" className="go-top">
              <i className="fa fa-angle-up" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Servicios;
