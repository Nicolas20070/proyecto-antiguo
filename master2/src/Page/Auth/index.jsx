import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SpeedDial } from 'primereact/speeddial';
import { Menubar } from 'primereact/menubar';
import { Toast } from 'primereact/toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/style-responsive.css';
import './assets/css/zabuto_calendar.css';
import './assets/js/gritter/css/jquery.gritter.css';
import './assets/lineicons/style.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const Index = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const toast = useRef(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarActive((prevState) => !prevState);
  };

 

  // Íconos de login y registro en el lado derecho del Menubar
  const end = (
    <div>
      <Link to="/login" style={{ marginRight: '15px' }}>
        <i className="pi pi-sign-in" style={{ fontSize: '1.5em' }}></i>
      </Link>
      <Link to="/register">
        <i className="pi pi-user-plus" style={{ fontSize: '1.5em' }}></i>
      </Link>
    </div>
  );

  // Logo o texto en el lado izquierdo del Menubar
  const start = (
    <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
      <b>Master Center</b>
    </Link>
  );

  const items = [
    {
      label: 'Add',
      icon: 'pi pi-pencil',
      command: () => {
        toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
      }
    },
    {
      label: 'Update',
      icon: 'pi pi-refresh',
      command: () => {
        toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
      }
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
      }
    },
    {
      label: 'Upload',
      icon: 'pi pi-upload',
      command: () => {
        navigate('/fileupload');
      }
    },
    {
      label: 'React Website',
      icon: 'pi pi-external-link',
      command: () => {
        window.location.href = 'https://react.dev/';
      }
    }
  ];

  return (
    <div id="container">
      {/* Header con Menubar de PrimeReact */}
      <Menubar  start={start} end={end} />

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
            <p className="centered"><Link to="/"><img src="/img/Master_center.jpg" className="img-circle" width="100" alt="profile" /></Link></p>
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

      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="6000">
            <img src="/img/login-bg.jpeg" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <p>Tu Taller Especializado en BMW y Mini Cooper</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/img/carro.jpeg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <p>Servicio y reparación de vehículos BMW y Mini Cooper en Bogotá</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/img/MASTER-CENTER.jpg" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <p>¡Visítanos en cl 134 Bis #45a-20!</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* About Section */}
      <div id="about" className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-7">
              <div className="about_box">
                <div className="titlepage">
                  <h2><strong className="yellow" style={{ color: '#760404' }}>Acerca de Nosotros</strong><br /> TU TALLER ESPECIALIZADO EN BMW Y MINI COOPER</h2>
                </div>
                <h3>SERVICIOS DE ALTA CALIDAD PARA MANTENER TU BMW O MINI COOPER EN ÓPTIMAS CONDICIONES.</h3>
                <p>En Master Center, ofrecemos un servicio integral para vehículos BMW y Mini Cooper. Nuestro equipo de expertos garantiza la mejor atención y mantenimiento para tu vehículo.</p>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="about_img">
                <figure><img src="/img/Nosotros.jpeg" alt="Nosotros" /></figure>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nosotros */}
      <section id="main-content">
        <section className="wrapper">
          <div className="about-container">
            <div className="about-text">
              <h2>Bienvenidos a Master Center</h2>
              <p>En Master Center, nos especializamos en la reparación y mantenimiento de vehículos BMW y Mini Cooper.
                Con años de experiencia en el sector automotriz, nuestro equipo de profesionales está comprometido a ofrecer
                un servicio de alta calidad para garantizar la satisfacción y seguridad de nuestros clientes.</p>
              <p>Ubicados en la Avenida 134 en Bogotá, Colombia, contamos con instalaciones modernas y equipadas con
                la tecnología más avanzada para diagnosticar y solucionar cualquier problema que pueda tener su vehículo.
                Desde mantenimientos preventivos hasta reparaciones complejas, estamos aquí para ayudarle.</p>
              <p>Nuestra misión es proporcionar un servicio excepcional y confiable, utilizando solo piezas y materiales
                de la más alta calidad. Valoramos la confianza que nuestros clientes depositan en nosotros y trabajamos
                arduamente para mantenerla. ¡Visítenos y descubra por qué Master Center es el taller de confianza para su BMW o Mini Cooper!</p>
            </div>
            <div className="about-image">
              <img src="/img/acerca de.jpeg" alt="Master Center" />
            </div>
          </div>
        </section>
      </section>

      {/* Map Section */}
      

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div id="map" style={{ margin: '20px 0', textAlign: 'left' }}>
        <div className="container">
          <h3 style={{ marginBottom: '20px' }}>Ubicación</h3>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.059570171813!2d-74.0470406844883!3d4.691859396678295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b388a6d3d5b%3A0xb3f71b236a151d38!2sCl%20134%20Bis%20%2345a-20%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1692321530714!5m2!1ses!2sco" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación"></iframe>
            </div>
          </div>
        </div>
      </div>
            <div className="col-lg-5 col-md-6 col-sm-6">
              <h3>Contáctanos</h3>
              <ul className="location_icon">
                <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true" /></a> cl 134 Bis #45a-20!
                  <br /> Bogotá
                </li>
                <li><a href="#"><i className="fa fa-envelope" aria-hidden="true" /></a>mastercenterplus@gmail.com</li>
                <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true" /></a>+57 3118089487</li>
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
          </div>
        </div>
      </footer>

      {/* Botón flotante con PrimeReact SpeedDial */}
      <div style={{ position: 'relative', height: '0' }}>
        <Toast ref={toast} />
        <SpeedDial
          model={items}
          direction="up"
          style={{ position: 'fixed', bottom: '30px', left: '30px' }}
          showIcon="pi pi-bars"
          hideIcon="pi pi-times"
          buttonClassName="p-button-rounded p-button-primary p-button-lg"
        />
      </div>
    </div>
  );
};

export default Index;
