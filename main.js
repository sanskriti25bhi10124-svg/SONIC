import "./style.css";

/* =========================================================
   SONIC // CYBERPUNK MUSIC EXPERIENCE
   Multi-Color Audio Engine, 3D Vinyl Stage & Sound Shifter
   ========================================================= */

const moods = [
  {
    id: "drift",
    emoji: "🏎️",
    name: "Midnight Drift",
    genre: "Synthwave / Darksynth",
    description: "Tokyo highway, heavy basslines, 2AM adrenaline rush.",
    accent: "linear-gradient(135deg, #ff007f, #b026ff)"
  },
  {
    id: "rave",
    emoji: "⚡",
    name: "Cyber Rave",
    genre: "Hyperpop / Overdrive",
    description: "Laser strobes, high voltage synth drops, kinetic energy.",
    accent: "linear-gradient(135deg, #00f0ff, #00ff88)"
  },
  {
    id: "rain",
    emoji: "🌧️",
    name: "Neon Rain",
    genre: "Melancholic Cyber Lo-Fi",
    description: "Wet asphalt reflections, distant sirens, warm tape hiss.",
    accent: "linear-gradient(135deg, #4361ee, #b026ff)"
  },
  {
    id: "flow",
    emoji: "🧠",
    name: "Deep Flow",
    genre: "Atmospheric Ambient",
    description: "Glitch-free sonic landscape for quantum focus & coding.",
    accent: "linear-gradient(135deg, #00ff88, #00f0ff)"
  },
  {
    id: "love",
    emoji: "💖",
    name: "Synthetic Love",
    genre: "80s Dream Synth / R&B",
    description: "Dopamine glow, shimmering neon hearts, late night romance.",
    accent: "linear-gradient(135deg, #ff007f, #ff7b00)"
  },
  {
    id: "anime",
    emoji: "🌸",
    name: "Anime Dreams",
    genre: "Ethereal Dream Pop",
    description: "Floating clouds, retro cassette nostalgia, crystalline vibes.",
    accent: "linear-gradient(135deg, #b026ff, #ff007f)"
  }
];

/* =========================================================
   CURATED VIBRANT MUSIC CATALOG WITH 30s AUDIO PREVIEWS
   ========================================================= */

const musicCatalog = [
  {
    id: 1,
    title: "After Hours",
    artist: "The Weeknd",
    genre: "Dark Synth / R&B",
    mood: ["drift", "love", "rain"],
    description: "Neon-lit boulevards, chrome sports cars and echoing heartbeats.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/54/2b/61/542b6133-80f7-f30f-4dcf-059490db9d84/mzaf_1539067797902127760.plus.aac.p.m4a",
    spotify: "The Weeknd After Hours",
    bpm: "132 BPM",
    synthNotes: [220, 277.18, 329.63, 440]
  },
  {
    id: 2,
    title: "Myth",
    artist: "Beach House",
    genre: "Cyber Dream Pop",
    mood: ["anime", "flow", "rain"],
    description: "Shimmering guitar waves soaring into a magenta twilight.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a3/d1/3c/a3d13c15-969d-c248-5993-27dad812df09/mzaf_11045108390724848951.plus.aac.p.m4a",
    spotify: "Beach House Myth",
    bpm: "118 BPM",
    synthNotes: [261.63, 329.63, 392.00, 523.25]
  },
  {
    id: 3,
    title: "Resonance",
    artist: "HOME",
    genre: "Synthwave / Chillwave",
    mood: ["drift", "flow", "anime"],
    description: "The timeless anthem of retro-future cruising under sunset skies.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/33/bb/1a/33bb1a1a-1448-3118-6891-639e61784145/mzaf_3810752549913623044.plus.aac.p.m4a",
    spotify: "HOME Resonance",
    bpm: "105 BPM",
    synthNotes: [293.66, 369.99, 440.00, 554.37]
  },
  {
    id: 4,
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Synthwave Overdrive",
    mood: ["rave", "drift"],
    description: "High-octane synth basslines racing through midnight skylines.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/19/d6/60/19d660ff-e3a9-8377-15a3-ce4b28e89cac/mzaf_18422426156481158187.plus.aac.p.m4a",
    spotify: "The Weeknd Blinding Lights",
    bpm: "171 BPM",
    synthNotes: [349.23, 440.00, 523.25, 659.25]
  },
  {
    id: 5,
    title: "Space Song",
    artist: "Beach House",
    genre: "Ethereal Dream Pop",
    mood: ["rain", "anime", "flow"],
    description: "Floating weightlessly across distant purple constellations.",
    image: "https://images.unsplash.com/photo-1534791547706-8f9b2e5e4b4e?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/41/61/14/416114cc-282e-4c76-2808-a3eb9c3f973d/mzaf_6665874998714897722.plus.aac.p.m4a",
    spotify: "Beach House Space Song",
    bpm: "74 BPM",
    synthNotes: [196.00, 246.94, 293.66, 392.00]
  },
  {
    id: 6,
    title: "I Really Want to Stay At Your House",
    artist: "Rosa Walton & Hallie Coggins",
    genre: "Cyberpunk 2077 Anthem",
    mood: ["love", "rave", "drift"],
    description: "Night City romance captured in bittersweet synth pulses.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/41/34/56/4134564c-7b29-3107-55d8-9efe67b3d305/mzaf_6935030530292179362.plus.aac.p.m4a",
    spotify: "Rosa Walton I Really Want to Stay At Your House",
    bpm: "125 BPM",
    synthNotes: [329.63, 415.30, 493.88, 659.25]
  },
  {
    id: 7,
    title: "Tech Noir",
    artist: "GUNSHIP",
    genre: "Cinematic Darksynth",
    mood: ["drift", "rave", "flow"],
    description: "Laser smoke, roaring V8 engines and retro-futuristic arcade grit.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bd/06/dc/bd06dc70-e2b2-bc99-0947-0d10389a960a/mzaf_16486588803306493542.plus.aac.p.m4a",
    spotify: "GUNSHIP Tech Noir",
    bpm: "110 BPM",
    synthNotes: [164.81, 220.00, 246.94, 329.63]
  },
  {
    id: 8,
    title: "Lovely",
    artist: "Billie Eilish & Khalid",
    genre: "Dark Chamber Pop",
    mood: ["rain", "anime"],
    description: "Haunting strings and glass-like vocal harmonies.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1e/d8/8d/1ed88d91-fb06-b3f2-5391-afd732cc2ff9/mzaf_18444937225262929488.plus.aac.p.m4a",
    spotify: "Billie Eilish Lovely",
    bpm: "115 BPM",
    synthNotes: [220.00, 261.63, 329.63, 392.00]
  },
  {
    id: 9,
    title: "Intro",
    artist: "The xx",
    genre: "Minimalist Ambient",
    mood: ["flow", "drift", "rain"],
    description: "The hypnotic guitar loop that defined modern chillout culture.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/1d/e9/4a1de930-f0f2-484c-eea9-7d46bcd89de8/mzaf_11582686532983847296.plus.aac.p.m4a",
    spotify: "The xx Intro",
    bpm: "100 BPM",
    synthNotes: [277.18, 349.23, 415.30, 554.37]
  },
  {
    id: 10,
    title: "505",
    artist: "Arctic Monkeys",
    genre: "Indie Rock Glow",
    mood: ["rain", "love", "drift"],
    description: "Emotional explosion of organ keys and distortion at 2 AM.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d1/0d/ab/d10dabc8-cceb-e718-401f-01516b009460/mzaf_13845311225859403599.plus.aac.p.m4a",
    spotify: "Arctic Monkeys 505",
    bpm: "140 BPM",
    synthNotes: [174.61, 220.00, 261.63, 349.23]
  },
  {
    id: 11,
    title: "Genesis",
    artist: "Grimes",
    genre: "Cyber Art Pop",
    mood: ["anime", "rave", "love"],
    description: "Alien synthesizers and fairy tale melodies from 2099.",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c4/c3/ef/c4c3ef1f-532d-d5db-21df-8ac5af81a993/mzaf_11908992876567282921.plus.aac.p.m4a",
    spotify: "Grimes Genesis",
    bpm: "135 BPM",
    synthNotes: [392.00, 493.88, 587.33, 783.99]
  },
  {
    id: 12,
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    genre: "Retro Romantic Soul",
    mood: ["love", "rain"],
    description: "Timeless 1950s romance remastered for cybernetic dreamers.",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=900&q=80",
    file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/53/82/c1/5382c1d4-ddba-aa2b-90df-57268895fac9/mzaf_8926201202931541051.plus.aac.p.m4a",
    spotify: "Stephen Sanchez Until I Found You",
    bpm: "101 BPM",
    synthNotes: [261.63, 329.63, 392.00, 493.88]
  }
];

