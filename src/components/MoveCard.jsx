import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

function MovieCard({ movie }) {
  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState(/* логика проверки */);

  const handleToggleFavorite = async () => {
    if (!user) {
      alert('Войдите в систему');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${import.meta.env.VITE_API_URL}/api/users/favorites`, 
        { movieId: movie.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Ошибка добавления в избранное', error);
    }
  };

  return (
    <div className="movie-card">
      {/* ... постер и детали */}
      <button onClick={handleToggleFavorite}>
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
}