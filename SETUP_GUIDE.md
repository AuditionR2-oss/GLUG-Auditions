# Netflix Clone - Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
cd netflix-clone
npm install
```

### 2. Start the Development Server

```bash
npm start
```

The app will open automatically at `http://localhost:3000`

## Project Structure

```
netflix-clone/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main component with movie data
│   ├── App.css             # Global styles and variables
│   ├── Navigation.js       # Header navigation
│   ├── Navigation.css      # Navigation styles
│   ├── Hero.js             # Featured banner
│   ├── Hero.css            # Hero section styles
│   ├── MovieRow.js         # Horizontal movie row
│   ├── MovieRow.css        # Row styles
│   ├── MovieCard.js        # Individual movie card
│   ├── MovieCard.css       # Card hover effects
│   ├── index.js            # React entry point
│   └── index.css           # Global resets
├── package.json            # Dependencies
├── README.md               # Documentation
└── .gitignore             # Git ignore rules
```

## How It Works

### Hover Trailer Effect

When you hover over a movie card:

1. **Delay starts** (500ms) - prevents accidental triggers
2. **Thumbnail fades** - image opacity transitions to 0
3. **Video loads** - trailer starts playing
4. **Overlay appears** - action buttons slide up from bottom
5. **Card scales** - smooth transform animation (1.15x)

### Action Buttons

Each movie card shows 4 buttons on hover:

- **Play** (white circle) - Start watching
- **Add to List** (plus icon) - Save for later
- **Like** (thumbs up) - Mark as favorite
- **More Info** (chevron) - View details

### Responsive Breakpoints

- **Desktop**: 1200px+ (280px cards)
- **Tablet**: 768-1199px (240px cards)
- **Mobile**: <768px (200px cards)
- **Small Mobile**: <480px (160px cards)

## Customization

### Change Colors

Edit `src/App.css`:

```css
:root {
  --color-accent: #e50914;      /* Red accent color */
  --color-success: #46d369;     /* Green match percentage */
  --color-bg: #0a0a0a;          /* Background */
}
```

### Modify Fonts

Edit `src/App.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT');

:root {
  --font-display: 'YOUR_FONT', serif;
  --font-body: 'YOUR_FONT', sans-serif;
}
```

### Add Your Own Movies

Edit `movieCategories` array in `src/App.js`:

```javascript
{
  title: "Your Category Name",
  movies: [
    {
      id: 1,
      title: "Movie Title",
      thumbnail: "https://your-image-url.jpg",
      trailer: "https://your-video-url.mp4",
      genre: "Action",
      rating: "95% Match",
      year: "2024"
    },
    // Add more movies...
  ]
}
```

### Adjust Hover Delay

In `src/MovieCard.js`, line 15:

```javascript
setTimeout(() => {
  // Video plays here
}, 500); // Change this value (milliseconds)
```

## Available Scripts

### `npm start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it.

### `npm run build`
Builds the app for production to the `build` folder.
Optimizes for best performance.

### `npm test`
Launches the test runner in interactive watch mode.

## Troubleshooting

### Videos not playing?

**Issue**: Browsers block autoplay without user interaction.

**Solution**: The app uses `muted` videos which are allowed to autoplay. If issues persist:

1. Check browser console for errors
2. Ensure video URLs are accessible
3. Try different video formats (MP4 recommended)
4. Check CORS headers on video host

### Hover effect laggy?

**Issue**: Too many animations running simultaneously.

**Solution**: 

1. Reduce the number of movies per row
2. Increase hover delay in `MovieCard.js`
3. Disable video autoplay in low-performance mode

### Styling issues?

**Issue**: CSS not loading or overridden.

**Solution**:

1. Check that all CSS files are imported in components
2. Clear browser cache
3. Restart development server

## Browser Support

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ iOS Safari 14+
✅ Chrome Mobile 90+

## Performance Tips

1. **Lazy load images**: Add loading="lazy" to thumbnails
2. **Optimize videos**: Use compressed MP4 files
3. **Reduce motion**: Add `prefers-reduced-motion` media query
4. **Debounce hover**: Increase hover delay for low-end devices

## Next Steps

- [ ] Connect to TMDB API for real movie data
- [ ] Add search functionality
- [ ] Implement user authentication
- [ ] Create detailed movie modal
- [ ] Add video player controls
- [ ] Persist "My List" to localStorage/backend

## Need Help?

Check the main README.md for more details or open an issue on GitHub.

---

Happy coding! 🎬✨