/* =========================================================
   STATE & AUDIO ENGINE
   ========================================================= */

let currentTheme = localStorage.getItem("sonic-theme") || "tokyo";
let selectedMood = localStorage.getItem("sonic-mood") || null;
let likedSongs = JSON.parse(localStorage.getItem("sonic-liked") || "[]");
let recentSongs = JSON.parse(localStorage.getItem("sonic-recent") || "[]");
let customPlaylists = JSON.parse(localStorage.getItem("sonic-playlists") || "[]");

let spotifyClientId = localStorage.getItem("sonic-spotify-client-id") || "";
let spotifyClientSecret = localStorage.getItem("sonic-spotify-client-secret") || "";

let currentTrack = null;
let isPlaying = false;
let currentFxMode = "normal"; // "normal" | "slowed" | "spatial8d" | "nightcore" | "lofi"
let synthTimer = null;
let audioCtx = null;
const previewCache = new Map();

const audio = new Audio();
audio.preload = "auto";
audio.preservesPitch = false;

// Apply Theme to Body
document.body.setAttribute("data-theme", currentTheme);

function setTheme(theme) {
  currentTheme = theme;
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("sonic-theme", theme);
  document.querySelectorAll(".aura-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });
  showToast(`Aura Switched // ${theme.toUpperCase()} ✨`);
}

/* Web Audio UI Sound generator */
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playCyberUiSound(type = "click") {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.05);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "mood") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    }
  } catch (e) {}
}

/* Sound Lab FX Mode */
function applyFxMode(mode) {
  currentFxMode = mode;
  playCyberUiSound("click");

  document.querySelectorAll(".fx-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.fx === mode);
  });

  if (mode === "normal") {
    audio.playbackRate = 1.0;
    audio.preservesPitch = true;
    showToast("Sound Lab // Original Master ◈");
  } else if (mode === "slowed") {
    audio.playbackRate = 0.85;
    audio.preservesPitch = false;
    showToast("Sound Lab // 🌌 Slowed + Reverb (0.85x)");
  } else if (mode === "spatial8d") {
    audio.playbackRate = 1.0;
    audio.preservesPitch = true;
    showToast("Sound Lab // 🎧 8D Spatial Audio Emulation");
  } else if (mode === "nightcore") {
    audio.playbackRate = 1.22;
    audio.preservesPitch = false;
    showToast("Sound Lab // ⚡ Cyber-Drive Nightcore (1.22x)");
  } else if (mode === "lofi") {
    audio.playbackRate = 0.94;
    audio.preservesPitch = false;
    showToast("Sound Lab // 📻 Vintage Lo-Fi Filter (0.94x)");
  }
}

/* =========================================================
   APPLICATION DOM INITIALIZATION
   ========================================================= */

