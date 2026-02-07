# Netflix Clone - React Frontend

A cinematic streaming interface inspired by Netflix, featuring hover trailer effects, smooth animations, and interactive action buttons.

## Features

✨ **Hover Trailer Playback**: Videos automatically play when hovering over movie cards  
🎬 **Interactive Action Buttons**: Play, Add to List, Like, and More Info buttons  
🎨 **Cinematic Design**: Editorial aesthetic with sophisticated animations  
📱 **Responsive Layout**: Optimized for desktop, tablet, and mobile  
🎭 **Smooth Transitions**: Polished animations using CSS and React  

## Project Structure

```
netflix-clone/
├── public/
│   └── index.html
├── src/
│   ├── App.js              # Main app component with movie data
│   ├── App.css             # Global styles and CSS variables
│   ├── Navigation.js       # Header navigation component
│   ├── Navigation.css      # Navigation styles
│   ├── Hero.js             # Featured content banner
│   ├── Hero.css            # Hero section styles
│   ├── MovieRow.js         # Horizontal scrolling row component
│   ├── MovieRow.css        # Row container styles
│   ├── MovieCard.js        # Individual movie card with hover effects
│   ├── MovieCard.css       # Card styles and animations
│   ├── index.js            # React entry point
│   └── index.css           # Global resets
├── package.json
└── README.md
```

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Key Components

### App.js
- Main component managing state
- Contains sample movie data
- Handles hover state across all cards

### MovieCard.js
- Individual movie card with hover detection
- Automatic trailer playback on hover (500ms delay)
- Action buttons: Play, Add to List, Like, More Info
- Smooth animations and transitions

### Navigation.js
- Sticky header with scroll detection
- Blurred background on scroll
- Search, notifications, and profile menu

### Hero.js
- Featured content banner
- Cinematic gradient overlays
- Call-to-action buttons

## Customization

### Update Movie Data
Edit the `movieCategories` array in `App.js`:

```javascript
{
  id: 1,
  title: "Movie Title",
  thumbnail: "https://image-url.jpg",
  trailer: "https://video-url.mp4",
  genre: "Action",
  rating: "95% Match",
  year: "2024"
}
```

### Modify Design
All styling uses CSS variables defined in `App.css`:

```css
:root {
  --color-accent: #e50914;  /* Primary red color */
  --font-display: 'Crimson Pro', serif;
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Adjust Hover Delay
In `MovieCard.js`, modify the timeout:

```javascript
hoverTimeoutRef.current = setTimeout(() => {
  // Play video
}, 500); // Change this value (in milliseconds)
```

## Technologies Used

- **React 18**: Component-based UI library
- **CSS3**: Advanced animations and transitions
- **Google Fonts**: Crimson Pro (display) and DM Sans (body)
- **HTML5 Video**: Native video playback

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- Videos are lazy-loaded and only play on hover
- Smooth scrolling with hardware acceleration
- Optimized animations using CSS transforms
- Responsive images with proper aspect ratios

## Future Enhancements

- [ ] Connect to real movie API (TMDB, OMDB)
- [ ] Add video controls overlay
- [ ] Implement search functionality
- [ ] Add user authentication
- [ ] Create detailed movie modal
- [ ] Persist "My List" to localStorage

## License

MIT License - Feel free to use this project for learning and personal projects.

---

**Note**: This is a frontend demonstration. For production use, you'll need to integrate with a real backend API for movie data and user management.
