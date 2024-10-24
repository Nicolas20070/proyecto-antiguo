import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';
import '../assets/css/zabuto_calendar.css';
import '../assets/js/gritter/css/jquery.gritter.css';
import '../assets/lineicons/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Perfil_C() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Nombre Apellido',
    email: 'admin@example.com',
    contact: '123456789',
    position: 'Cliente',
    password: 'password',
    status: 'Activo',
  });

  const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
  };

  const handleEditChange = (e) => {
    const { id, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios
    console.log('Datos guardados:', profile);
  };

  const handleDelete = () => {
    // Aquí puedes implementar la lógica para eliminar el perfil
    console.log('Perfil eliminado');
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
            <p className="centered"><Link to="/perfil_c"><img src="/img/Master_center.jpg" className="img-circle" width="100" alt="profile" /></Link></p>
            <div>
              <li className="mt">
                <Link className="active" to="/perfil_c">
                  <i className="fa fa-user" />
                  <span>Ver perfil</span>
                </Link>
              </li>
              <li className="divider" />
              <li className="sub-menu">
                <Link to="/servicios_c">
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
                  <span>Mis vehículos</span>
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
        {/* Banner start */}
        <section className="banner_main">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <div className="text-bg">
                  <h1>Perfil</h1>
                  <span>Tu Taller Especializado en BMW y Mini Cooper</span>
                  <p>Servicio y reparación de vehículos BMW y Mini Cooper en Bogotá <br /> ¡Visítanos cl 134 Bis #45a-20!</p>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
              </div>
            </div>
          </div>
        </section>
        {/* end banner */}
        {/* Main content start */}
        <section id="main-content">
          <section className="wrapper">
            <div className="profile-container">
              <div className="row">
                {/* Profile info start */}
                <div className="profile-info">
                  <img src="/img/ui-zac.jpg" alt="Perfil del Administrador" width={150} />
                  <div className="form-group">
                    <label htmlFor="name">Nombre y apellido:</label>
                    <input type="text" className="form-control" id="name" placeholder="Nombre y apellido" value={profile.name} readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Dirección de correo electrónico:</label>
                    <input type="email" className="form-control" id="email" placeholder="Correo electrónico" value={profile.email} readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact">Número de contacto:</label>
                    <input type="tel" className="form-control" id="contact" placeholder="Número de contacto" value={profile.contact} readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="position">Puesto:</label>
                    <input type="text" className="form-control" id="position" placeholder="Puesto" value={profile.position} readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" className="form-control" id="password" placeholder="Contraseña" value={profile.password} readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Estado:</label>
                    <input type="text" className="form-control" id="status" placeholder="Estado" value={profile.status} readOnly />
                  </div>
                </div>
                {/* Profile info end */}
                {/* Action buttons start */}
                <div className="profile-actions">
                  <button className="btn btn-danger btn-separation" data-bs-toggle="modal" data-bs-target="#deleteModal">Borrar</button>
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"> Editar</button>
                </div>
                {/* Action buttons end */}
              </div>
            </div>
            {/* Delete confirmation modal */}
            <div className="modal fade" id="deleteModal" tabIndex={-1} role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="deleteModalLabel">Confirmar eliminación</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ¿Estás seguro de que deseas eliminar este perfil?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Edit profile modal */}
            <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="editModalLabel">Editar perfil</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form id="edit-profile-form">
                      <div className="form-group">
                        <label htmlFor="edit-name">Nombre y apellido:</label>
                        <input type="text" className="form-control" id="name" value={profile.name} onChange={handleEditChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="edit-email">Dirección de correo electrónico:</label>
                        <input type="email" className="form-control" id="email" value={profile.email} onChange={handleEditChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="edit-contact">Número de contacto:</label>
                        <input type="tel" className="form-control" id="contact" value={profile.contact} onChange={handleEditChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="edit-position">Puesto:</label>
                        <input type="text" className="form-control" id="position" value={profile.position} onChange={handleEditChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="edit-password">Contraseña:</label>
                        <input type="password" className="form-control" id="password" value={profile.password} onChange={handleEditChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="edit-status">Estado:</label>
                        <input type="text" className="form-control" id="status" value={profile.status} onChange={handleEditChange} />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Guardar cambios</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
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

export default Perfil_C;