document.querySelector("#app").innerHTML = `
  <canvas id="particleCanvas"></canvas>

  <div class="bg-auroras">
    <div class="aurora-blob aurora-1"></div>
    <div class="aurora-blob aurora-2"></div>
    <div class="aurora-blob aurora-3"></div>
  </div>

  <div class="cyber-grid"></div>

  <div class="app-shell">

    <!-- VIBRANT SIDEBAR -->
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-icon">S</div>
        <div>
          <div class="brand-title">SONIC</div>
          <div class="brand-tagline">VIBE ENGINE 2099</div>
        </div>
      </div>

      <nav class="main-nav">
        <button class="nav-item active" data-scroll="home">
          <span class="nav-icon">✨</span> Discover & Home
        </button>
        <button class="nav-item" data-scroll="moods">
          <span class="nav-icon">🌈</span> Mood Matrix
        </button>
        <button class="nav-item" data-scroll="soundlab">
          <span class="nav-icon">🎛️</span> Sound Lab (FX)
        </button>
        <button class="nav-item" data-scroll="library">
          <span class="nav-icon">💖</span> Saved Vault
        </button>
      </nav>

      <div class="sidebar-section">
        <div class="sidebar-label">
          <span>Custom Decks</span>
        </div>
        <div id="playlistSidebar"></div>
      </div>

      <div class="sidebar-bottom">
        <div class="status-badge">
          <span class="live-dot"></span>
          <div>
            <strong>LIVE TRANSMISSION</strong>
            <small>Lossless Audio Stream • 60 FPS</small>
          </div>
        </div>
      </div>
    </aside>

    <!-- MAIN TERMINAL CONTENT -->
    <main class="main-content" id="home">

      <!-- TOPBAR -->
      <header class="topbar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input
            id="searchInput"
            type="text"
            placeholder="Search songs, artists, vibes, genres..."
            autocomplete="off"
          />
          <kbd>/</kbd>
        </div>

        <!-- AURA / THEME PRESET SWITCHER -->
        <div class="aura-switch-group">
          <button class="aura-btn ${currentTheme === "tokyo" ? "active" : ""}" data-theme="tokyo">
            🌸 Tokyo
          </button>
          <button class="aura-btn ${currentTheme === "ultraviolet" ? "active" : ""}" data-theme="ultraviolet">
            🔮 Ultraviolet
          </button>
          <button class="aura-btn ${currentTheme === "acid" ? "active" : ""}" data-theme="acid">
            ⚡ Acid
          </button>
          <button class="aura-btn ${currentTheme === "sunset" ? "active" : ""}" data-theme="sunset">
            🌅 Sunset
          </button>
        </div>

        <div class="top-actions">
          <button class="spotify-connect-btn" id="spotifyConfigButton" title="Link Spotify Account">
            <span>⚡</span>
            <span id="spotifyBtnText">${spotifyClientId ? "Spotify Linked" : "Connect Spotify"}</span>
          </button>

          <button class="icon-button" id="libraryButton" title="Saved Tracks">
            💖
          </button>
        </div>
      </header>

      <!-- HERO // 3D VINYL STAGE & INTERACTIVE SOUND ENGINE -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-pill">
            <span>✨</span> NEXT-GEN MUSIC DISCOVERY
          </div>

          <h1>
            FEEL THE <span class="glow-text">PULSE</span><br />
            OF THE NIGHT.
          </h1>

          <p>
            Immerse yourself in curated synthwave, dream pop, and cyberpunk audio.
            Experience live preview streaming, 3D rotating vinyl visualizers, and real-time audio reshaping.
          </p>

          <div class="hero-actions">
            <button class="cta-button" id="heroPlayButton">
              <span>▶</span> Play Featured Stream
            </button>
            <button class="cta-secondary" id="moodExploreButton">
              <span>🌈</span> Explore Moods
            </button>
          </div>
        </div>

        <!-- 3D VINYL TURNTABLE & VISUALIZER STAGE -->
        <div class="hero-stage">
          <canvas id="heroVisualizerCanvas" width="440" height="440"></canvas>
          
          <div class="stage-badge badge-top-left">
            <span>🏎️</span>
            <span id="stageBpm">132 BPM // HI-FI</span>
          </div>

          <div class="stage-badge badge-bottom-right">
            <span>✨</span>
            <span id="stageVibe">TOKYO MIDNIGHT</span>
          </div>

          <div class="vinyl-disc" id="vinylDisc">
            <div class="vinyl-grooves"></div>
            <div class="vinyl-label" id="vinylLabel">S</div>
          </div>
        </div>
      </section>

      <!-- MOOD MATRIX SECTION -->
      <section class="section" id="moods">
        <div class="section-header">
          <div>
            <span class="section-pill">CHOOSE YOUR VIBE</span>
            <h2>What Are You In The Mood For?</h2>
            <p>Select a vibe to dynamically curate matching frequencies and soundscapes.</p>
          </div>
        </div>

        <div class="mood-grid" id="moodGrid">
          ${moods
            .map(
              (mood) => `
            <button
              class="mood-card ${selectedMood === mood.id ? "selected" : ""}"
              data-mood="${mood.id}"
            >
              <div class="mood-emoji-wrap" style="background:${mood.accent}">
                ${mood.emoji}
              </div>
              <h3 class="mood-name">${mood.name}</h3>
              <p class="mood-desc">${mood.description}</p>
              <div class="mood-footer">
                <span>${mood.genre}</span>
                <span>Tune In ↗</span>
              </div>
            </button>
          `
            )
            .join("")}
        </div>
      </section>

      <!-- SOUND LAB // DSP SOUND SHIFTER -->
      <section class="section" id="soundlab">
        <div class="sound-lab-card">
          <div class="sound-lab-header">
            <div>
              <span class="section-pill">SOUND LABORATORY</span>
              <h2>Cyber Sound Shifter</h2>
              <p>Reshape any playing track in real-time with authentic DSP pitch & tempo filters.</p>
            </div>
          </div>

          <div class="sound-lab-chips">
            <button class="fx-chip active" data-fx="normal">
              <span>◈</span> Original Master (1.0x)
            </button>
            <button class="fx-chip" data-fx="slowed" title="Slow tempo + deep atmospheric pitch">
              <span>🌌</span> Slowed + Reverb (0.85x)
            </button>
            <button class="fx-chip" data-fx="spatial8d" title="Immersive 360° rotating audio space">
              <span>🎧</span> 8D Spatial Audio
            </button>
            <button class="fx-chip" data-fx="nightcore" title="Kinetic energy surge & high pitch">
              <span>⚡</span> Cyber-Drive Nightcore (1.22x)
            </button>
            <button class="fx-chip" data-fx="lofi" title="Warm analog cassette texture">
              <span>📻</span> Vintage Lo-Fi (0.94x)
            </button>
          </div>
        </div>
      </section>

      <!-- RECOMMENDATIONS / DISCOVER -->
      <section class="section" id="discoverSection">
        <div class="section-header">
          <div>
            <span class="section-pill">
              ${selectedMood ? "CURATED PICKS" : "HOTTEST TRACKS"}
            </span>
            <h2 id="recommendationTitle">
              ${selectedMood ? `${getMoodName(selectedMood)} Vibes` : "Top Soundscapes Ready."}
            </h2>
            <p>Click any album to immediately listen to a 30-second studio preview.</p>
          </div>

          <button class="cta-secondary" id="shuffleButton">
            🎲 Shuffle Recommendations
          </button>
        </div>

        <div class="song-grid" id="recommendationGrid"></div>
      </section>

      <!-- SEARCH RESULTS SECTION -->
      <section class="section hidden" id="searchSection">
        <div class="section-header">
          <div>
            <span class="section-pill">SEARCH RESULTS</span>
            <h2 id="searchTitle">Tracks Found</h2>
          </div>
        </div>
        <div class="song-grid" id="searchResults"></div>
      </section>

      <!-- SAVED VAULT (LIKED TRACKS) -->
      <section class="section" id="library">
        <div class="section-header">
          <div>
            <span class="section-pill">YOUR PERSONAL VAULT</span>
            <h2>Saved Tracks</h2>
            <p>Songs you've hearted are stored in your local vault.</p>
          </div>
          <span id="libraryCount" style="font-family:var(--font-mono);font-size:14px;color:var(--neon-cyan);font-weight:700;">
            0 Tracks Saved
          </span>
        </div>

        <div class="song-grid" id="libraryGrid"></div>
      </section>

      <!-- CUSTOM PLAYLISTS -->
      <section class="section">
        <div class="section-header">
          <div>
            <span class="section-pill">COMMUNITY & CUSTOM</span>
            <h2>Curated Decks</h2>
            <p>Hand-crafted collections for late night drives and deep focus.</p>
          </div>
          <button class="cta-secondary" id="createPlaylistButton">
            + Create New Deck
          </button>
        </div>

        <div class="mood-grid" id="playlistGrid"></div>
      </section>
    </main>

    <!-- BOTTOM MUSIC PLAYER CONSOLE -->
    <div class="player" id="player">
      <div class="player-left">
        <div class="player-cover" id="playerCover">S</div>
        <div class="player-info">
          <strong id="playerTitle">Select a Track</strong>
          <span id="playerArtist">Click play on any song capsule...</span>
        </div>
        <button class="card-like-btn" id="playerLike" title="Save Track" style="position:static;width:38px;height:38px;">
          ♡
        </button>
      </div>

      <div class="player-center">
        <div class="player-controls">
          <button class="control-btn" id="previousButton" title="Previous">⏮</button>
          <button class="play-main-btn" id="playButton" title="Play / Pause">▶</button>
          <button class="control-btn" id="nextButton" title="Next">⏭</button>
        </div>

        <div class="player-progress-bar">
          <span class="time-stamp" id="currentTime">0:00</span>
          <div class="progress-track" id="progressTrack">
            <div class="progress-fill" id="progressFill"></div>
          </div>
          <span class="time-stamp" id="duration">0:00</span>
        </div>
      </div>

      <div class="player-right">
        <span style="font-size:16px;">🔊</span>
        <input type="range" class="volume-slider" id="volume" min="0" max="1" step="0.01" value="0.75" />
      </div>
    </div>

    <!-- SPOTIFY LINK MODAL -->
    <div class="modal-backdrop hidden" id="spotifyModal">
      <div class="modal-window">
        <button class="modal-close" id="closeSpotifyModal">×</button>
        <span class="modal-kicker">SPOTIFY INTEGRATION</span>
        <h2>Connect Your Spotify</h2>
        <p>Unlock seamless full-track streaming directly inside your Spotify app.</p>

        <label style="font-family:var(--font-tech);font-size:12px;font-weight:700;color:var(--neon-cyan);display:block;margin-bottom:6px;">CLIENT ID</label>
        <input
          id="spotifyClientIdInput"
          class="modal-input"
          placeholder="Paste Spotify Client ID..."
          value="${escapeHTML(spotifyClientId)}"
        />

        <div style="display:flex;gap:12px;margin-top:8px;">
          <button class="modal-btn" id="saveSpotifyConfigButton" style="flex:1;">
            Save Spotify ID
          </button>
          ${
            spotifyClientId
              ? `<button class="cta-secondary" id="clearSpotifyConfigButton">Disconnect</button>`
              : ""
          }
        </div>
      </div>
    </div>

    <!-- PLAYLIST MODAL -->
    <div class="modal-backdrop hidden" id="playlistModal">
      <div class="modal-window">
        <button class="modal-close" id="closePlaylistModal">×</button>
        <span class="modal-kicker">CREATE PLAYLIST</span>
        <h2>Name Your New Deck</h2>
        <p>Give your curated soundscape collection a memorable title.</p>

        <input
          id="playlistNameInput"
          class="modal-input"
          placeholder="e.g. Cyberpunk Tokyo 2AM"
          maxlength="35"
        />

        <button class="modal-btn" id="savePlaylistButton">
          Create Deck
        </button>
      </div>
    </div>
  </div>
`;

