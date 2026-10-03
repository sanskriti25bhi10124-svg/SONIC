# 🎧 Sonic

### Discover what you want to hear.

**Sonic** is a neon-themed music discovery and preview platform designed to help users explore music, discover tracks by mood, preview songs, and decide what they want to listen to before heading over to Spotify.

Rather than recreating Spotify, Sonic focuses on the **discovery experience**: finding the right song for the right moment.

🔗 **Live Demo:** https://sonic-emd7ya0j3-sanskriti25bhi10124-svg.verce

---

## ✨ Features

🎵 **Music Discovery**
Explore tracks and discover new music through an immersive interface.

🔎 **Real-Time Search**
Search for artists, albums, and tracks dynamically.

🎧 **Track Previews**
Preview available songs before deciding what to listen to.

💗 **Persistent Likes**
Save favorite tracks and keep them available between sessions.

🎭 **Mood-Based Discovery**
Find music based on different moods and listening vibes.

📚 **Playlist Creation**
Create and organize personal playlists from discovered tracks.

💾 **Local Persistence**
Likes, playlists, and user preferences are preserved using browser storage.

📱 **Responsive Interface**
Designed to work smoothly across desktop and smaller screens.

🌌 **Neon Music Aesthetic**
A dark, vibrant interface built around a futuristic pink-and-black visual identity.

---

## 🛠️ Tech Stack

| Technology         | Purpose                            |
| ------------------ | ---------------------------------- |
| ⚡ Vite             | Development & build tooling        |
| 🟨 JavaScript      | Application logic                  |
| 🎨 CSS             | UI, animations & responsive design |
| 🎵 Spotify Web API | Music data & discovery             |
| 💾 LocalStorage    | Persistent user preferences        |
| 🚀 Vercel          | Deployment                         |

---

## 🧠 How Sonic Works

```text
          ┌─────────────────┐
          │      Sonic      │
          │ Music Discovery │
          └────────┬────────┘
                   │
          ┌────────▼────────┐
          │  Search / Mood  │
          │    Discovery    │
          └────────┬────────┘
                   │
          ┌────────▼────────┐
          │  Music Results  │
          │ Artists / Tracks │
          └────────┬────────┘
                   │
       ┌───────────┼───────────┐
       ▼           ▼           ▼
    Preview      Like       Playlist
       │           │           │
       └───────────┼───────────┘
                   ▼
             Spotify 🎧
```

---

## 🎨 Design

Sonic uses a **dark neon visual language** inspired by modern music interfaces.

The interface combines:

* 🖤 Deep black backgrounds
* 💗 Neon pink accents
* ✨ Glowing interactive elements
* 🎚️ Smooth transitions and animations
* 🪩 Music-focused visual hierarchy
* 📱 Responsive layouts

The goal was to make the experience feel like a **music product**, rather than a basic API demonstration.

---

## 📸 Screenshots

### Home / Discovery

*Add a screenshot of your main Sonic interface here.*

### Search & Results

*Add a screenshot showing the search experience here.*

### Music Preview

*Add a screenshot of the track preview/player here.*

### Playlists

*Add a screenshot of your playlist interface here.*

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/sonic.git
```

### 2. Open the project

```bash
cd sonic
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available locally through the Vite development server.

---

## 🔐 Environment Variables

If the project uses environment variables for API configuration, create a `.env` file locally.

Example:

```env
VITE_SPOTIFY_CLIENT_ID=your_client_id
```

> ⚠️ Never commit `.env` files or private API credentials to GitHub.

---

## 📂 Project Structure

```text
sonic/
│
├── public/
│   └── assets/
│
├── src/
│   ├── components/
│   ├── assets/
│   ├── styles/
│   └── main.js
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*Project structure may vary depending on the current implementation.*

---

## 🌟 What I Learned

Building Sonic helped me work with several real-world frontend concepts:

* Working with external APIs
* Handling asynchronous data
* Building real-time search experiences
* Managing client-side application state
* Persisting data with LocalStorage
* Creating responsive interfaces
* Designing interactive UI components
* Integrating third-party services
* Deploying a frontend application
* Structuring a project for public GitHub use

---

## 🔮 Future Improvements

Some ideas for future versions:

* 🤖 Smarter personalized recommendations
* 🎼 Genre-based discovery
* 📊 Listening analytics
* 🔥 Trending music section
* 👥 Shareable playlists
* 🌙 Additional visual themes
* 🎙️ Voice-based music discovery
* 🧠 More advanced mood classification

---

## 👩‍💻 Built By

**Sanskriti**

B.Tech Student & Developer

---

## 📄 License

This project was created for learning, experimentation, and portfolio purposes.

Music metadata and related content belong to their respective owners and services.

---

### 🎧 Find your sound. Discover your Sonic.
