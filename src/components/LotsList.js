import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { lots } from '../data/lots';
import '../styles/LotsList.css';

const LotsList = () => {
  const [filters, setFilters] = useState({
    minSize: '',
    maxSize: '',
    minPrice: '',
    maxPrice: '',
    onlyAvailable: true
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const filteredLots = lots.filter(lot => {
    if (filters.onlyAvailable && !lot.available) return false;
    if (filters.minSize && lot.size < parseInt(filters.minSize)) return false;
    if (filters.maxSize && lot.size > parseInt(filters.maxSize)) return false;
    if (filters.minPrice && lot.price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && lot.price > parseInt(filters.maxPrice)) return false;
    return true;
  });

  return (
    <section className="lots-section">
      <div className="lots-filter">
        <h3>Filtrar Lotes</h3>
        <div className="filter-controls">
          <div className="filter-group">
            <label>Tamaño (m²)</label>
            <div className="range-inputs">
              <input 
                type="number" 
                placeholder="Mín" 
                name="minSize" 
                value={filters.minSize} 
                onChange={handleFilterChange} 
              />
              <span>-</span>
              <input 
                type="number" 
                placeholder="Máx" 
                name="maxSize" 
                value={filters.maxSize} 
                onChange={handleFilterChange} 
              />
            </div>
          </div>
          
          <div className="filter-group">
            <label>Precio ($)</label>
            <div className="range-inputs">
              <input 
                type="number" 
                placeholder="Mín" 
                name="minPrice" 
                value={filters.minPrice} 
                onChange={handleFilterChange} 
              />
              <span>-</span>
              <input 
                type="number" 
                placeholder="Máx" 
                name="maxPrice" 
                value={filters.maxPrice} 
                onChange={handleFilterChange} 
              />
            </div>
          </div>
          
          <div className="filter-group checkbox">
            <input 
              type="checkbox" 
              id="onlyAvailable" 
              name="onlyAvailable" 
              checked={filters.onlyAvailable} 
              onChange={handleFilterChange} 
            />
            <label htmlFor="onlyAvailable">Solo disponibles</label>
          </div>
        </div>
      </div>
      
      <div className="lots-grid">
        {filteredLots.length > 0 ? (
          filteredLots.map(lot => (
            <div className={`lot-card ${!lot.available ? 'sold' : ''}`} key={lot.id}>
              <div className="lot-image">
                <img src={lot.image} alt={`Lote ${lot.number}`} />
                {!lot.available && <div className="sold-overlay">Vendido</div>}
                {lot.featured && <div className="featured-tag">Destacado</div>}
              </div>
              <div className="lot-info">
                <h3>Lote {lot.number}</h3>
                <ul>
                  <li>
                    <strong>Tamaño:</strong> {lot.size} m²
                  </li>
                  <li>
                    <strong>Precio:</strong> ${lot.price.toLocaleString()}
                  </li>
                  <li>
                    <strong>Ubicación:</strong> {lot.location}
                  </li>
                </ul>
                <Link to={`/lots/${lot.id}`} className="btn btn-outline">
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No se encontraron lotes con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LotsList;