/* =========================================================
   HELPERS & LOGIC
   ========================================================= */

function getMoodName(id) {
  return moods.find((m) => m.id === id)?.name || "Current";
}

function saveState() {
  localStorage.setItem("sonic-liked", JSON.stringify(likedSongs));
  localStorage.setItem("sonic-recent", JSON.stringify(recentSongs));
  localStorage.setItem("sonic-playlists", JSON.stringify(customPlaylists));
  if (selectedMood) {
    localStorage.setItem("sonic-mood", selectedMood);
  }
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getRecommendations(mood = selectedMood) {
  let results = [...musicCatalog];

  if (mood) {
    results.sort((a, b) => {
      const aScore = a.mood.includes(mood) ? 10 : 0;
      const bScore = b.mood.includes(mood) ? 10 : 0;
      return bScore - aScore;
    });
  } else {
    results.sort(() => Math.random() - 0.5);
  }

  return results.slice(0, 6);
}

function renderRecommendations() {
  const grid = document.querySelector("#recommendationGrid");
  const title = document.querySelector("#recommendationTitle");
  const recommendations = getRecommendations();

  if (title) {
    title.textContent = selectedMood ? `${getMoodName(selectedMood)} Vibes` : "Top Soundscapes Ready.";
  }

  if (grid) {
    grid.innerHTML = recommendations
      .map((track) => createSongCard(track))
      .join("");
    attachSongEvents();
  }
}

/* =========================================================
   VIBRANT SONG CARD COMPONENT
   ========================================================= */

function createSongCard(track) {
  const liked = likedSongs.includes(track.id);
  const isCurrent = currentTrack?.id === track.id && isPlaying;

  return `
    <article class="song-card ${isCurrent ? "is-playing" : ""}" data-track-id="${track.id}">
      <div class="song-art-wrap">
        <img
          src="${track.image}"
          alt="${escapeHTML(track.title)}"
          class="song-art"
          loading="lazy"
        />
        <div class="song-overlay"></div>
        <span class="genre-badge">${escapeHTML(track.genre)}</span>

        <button
          class="card-like-btn ${liked ? "liked" : ""}"
          data-like="${track.id}"
          aria-label="Save ${escapeHTML(track.title)}"
        >
          ${liked ? "♥" : "♡"}
        </button>

        <div class="card-equalizer">
          <div class="eq-column"></div>
          <div class="eq-column"></div>
          <div class="eq-column"></div>
          <div class="eq-column"></div>
        </div>

        <button
          class="card-play-btn"
          data-play="${track.id}"
          aria-label="Play ${escapeHTML(track.title)}"
        >
          ${isCurrent ? "⏸" : "▶"}
        </button>
      </div>

      <div class="song-info">
        <h3>${escapeHTML(track.title)}</h3>
        <p>${escapeHTML(track.artist)}</p>
      </div>

      <div class="song-quote">
        ${escapeHTML(track.description)}
      </div>

      <a
        class="stream-link"
        href="https://open.spotify.com/search/${encodeURIComponent(track.spotify)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Open on Spotify</span>
        <span>↗</span>
      </a>
    </article>
  `;
}

function attachSongEvents() {
  document.querySelectorAll("[data-play]").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      playCyberUiSound("click");
      const id = Number(button.dataset.play);
      playTrack(id);
    });
  });

  document.querySelectorAll("[data-like]").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      playCyberUiSound("click");
      const id = Number(button.dataset.like);
      toggleLike(id);
    });
  });
}

