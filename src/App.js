import React, { useState } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import Hero from './Hero';
import Navigation from './Navigation';

function App() {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  // Sample movie data - in a real app, this would come from an API
  const movieCategories = [
    {
      title: "Trending Now in India",
      movies: [
        {
          id: 1,
          title: "Pushpa 2: The Rule",
          thumbnail: "https://images.unsplash.com/photo-1574267432644-f74398569479?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          genre: "Action • Telugu",
          rating: "98% Match",
          year: "2024",
          duration: "3h 21m"
        },
        {
          id: 2,
          title: "Devara",
          thumbnail: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          genre: "Action • Telugu",
          rating: "95% Match",
          year: "2024",
          duration: "2h 58m"
        },
        {
          id: 3,
          title: "Kalki 2898 AD",
          thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
          genre: "Sci-Fi • Telugu",
          rating: "96% Match",
          year: "2024",
          duration: "3h 1m"
        },
        {
          id: 4,
          title: "Dunki",
          thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
          genre: "Drama • Hindi",
          rating: "93% Match",
          year: "2023",
          duration: "2h 41m"
        },
        {
          id: 5,
          title: "Animal",
          thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          genre: "Action • Hindi",
          rating: "91% Match",
          year: "2023",
          duration: "3h 21m"
        },
        {
          id: 6,
          title: "Jawan",
          thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
          genre: "Action • Hindi",
          rating: "94% Match",
          year: "2023",
          duration: "2h 49m"
        }
      ]
    },
    {
      title: "Blockbuster Indian Cinema",
      movies: [
        {
          id: 7,
          title: "Salaar",
          thumbnail: "https://images.unsplash.com/photo-1574267432644-f74398569479?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          genre: "Action • Kannada",
          rating: "92% Match",
          year: "2023",
          duration: "2h 55m"
        },
        {
          id: 8,
          title: "Leo",
          thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          genre: "Action • Tamil",
          rating: "90% Match",
          year: "2023",
          duration: "2h 44m"
        },
        {
          id: 9,
          title: "Jailer",
          thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          genre: "Action • Tamil",
          rating: "89% Match",
          year: "2023",
          duration: "2h 48m"
        },
        {
          id: 10,
          title: "Pathaan",
          thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          genre: "Action • Hindi",
          rating: "91% Match",
          year: "2023",
          duration: "2h 26m"
        },
        {
          id: 11,
          title: "RRR",
          thumbnail: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
          genre: "Action • Telugu",
          rating: "97% Match",
          year: "2022",
          duration: "3h 7m"
        },
        {
          id: 12,
          title: "KGF Chapter 2",
          thumbnail: "https://images.unsplash.com/photo-1574267432644-f74398569479?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
          genre: "Action • Kannada",
          rating: "95% Match",
          year: "2022",
          duration: "2h 48m"
        }
      ]
    },
    {
      title: "Popular on Netflix",
      movies: [
        {
          id: 13,
          title: "Maharaj",
          thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
          genre: "Drama • Hindi",
          rating: "88% Match",
          year: "2024",
          duration: "2h 12m"
        },
        {
          id: 14,
          title: "12th Fail",
          thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          genre: "Drama • Hindi",
          rating: "96% Match",
          year: "2023",
          duration: "2h 27m"
        },
        {
          id: 15,
          title: "The Archies",
          thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          genre: "Musical • Hindi",
          rating: "85% Match",
          year: "2023",
          duration: "2h 23m"
        },
        {
          id: 16,
          title: "Khufiya",
          thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          genre: "Thriller • Hindi",
          rating: "87% Match",
          year: "2023",
          duration: "2h 37m"
        },
        {
          id: 17,
          title: "Murder Mubarak",
          thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          genre: "Mystery • Hindi",
          rating: "84% Match",
          year: "2024",
          duration: "2h 24m"
        },
        {
          id: 18,
          title: "Lal Salaam",
          thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=450&fit=crop",
          trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
          genre: "Sports • Tamil",
          rating: "82% Match",
          year: "2024",
          duration: "2h 22m"
        }
      ]
    }
  ];

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <div className="content">
        {movieCategories.map((category, index) => (
          <MovieRow 
            key={index}
            title={category.title}
            movies={category.movies}
            hoveredMovie={hoveredMovie}
            setHoveredMovie={setHoveredMovie}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
