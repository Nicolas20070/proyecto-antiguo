import axios from 'axios';
const API_URL = 'http://localhost:5000'; // Cambia esto si tu servidor de JSON Server tiene una URL diferente


// Obtener perfil del usuario
export const getUserProfile = async (userId) => {
  return await axios.get(`${API_URL}/empleados/${userId}`);
};

// Actualizar perfil del usuario
export const updateUserProfile = async (userId, profileData) => {
  return await axios.put(`${API_URL}/empleados/${userId}`, profileData);
};

// Eliminar perfil del usuario
export const deleteUserProfile = async (userId) => {
  return await axios.delete(`${API_URL}/empleados/${userId}`);
};


// Obtener productos del inventario
export const getInventoryItems = async () => { 
  try {
    const response = await fetch(`${API_URL}/productos`); // Cambia la ruta a la de tus productos
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    return [];
  }
};

// Agregar un nuevo producto
export const addInventoryItem = async (item) => {
  try {
    const response = await fetch(`${API_URL}/productos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const newItem = await response.json();
    return newItem;
  } catch (error) {
    console.error('Error adding inventory item:', error);
  }
};

// Editar un producto existente
export const updateInventoryItem = async (item) => {
  try {
    const response = await fetch(`${API_URL}/productos/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const updatedItem = await response.json();
    return updatedItem;
  } catch (error) {
    console.error('Error updating inventory item:', error);
  }
};

// Eliminar un producto
export const deleteInventoryItem = async (id) => {
  try {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error deleting inventory item:', error);
  }
};

// Obtener reportes de stock
export const getStockReports = async () => {
  try {
    const response = await fetch(`${API_URL}/reportes-stock`); // Cambia la ruta a la de tus reportes de stock
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock reports:', error);
    return [];
  }
};

// Agregar un nuevo cliente
export const addClient = async (client) => {
  try {
    const response = await fetch(`${API_URL}/clientes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const newClient = await response.json();
    return newClient;
  } catch (error) {
    console.error('Error adding client:', error);
  }
};