/* =========================================================
   AUDIO STREAMING & PLAYBACK
   ========================================================= */

async function playTrack(id) {
  const track = musicCatalog.find((item) => item.id === id);
  if (!track) return;

  currentTrack = track;
  updatePlayer();
  showToast(`Streaming // "${track.title}" ▶`);

  const vinyl = document.querySelector("#vinylDisc");
  if (vinyl) vinyl.classList.add("spinning");

  const stageBpm = document.querySelector("#stageBpm");
  if (stageBpm) stageBpm.textContent = `${track.bpm || "130 BPM"} // HI-FI`;

  const stageVibe = document.querySelector("#stageVibe");
  if (stageVibe) stageVibe.textContent = track.genre.toUpperCase();

  const previewUrl = track.file || (await resolveAudioPreview(track));

  if (previewUrl) {
    if (audio.src !== previewUrl) {
      audio.src = previewUrl;
      audio.load();
    }

    if (currentFxMode === "slowed") {
      audio.playbackRate = 0.85;
      audio.preservesPitch = false;
    } else if (currentFxMode === "nightcore") {
      audio.playbackRate = 1.22;
      audio.preservesPitch = false;
    } else if (currentFxMode === "lofi") {
      audio.playbackRate = 0.94;
      audio.preservesPitch = false;
    } else {
      audio.playbackRate = 1.0;
      audio.preservesPitch = true;
    }

    audio
      .play()
      .then(() => {
        isPlaying = true;
        updatePlayButton();
        renderRecommendations();
      })
      .catch((err) => {
        console.warn("Autoplay notice:", err);
        isPlaying = true;
        updatePlayButton();
        renderRecommendations();
      });
  }

  addToRecent(track.id);
}

function togglePlayback() {
  playCyberUiSound("click");
  if (!currentTrack) {
    const first = getRecommendations()[0];
    if (first) playTrack(first.id);
    return;
  }

  if (audio.src && !audio.paused) {
    audio.pause();
    isPlaying = false;
    const vinyl = document.querySelector("#vinylDisc");
    if (vinyl) vinyl.classList.remove("spinning");
  } else if (audio.src && audio.paused) {
    audio.play().then(() => {
      isPlaying = true;
      const vinyl = document.querySelector("#vinylDisc");
      if (vinyl) vinyl.classList.add("spinning");
    });
  }

  updatePlayButton();
  renderRecommendations();
}

function updatePlayButton() {
  const button = document.querySelector("#playButton");
  if (button) {
    button.textContent = isPlaying ? "⏸" : "▶";
  }
}

