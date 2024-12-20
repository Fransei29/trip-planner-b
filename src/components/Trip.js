import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trip = () => {
  // Estado para almacenar el nombre del nuevo viaje y la lista de viajes
  const [name, setName] = useState('');
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);  // Estado para manejar el estado de carga
  const [error, setError] = useState(''); // Estado para manejar los errores

  // Función para crear un nuevo viaje
  const createTrip = async () => {
    try {
      setLoading(true);  // Iniciar el estado de carga
      await axios.post('/api/trips', { name }); // Enviar una solicitud POST al servidor para crear un nuevo viaje
      fetchTrips(); // Volver a obtener la lista de viajes después de crear uno nuevo
      setName('');  // Limpiar el campo de entrada
      setError('');  // Limpiar cualquier error anterior
    } catch (error) {
      setError('Error creando el viaje: ' + (error.response?.data?.message || error.message)); // Mostrar el error
      console.error('Error creando el viaje:', error);
    } finally {
      setLoading(false);  // Finalizar el estado de carga
    }
  };

  // Función para obtener la lista de viajes
  const fetchTrips = async () => {
    try {
      setLoading(true);  // Iniciar el estado de carga
      const response = await axios.get('/api/trips');  // Enviar una solicitud GET al servidor para obtener todos los viajes
      setTrips(response.data.trips);  // Actualizar el estado con la lista de viajes obtenida
      setError('');  // Limpiar cualquier error anterior
    } catch (error) {
      setError('Error obteniendo los viajes: ' + (error.response?.data?.message || error.message));  // Mostrar el error
      console.error('Error obteniendo los viajes:', error);
    } finally {
      setLoading(false);  // Finalizar el estado de carga
    }
  };

  // useEffect se ejecuta después de que el componente se monta, para obtener la lista de viajes al inicio
  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <div className="trip-container">
      <div >
          <h2>Trip</h2>
          {/* Formulario para crear un nuevo viaje */}
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter trip name"
          />
          <button onClick={createTrip} disabled={loading}>
            {loading ? 'Creating...' : 'Create New Trip'}
          </button>

          {/* Mostrar errores si hay */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div>
          {/* Lista de viajes */}
          <ul>
            <h2 className='title-trips'>Your Trips</h2>
            {trips?.map((trip) => (
              <li key={trip._id}>{trip.name}</li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default Trip;
