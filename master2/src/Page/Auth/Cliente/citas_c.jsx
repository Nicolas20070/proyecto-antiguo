import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';
import '../assets/css/zabuto_calendar.css';
import '../assets/js/gritter/css/jquery.gritter.css';
import '../assets/lineicons/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Citas_C() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    licensePlate: '',
    model: '',
    vin: '',
    appointmentTime: '',
    serviceType: '',
    appointmentDate: '',
  });

  const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now().toString(), // Unique ID for each event
      title: 'Tienes una cita',
      start: `${formData.appointmentDate}T${formData.appointmentTime}`,
      extendedProps: {
        name: formData.name,
        contactNumber: formData.contactNumber,
        email: formData.email,
        licensePlate: formData.licensePlate,
        model: formData.model,
        vin: formData.vin,
      }
    };
    setEvents(prevEvents => [...prevEvents, newEvent]);
    setFormData({
      name: '',
      contactNumber: '',
      email: '',
      licensePlate: '',
      model: '',
      vin: '',
      appointmentTime: '',
      serviceType: '',
      appointmentDate: '',
    });
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
  };

  const handleCancelAppointment = () => {
    if (window.confirm('¿Estás seguro de que deseas cancelar esta cita?')) {
      setEvents(prevEvents => prevEvents.filter(event => event.id !== selectedEvent.id));
      setSelectedEvent(null);
    }
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
                <Link to="/servicios_c">
                  <i className="fa fa-cubes" />
                  <span>Servicios</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link className="active" to="/citas_c">
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
        {/* Sidebar end */}
        <section className="banner_main">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <div className="text-bg">
                  <h1>Citas</h1>
                  <span>Tu Taller Especializado en BMW y Mini Cooper</span>
                  <p>Servicio y reparación de vehículos BMW y Mini Cooper en Bogotá <br /> ¡Visítanos cl 134 Bis #45a-20!</p>
                </div>
              </div>
              <div className="col-md-5 col-lg-5" />
            </div>
          </div>
        </section>
        <div className="container">
          <div className="calendar-container">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
              }}
              events={events}
              eventContent={eventInfo => (
                <div>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => handleEventClick(eventInfo)}
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    {eventInfo.event.title}
                  </button>
                </div>
              )}
              eventClick={handleEventClick}
            />
          </div>
          {/* Botón para agregar cita */}
          <div className="text-center" style={{ marginTop: '20px' }}>
            <button type="button" className="btn btn-primary" onClick={() => setFormData({
              name: '',
              contactNumber: '',
              email: '',
              licensePlate: '',
              model: '',
              vin: '',
              appointmentTime: '',
              serviceType: '',
              appointmentDate: '',
            })}>
              Agregar Cita
            </button>
          </div>
        </div>
        <br />
        {/* Modal para agregar cita */}
        {formData && (
          <div className="modal show" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Agregar Cita</h5>
                  <button type="button" className="btn-close" onClick={() => setFormData(null)} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form id="appointmentForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Nombre</label>
                      <input type="text" className="form-control" id="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactNumber">Número de Contacto</label>
                      <input type="text" className="form-control" id="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo</label>
                      <input type="email" className="form-control" id="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="licensePlate">Número de Placa</label>
                      <input type="text" className="form-control" id="licensePlate" value={formData.licensePlate} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="model">Modelo</label>
                      <input type="text" className="form-control" id="model" value={formData.model} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vin">VIN</label>
                      <input type="text" className="form-control" id="vin" value={formData.vin} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="appointmentTime">Hora de la cita</label>
                      <input type="time" className="form-control" id="appointmentTime" value={formData.appointmentTime} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="serviceType">Tipo de servicio</label>
                      <input type="text" className="form-control" id="serviceType" value={formData.serviceType} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="appointmentDate">Fecha de la cita</label>
                      <input type="date" className="form-control" id="appointmentDate" value={formData.appointmentDate} onChange={handleInputChange} required />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setFormData(null)}>Cancelar</button>
                      <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Modal para detalles de la cita */}
        {selectedEvent && (
          <div className="modal show" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Detalles de la Cita</h5>
                  <button type="button" className="btn-close" onClick={() => setSelectedEvent(null)} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p><strong>Nombre:</strong> {selectedEvent.extendedProps.name}</p>
                  <p><strong>Número de Contacto:</strong> {selectedEvent.extendedProps.contactNumber}</p>
                  <p><strong>Correo:</strong> {selectedEvent.extendedProps.email}</p>
                  <p><strong>Número de Placa:</strong> {selectedEvent.extendedProps.licensePlate}</p>
                  <p><strong>Modelo:</strong> {selectedEvent.extendedProps.model}</p>
                  <p><strong>VIN:</strong> {selectedEvent.extendedProps.vin}</p>
                  <p><strong>Fecha y Hora:</strong> {selectedEvent.start.toLocaleString()}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" onClick={handleCancelAppointment}>Cancelar Cita</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setSelectedEvent(null)}>Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default Citas_C;