function updatePlayer() {
  if (!currentTrack) return;

  const title = document.querySelector("#playerTitle");
  const artist = document.querySelector("#playerArtist");
  const cover = document.querySelector("#playerCover");
  const likeBtn = document.querySelector("#playerLike");
  const vinylLabel = document.querySelector("#vinylLabel");

  if (title) title.textContent = currentTrack.title;
  if (artist) artist.textContent = currentTrack.artist;

  if (cover) {
    cover.style.backgroundImage = `url("${currentTrack.image}")`;
    cover.textContent = "";
  }

  if (vinylLabel) {
    vinylLabel.style.backgroundImage = `url("${currentTrack.image}")`;
    vinylLabel.style.backgroundSize = "cover";
    vinylLabel.textContent = "";
  }

  const liked = likedSongs.includes(currentTrack.id);
  if (likeBtn) {
    likeBtn.textContent = liked ? "♥" : "♡";
    likeBtn.classList.toggle("liked", liked);
  }
}

function addToRecent(id) {
  recentSongs = recentSongs.filter((songId) => songId !== id);
  recentSongs.unshift(id);
  recentSongs = recentSongs.slice(0, 10);
  saveState();
}

function toggleLike(id) {
  if (likedSongs.includes(id)) {
    likedSongs = likedSongs.filter((songId) => songId !== id);
    showToast("Removed from Saved Vault.");
  } else {
    likedSongs.push(id);
    showToast("Added to Saved Vault 💖");
  }

  saveState();
  renderRecommendations();
  renderLibrary();
  updatePlayer();
}

function nextTrack() {
  playCyberUiSound("click");
  const recommendations = getRecommendations();
  if (!currentTrack) {
    playTrack(recommendations[0]?.id);
    return;
  }

  const index = recommendations.findIndex((track) => track.id === currentTrack.id);
  const next = recommendations[(index + 1) % recommendations.length];
  if (next) playTrack(next.id);
}

function previousTrack() {
  playCyberUiSound("click");
  if (!currentTrack) return;
  const recommendations = getRecommendations();
  const index = recommendations.findIndex((track) => track.id === currentTrack.id);
  const previous = recommendations[(index - 1 + recommendations.length) % recommendations.length];
  if (previous) playTrack(previous.id);
}

/* =========================================================
   LIBRARY & PLAYLISTS
   ========================================================= */

function renderLibrary() {
  const grid = document.querySelector("#libraryGrid");
  const count = document.querySelector("#libraryCount");
  const songs = musicCatalog.filter((track) => likedSongs.includes(track.id));

  if (count) {
    count.textContent = `${songs.length} ${songs.length === 1 ? "Track" : "Tracks"} Saved`;
  }

  if (!grid) return;

  if (!songs.length) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: rgba(255,255,255,0.03); border-radius: 16px; border: 1px dashed rgba(255,255,255,0.15);">
        <span style="font-size: 32px; display: block; margin-bottom: 10px;">💖</span>
        <h3 style="font-family: var(--font-display); font-size: 20px; color: #fff; margin-bottom: 6px;">Your Vault is Empty</h3>
        <p style="color: var(--text-secondary); font-size: 14px;">Heart any song card to save it here for instant listening.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = songs.map((track) => createSongCard(track)).join("");
  attachSongEvents();
}

function renderPlaylists() {
  const sidebar = document.querySelector("#playlistSidebar");
  const grid = document.querySelector("#playlistGrid");

  const defaultPlaylists = [
    { name: "Tokyo Midnight Highway", emoji: "🏎️", genre: "Synthwave" },
    { name: "Deep Coding Trance", emoji: "🧠", genre: "Ambient / Flow" },
    { name: "Cyberpunk Laser Rave", emoji: "⚡", genre: "Hyperpop" }
  ];

  const all = [...defaultPlaylists, ...customPlaylists];

  if (sidebar) {
    sidebar.innerHTML = all
      .map(
        (playlist) => `
        <button class="playlist-nav">
          <span>${playlist.emoji || "🎵"}</span>
          ${escapeHTML(playlist.name)}
        </button>
      `
      )
      .join("");
  }

  if (grid) {
    grid.innerHTML = all
      .map(
        (playlist) => `
        <article class="mood-card">
          <div class="mood-emoji-wrap" style="background:var(--grad-cyber)">
            ${playlist.emoji || "🎵"}
          </div>
          <h3 class="mood-name">${escapeHTML(playlist.name)}</h3>
          <p class="mood-desc">Hand-crafted frequency playlist with curated dynamic track progressions.</p>
          <div class="mood-footer">
            <span>${playlist.genre || "Custom Deck"}</span>
            <span>Explore ↗</span>
          </div>
        </article>
      `
      )
      .join("");
  }
}

/* =========================================================
   SEARCH
   ========================================================= */

function performSearch(query) {
  const searchSection = document.querySelector("#searchSection");
  const searchTitle = document.querySelector("#searchTitle");
  const results = document.querySelector("#searchResults");
  const value = query.trim().toLowerCase();

  if (!value) {
    searchSection.classList.add("hidden");
    return;
  }

  searchSection.classList.remove("hidden");

  const matches = musicCatalog.filter((track) => {
    const haystack = [track.title, track.artist, track.genre, track.description, ...track.mood]
      .join(" ")
      .toLowerCase();
    return haystack.includes(value);
  });

  if (searchTitle) {
    searchTitle.textContent = matches.length
      ? `Found ${matches.length} Tracks Matching "${query}"`
      : `No Tracks Found for "${query}"`;
  }

  if (!matches.length) {
    results.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: rgba(255,255,255,0.03); border-radius: 16px;">
        <h3 style="color:#fff;">No Matching Songs</h3>
        <p style="color:var(--text-secondary); margin-top: 6px;">Try searching for The Weeknd, Beach House, Synthwave, or Grimes.</p>
      </div>
    `;
    return;
  }

  results.innerHTML = matches.map((track) => createSongCard(track)).join("");
  attachSongEvents();
}

/* =========================================================
   MODALS
   ========================================================= */

function chooseMood(mood) {
  playCyberUiSound("mood");
  selectedMood = mood;
  saveState();

  document.querySelectorAll(".mood-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.mood === mood);
  });

  renderRecommendations();

  const discSec = document.querySelector("#discoverSection");
  if (discSec) discSec.scrollIntoView({ behavior: "smooth" });
  showToast(`Vibe Set To // ${getMoodName(mood)} ✨`);
}

function openPlaylistModal() {
  playCyberUiSound("click");
  document.querySelector("#playlistModal").classList.remove("hidden");
  document.querySelector("#playlistNameInput").focus();
}

function closePlaylistModal() {
  document.querySelector("#playlistModal").classList.add("hidden");
}

function createPlaylist() {
  const input = document.querySelector("#playlistNameInput");
  const name = input.value.trim();

  if (!name) {
    showToast("Please enter a playlist name.");
    return;
  }

  customPlaylists.push({ name, emoji: "✨", genre: "Custom Mix" });
  saveState();
  renderPlaylists();
  input.value = "";
  closePlaylistModal();
  showToast(`Deck Created // "${name}" 🎉`);
}

function openSpotifyModal() {
  playCyberUiSound("click");
  document.querySelector("#spotifyModal").classList.remove("hidden");
}

function closeSpotifyModal() {
  document.querySelector("#spotifyModal").classList.add("hidden");
}

function saveSpotifyConfig() {
  const clientId = document.querySelector("#spotifyClientIdInput").value.trim();
  spotifyClientId = clientId;

  localStorage.setItem("sonic-spotify-client-id", clientId);

  const btnText = document.querySelector("#spotifyBtnText");
  if (btnText) {
    btnText.textContent = clientId ? "Spotify Linked" : "Connect Spotify";
  }

  closeSpotifyModal();
  showToast(clientId ? "Spotify Linked Successfully ⚡" : "Spotify Disconnected.");
}

/* Toast */
function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

/* =========================================================
   AUDIO EVENT LISTENERS
   ========================================================= */

audio.addEventListener("play", () => {
  isPlaying = true;
  updatePlayButton();
  renderRecommendations();
  const vinyl = document.querySelector("#vinylDisc");
  if (vinyl) vinyl.classList.add("spinning");
});

audio.addEventListener("pause", () => {
  isPlaying = false;
  updatePlayButton();
  renderRecommendations();
  const vinyl = document.querySelector("#vinylDisc");
  if (vinyl) vinyl.classList.remove("spinning");
});

audio.addEventListener("loadedmetadata", () => {
  const dur = document.querySelector("#duration");
  if (dur && audio.duration) dur.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  const percentage = (audio.currentTime / audio.duration) * 100;
  const fill = document.querySelector("#progressFill");
  if (fill) fill.style.width = `${percentage}%`;
  const curr = document.querySelector("#currentTime");
  if (curr) curr.textContent = formatTime(audio.currentTime);
  const dur = document.querySelector("#duration");
  if (dur && (dur.textContent === "0:00" || !dur.textContent)) {
    dur.textContent = formatTime(audio.duration);
  }
});

audio.addEventListener("ended", () => {
  isPlaying = false;
  updatePlayButton();
  renderRecommendations();
  nextTrack();
});

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remaining}`;
}

/* =========================================================
   CANVAS VISUALIZERS (MULTI-COLOR PARTICLES & RADIAL HUD)
   ========================================================= */

/* 1. Multi-Color Particle Background */
const particleCanvas = document.querySelector("#particleCanvas");
const pCtx = particleCanvas ? particleCanvas.getContext("2d") : null;
let particles = [];

function resizeParticleCanvas() {
  if (!particleCanvas) return;
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeParticleCanvas);
resizeParticleCanvas();

const colorPalettes = [
  "rgba(255, 0, 127, ", // Neon Pink
  "rgba(0, 240, 255, ", // Cyber Cyan
  "rgba(176, 38, 255, ", // Violet
  "rgba(0, 255, 136, ", // Lime
  "rgba(255, 123, 0, "  // Amber
];

for (let i = 0; i < 55; i++) {
  particles.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 2.5 + 1,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    color: colorPalettes[Math.floor(Math.random() * colorPalettes.length)],
    alpha: Math.random() * 0.6 + 0.2
  });
}

function renderParticles() {
  if (pCtx && particleCanvas) {
    pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    const speed = isPlaying ? 2.0 : 0.8;

    particles.forEach((p) => {
      p.x += p.vx * speed;
      p.y += p.vy * speed;

      if (p.x < 0) p.x = particleCanvas.width;
      if (p.x > particleCanvas.width) p.x = 0;
      if (p.y < 0) p.y = particleCanvas.height;
      if (p.y > particleCanvas.height) p.y = 0;

      pCtx.beginPath();
      pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      pCtx.fillStyle = `${p.color}${p.alpha})`;
      pCtx.shadowBlur = 10;
      pCtx.shadowColor = "#ff007f";
      pCtx.fill();
    });
  }

  requestAnimationFrame(renderParticles);
}
renderParticles();

/* 2. Hero 360° Multi-Color Radial Visualizer */
const heroCanvas = document.querySelector("#heroVisualizerCanvas");
const hCtx = heroCanvas ? heroCanvas.getContext("2d") : null;

function renderHeroVisualizer() {
  if (hCtx && heroCanvas) {
    hCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    const centerX = heroCanvas.width / 2;
    const centerY = heroCanvas.height / 2;
    const radius = 150;
    const bars = 64;

    const time = Date.now() * 0.003;
    const intensity = isPlaying ? 2.4 : 0.7;

    for (let i = 0; i < bars; i++) {
      const angle = (i / bars) * Math.PI * 2;
      const wave = Math.sin(time * 2.5 + i * 0.3) * Math.cos(time + i * 0.15);
      const barHeight = Math.max(6, Math.abs(wave) * 45 * intensity + 6);

      const x1 = centerX + Math.cos(angle) * radius;
      const y1 = centerY + Math.sin(angle) * radius;
      const x2 = centerX + Math.cos(angle) * (radius + barHeight);
      const y2 = centerY + Math.sin(angle) * (radius + barHeight);

      const gradient = hCtx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, "rgba(255, 0, 127, 0.9)");
      gradient.addColorStop(0.5, "rgba(176, 38, 255, 0.8)");
      gradient.addColorStop(1, "rgba(0, 240, 255, 0.9)");

      hCtx.beginPath();
      hCtx.moveTo(x1, y1);
      hCtx.lineTo(x2, y2);
      hCtx.lineWidth = 3;
      hCtx.strokeStyle = gradient;
      hCtx.shadowBlur = isPlaying ? 16 : 8;
      hCtx.shadowColor = "#00f0ff";
      hCtx.stroke();
    }
  }

  requestAnimationFrame(renderHeroVisualizer);
}
renderHeroVisualizer();

/* =========================================================
   EVENT LISTENERS & BINDINGS
   ========================================================= */

// Theme aura buttons
document.querySelectorAll(".aura-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setTheme(btn.dataset.theme);
  });
});

const playBtn = document.querySelector("#playButton");
if (playBtn) playBtn.addEventListener("click", togglePlayback);

const nextBtn = document.querySelector("#nextButton");
if (nextBtn) nextBtn.addEventListener("click", nextTrack);

const prevBtn = document.querySelector("#previousButton");
if (prevBtn) prevBtn.addEventListener("click", previousTrack);

const playerLikeBtn = document.querySelector("#playerLike");
if (playerLikeBtn) {
  playerLikeBtn.addEventListener("click", () => {
    if (currentTrack) toggleLike(currentTrack.id);
  });
}

const volInput = document.querySelector("#volume");
if (volInput) {
  volInput.addEventListener("input", (e) => {
    audio.volume = Number(e.target.value);
  });
}

const progTrack = document.querySelector("#progressTrack");
if (progTrack) {
  progTrack.addEventListener("click", (e) => {
    if (!audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percentage * audio.duration;
  });
}

const heroPlayBtn = document.querySelector("#heroPlayButton");
if (heroPlayBtn) {
  heroPlayBtn.addEventListener("click", () => {
    const target = currentTrack || getRecommendations()[0];
    if (target) playTrack(target.id);
  });
}

const moodExploreBtn = document.querySelector("#moodExploreButton");
if (moodExploreBtn) {
  moodExploreBtn.addEventListener("click", () => {
    const moodSec = document.querySelector("#moods");
    if (moodSec) moodSec.scrollIntoView({ behavior: "smooth" });
  });
}

document.querySelectorAll("[data-mood]").forEach((btn) => {
  btn.addEventListener("click", () => chooseMood(btn.dataset.mood));
});

const shuffleBtn = document.querySelector("#shuffleButton");
if (shuffleBtn) {
  shuffleBtn.addEventListener("click", () => {
    playCyberUiSound("click");
    const random = musicCatalog[Math.floor(Math.random() * musicCatalog.length)];
    playTrack(random.id);
  });
}

// Sound Lab Chips
document.querySelectorAll("[data-fx]").forEach((chip) => {
  chip.addEventListener("click", () => {
    applyFxMode(chip.dataset.fx);
  });
});

// Modals
const createPlayBtn = document.querySelector("#createPlaylistButton");
if (createPlayBtn) createPlayBtn.addEventListener("click", openPlaylistModal);

const closePlayBtn = document.querySelector("#closePlaylistModal");
if (closePlayBtn) closePlayBtn.addEventListener("click", closePlaylistModal);

const savePlayBtn = document.querySelector("#savePlaylistButton");
if (savePlayBtn) savePlayBtn.addEventListener("click", createPlaylist);

const spotifyCfgBtn = document.querySelector("#spotifyConfigButton");
if (spotifyCfgBtn) spotifyCfgBtn.addEventListener("click", openSpotifyModal);

const closeSpotifyBtn = document.querySelector("#closeSpotifyModal");
if (closeSpotifyBtn) closeSpotifyBtn.addEventListener("click", closeSpotifyModal);

const saveSpotifyBtn = document.querySelector("#saveSpotifyConfigButton");
if (saveSpotifyBtn) saveSpotifyBtn.addEventListener("click", saveSpotifyConfig);

const clearSpotifyBtn = document.querySelector("#clearSpotifyConfigButton");
if (clearSpotifyBtn) {
  clearSpotifyBtn.addEventListener("click", () => {
    document.querySelector("#spotifyClientIdInput").value = "";
    saveSpotifyConfig();
  });
}

const libBtn = document.querySelector("#libraryButton");
if (libBtn) {
  libBtn.addEventListener("click", () => {
    const libSec = document.querySelector("#library");
    if (libSec) libSec.scrollIntoView({ behavior: "smooth" });
  });
}

// Search input
const searchInput = document.querySelector("#searchInput");
if (searchInput) {
  searchInput.addEventListener("input", (e) => performSearch(e.target.value));
}

document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    if (searchInput) searchInput.focus();
  }
  if (e.code === "Space" && document.activeElement?.tagName !== "INPUT") {
    e.preventDefault();
    togglePlayback();
  }
});

// Nav scrolls
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    playCyberUiSound("click");
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    const target = document.querySelector(`#${btn.dataset.scroll}`);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Modal backdrops click-to-close
const playlistModalBackdrop = document.querySelector("#playlistModal");
if (playlistModalBackdrop) {
  playlistModalBackdrop.addEventListener("click", (e) => {
    if (e.target.id === "playlistModal") closePlaylistModal();
  });
}

const spotifyModalBackdrop = document.querySelector("#spotifyModal");
if (spotifyModalBackdrop) {
  spotifyModalBackdrop.addEventListener("click", (e) => {
    if (e.target.id === "spotifyModal") closeSpotifyModal();
  });
}

/* =========================================================
   INITIALIZATION
   ========================================================= */

audio.volume = 0.75;
renderRecommendations();
renderLibrary();
renderPlaylists();
updatePlayButton();

console.log("⚡ SONIC // VIBRANT CYBERPUNK MUSIC ENGINE ONLINE");