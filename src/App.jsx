import { useState } from "react";
import { Play, Check, Lock, Music, Award, ChevronRight, ArrowLeft, Star } from "lucide-react";

// ─── CHORD DATA ─────────────────────────────────────────────────────────────
const CHORDS = {
  Em: {
    name: "E Minor",
    fingers: [
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
    ],
    open: [0, 1, 2, 3, 5],
    muted: [],
    tip: "Only two fingers! This is the easiest chord on guitar.",
  },
  G: {
    name: "G Major",
    fingers: [
      { string: 5, fret: 3, finger: 1 },
      { string: 1, fret: 3, finger: 2 },
      { string: 0, fret: 3, finger: 3 },
    ],
    open: [2, 3, 4],
    muted: [],
    tip: "Stretch your fingers wide — this one builds great hand strength!",
  },
  D: {
    name: "D Major",
    fingers: [
      { string: 2, fret: 2, finger: 1 },
      { string: 0, fret: 3, finger: 3 },
      { string: 1, fret: 3, finger: 2 },
    ],
    open: [],
    muted: [4, 5],
    tip: "Only use the top 4 strings. Mute the bottom two with your thumb.",
  },
  C: {
    name: "C Major",
    fingers: [
      { string: 1, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
      { string: 5, fret: 3, finger: 3 },
    ],
    open: [0, 2, 4],
    muted: [5],
    tip: "Make sure your fingers are on their tips so other strings ring clearly.",
  },
  Am: {
    name: "A Minor",
    fingers: [
      { string: 1, fret: 1, finger: 1 },
      { string: 2, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
    ],
    open: [0, 4],
    muted: [5],
    tip: "Very similar shape to C — practice switching between them!",
  },
  A: {
    name: "A Major",
    fingers: [
      { string: 1, fret: 2, finger: 1 },
      { string: 2, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
    ],
    open: [0, 4],
    muted: [5],
    tip: "All three fingers on the same fret — keep them bunched together.",
  },
  E: {
    name: "E Major",
    fingers: [
      { string: 3, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
      { string: 5, fret: 2, finger: 3 },
    ],
    open: [0, 1, 2],
    muted: [],
    tip: "All six strings ring! One of the fullest-sounding open chords.",
  },
  B7: {
    name: "B Dominant 7",
    fingers: [
      { string: 3, fret: 2, finger: 1 },
      { string: 1, fret: 2, finger: 2 },
      { string: 0, fret: 2, finger: 3 },
      { string: 2, fret: 3, finger: 4 },
    ],
    open: [4],
    muted: [5],
    tip: "A bit of a stretch — take it slow and it'll come with practice.",
  },
  E7: {
    name: "E Dominant 7",
    fingers: [
      { string: 3, fret: 1, finger: 1 },
      { string: 5, fret: 2, finger: 2 },
    ],
    open: [0, 1, 2, 4],
    muted: [],
    tip: "Just one finger less than E Major — a nice bluesy sound.",
  },
  A7: {
    name: "A Dominant 7",
    fingers: [
      { string: 1, fret: 2, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
    ],
    open: [0, 2, 4],
    muted: [5],
    tip: "Only two fingers needed. Great intro to 7th chords.",
  },
};

// ─── LESSONS DATA ───────────────────────────────────────────────────────────
const CATEGORIES = {
  basics: {
    title: "Getting Started",
    icon: "🎸",
    color: "#FF6B6B",
    lessons: [
      {
        id: "basics-1",
        title: "How to Hold Your Guitar",
        description: "Learn proper posture so you can play comfortably for hours.",
        duration: "5 min",
        chord: null,
        youtubeId: "gYAxwwfSetM",
        steps: [
          "Sit upright with the guitar body resting on your right leg.",
          "The neck should point slightly upward — not flat.",
          "Keep your left hand relaxed; don't squeeze the neck.",
          "Place your right hand loosely over the strings near the sound hole.",
        ],
      },
      {
        id: "basics-2",
        title: "Parts of the Guitar",
        description: "Know your instrument before you start playing.",
        duration: "4 min",
        chord: null,
        youtubeId: "gYAxwwfSetM",
        steps: [
          "The HEAD is at the top — it holds the tuning pegs.",
          "The NECK is the long part you hold with your left hand.",
          "The FRETS are the metal strips on the neck — each one is a note.",
          "The BODY is the big part — it makes the sound louder.",
          "The STRINGS go from the head all the way down to the bridge.",
        ],
      },
      {
        id: "basics-3",
        title: "How to Strum",
        description: "The foundation of rhythm guitar playing.",
        duration: "6 min",
        chord: null,
        youtubeId: "gYAxwwfSetM",
        steps: [
          "Use your thumb or a pick to brush across all the strings downward.",
          "Keep your strumming hand moving in a steady rhythm — even if you miss.",
          "Practice strumming on muted strings first (lightly touch the strings).",
          "Try a simple Down-Down-Down-Down pattern with a metronome.",
        ],
      },
    ],
  },
  chords: {
    title: "Essential Chords",
    icon: "🖐️",
    color: "#4ECDC4",
    lessons: [
      {
        id: "chords-1",
        title: "E Minor (Em)",
        description: "The very first chord most guitarists learn — just 2 fingers!",
        duration: "7 min",
        chord: "Em",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Place your 2nd finger on the 4th string, 2nd fret.",
          "Place your 3rd finger on the 3rd string, 2nd fret.",
          "Strum all 6 strings — they should all ring clearly.",
          "Practice lifting your fingers off and replacing them slowly.",
        ],
      },
      {
        id: "chords-2",
        title: "G Major (G)",
        description: "A warm, full-sounding chord that's in tons of Beatles songs.",
        duration: "8 min",
        chord: "G",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Place your 1st finger on the 6th string, 3rd fret.",
          "Place your 2nd finger on the 2nd string (from bottom), 3rd fret.",
          "Place your 3rd finger on the 1st string (high E), 3rd fret.",
          "Strum all 6 strings. Practice until every note rings clearly.",
        ],
      },
      {
        id: "chords-3",
        title: "D Major (D)",
        description: "Pairs perfectly with G and Em — a core Beatles chord.",
        duration: "7 min",
        chord: "D",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Only play the top 4 strings (mute the bottom 2 with your thumb).",
          "Place your 1st finger on the 3rd string, 2nd fret.",
          "Place your 2nd finger on the 1st string, 3rd fret.",
          "Place your 3rd finger on the 2nd string, 3rd fret.",
        ],
      },
      {
        id: "chords-4",
        title: "C Major (C)",
        description: "One of the most important chords in all of music.",
        duration: "8 min",
        chord: "C",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Place your 1st finger on the 2nd string, 1st fret.",
          "Place your 2nd finger on the 4th string, 2nd fret.",
          "Place your 3rd finger on the 6th string, 3rd fret.",
          "Mute the 6th string (low E). Strum the rest and check each note.",
        ],
      },
      {
        id: "chords-5",
        title: "A Minor (Am)",
        description: "A beautiful, emotional chord. Essential for many classics.",
        duration: "7 min",
        chord: "Am",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Place your 1st finger on the 2nd string, 1st fret.",
          "Place your 2nd finger on the 3rd string, 2nd fret.",
          "Place your 3rd finger on the 4th string, 2nd fret.",
          "Mute the 6th string. Strum the remaining 5 strings.",
        ],
      },
      {
        id: "chords-6",
        title: "A Major (A)",
        description: "The major version of Am — bright and uplifting!",
        duration: "7 min",
        chord: "A",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Bunch your 1st, 2nd, and 3rd fingers together on the 2nd fret.",
          "Place them on the 2nd, 3rd, and 4th strings.",
          "Mute the 6th string. Strum the remaining 5 strings.",
          "Practice switching between Am and A to hear the difference!",
        ],
      },
      {
        id: "chords-7",
        title: "E Major (E)",
        description: "Full, resonant, and rock-ready. All 6 strings ring!",
        duration: "6 min",
        chord: "E",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Place your 1st finger on the 4th string (G string), 1st fret.",
          "Place your 2nd finger on the 5th string, 2nd fret.",
          "Place your 3rd finger on the 6th string, 2nd fret.",
          "Strum all 6 strings proudly!",
        ],
      },
      {
        id: "chords-8",
        title: "7th Chords: B7, E7, A7",
        description: "Add flavor and bluesy feeling to your playing.",
        duration: "10 min",
        chord: "B7",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Start with A7 — it only uses 2 fingers (easiest of the three).",
          "Move to E7 — also 2 fingers, but on a different string group.",
          "Finally try B7 — this one stretches your fingers a bit more.",
          "Practise each one individually before switching between them.",
        ],
      },
    ],
  },
  transitions: {
    title: "Chord Transitions",
    icon: "🔄",
    color: "#A29BFE",
    lessons: [
      {
        id: "trans-1",
        title: "Em → G",
        description: "The most common two-chord switch in rock music.",
        duration: "6 min",
        chord: "Em",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Hold Em and strum 4 times slowly.",
          "Without lifting your Em fingers, add the G fingers.",
          "Strum G 4 times. Repeat the loop until it feels smooth.",
          "Speed up gradually as you get more comfortable.",
        ],
      },
      {
        id: "trans-2",
        title: "G → D → Em",
        description: "The magic three-chord loop behind dozens of hit songs.",
        duration: "8 min",
        chord: "G",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Practise G → D first until it feels natural.",
          "Then practise D → Em until that's smooth too.",
          "Now loop: G → D → Em → G → D → Em…",
          "Use a metronome at a very slow tempo — speed comes later!",
        ],
      },
      {
        id: "trans-3",
        title: "C → Am → G → Em",
        description: "A versatile four-chord progression used in many classics.",
        duration: "10 min",
        chord: "C",
        youtubeId: "ZjnIJNRW7fk",
        steps: [
          "Practise each two-chord pair: C→Am, Am→G, G→Em, Em→C.",
          "Once each pair is smooth, chain them together.",
          "Strum 2 beats per chord and keep the rhythm steady.",
          "Notice how similar the Am and C shapes are — use that!",
        ],
      },
    ],
  },
  songs: {
    title: "Beatles Songs",
    icon: "🎵",
    color: "#FDCB6E",
    lessons: [
      {
        id: "song-1",
        title: "Love Me Do",
        description: "The Beatles debut hit — only 3 chords: G, C, D. A perfect first song!",
        duration: "12 min",
        chord: "G",
        youtubeId: "av5zQRjnMTY",
        steps: [
          "Learn the verse: strum G for 4 beats, then C for 4 beats.",
          "The bridge adds D — strum it for 4 beats before going back to G.",
          "Play along with the recording at half speed at first.",
          "Focus on keeping the rhythm steady — it's all about the groove!",
        ],
        chords: ["G", "C", "D"],
      },
      {
        id: "song-2",
        title: "Twist and Shout",
        description: "Pure rock energy! Just D, G, and A — and it's super repetitive.",
        duration: "10 min",
        chord: "D",
        youtubeId: "JnMIjIKsXAg",
        steps: [
          "The whole song loops: D → G → A → A.",
          "Strum with a driving down-strum pattern to capture the energy.",
          "Sing along — it helps you feel the rhythm!",
          "Once comfortable, try adding a little upstroke on the off-beats.",
        ],
        chords: ["D", "G", "A"],
      },
      {
        id: "song-3",
        title: "Don't Let Me Down",
        description: "A soulful rocker with just 3 easy chords. Capo 2nd fret for sing-along.",
        duration: "12 min",
        chord: "D",
        youtubeId: "aMo1t4rCHBs",
        steps: [
          "Put your capo on the 2nd fret (or play open if you prefer).",
          "The verse uses D and A7 — practise switching between them.",
          "The chorus brings in Em — listen for where it comes in.",
          "Play slowly at first; the feel of this song is more important than speed.",
        ],
        chords: ["D", "A7", "Em"],
      },
      {
        id: "song-4",
        title: "The Ballad of John and Yoko",
        description: "A story song with a simple 8th-note strum pattern.",
        duration: "11 min",
        chord: "E",
        youtubeId: "NLmIwUFOOZA",
        steps: [
          "The main chords are E and A — practise that switch first.",
          "E7 and B7 show up too — go slow when they come in.",
          "Use a steady down-up strum: down on every beat, up in between.",
          "Hum along to keep yourself in time with the song.",
        ],
        chords: ["E", "E7", "A", "B7"],
      },
      {
        id: "song-5",
        title: "Let It Be",
        description: "An iconic ballad. Focus on chords C, G, and Am.",
        duration: "14 min",
        chord: "C",
        youtubeId: "ti0Um_sVFoE",
        steps: [
          "The verse is: C → G → Am → C → G → C.",
          "Strum gently and let each chord ring — this is an emotional song.",
          "Listen to the original and match the mood, not the speed.",
          "Once comfortable, try adding a gentle finger-picked intro.",
        ],
        chords: ["C", "G", "Am"],
      },
      {
        id: "song-6",
        title: "Yellow Submarine",
        description: "A crowd-pleaser everyone knows! Great for playing with family.",
        duration: "9 min",
        chord: "G",
        youtubeId: "PDsU6MfXHWg",
        steps: [
          "The song is mostly G → C → G → D.",
          "Keep a fun, bouncy strum going — it's a singalong song!",
          "Play it for your kids — they'll love singing along.",
          "Once you nail the chords, try strumming in time with the beat.",
        ],
        chords: ["G", "C", "D"],
      },
    ],
  },
};

// ─── CHORD DIAGRAM SVG ──────────────────────────────────────────────────────
function ChordDiagram({ chordName }) {
  const chord = CHORDS[chordName];
  if (!chord) return null;
  const stringX = (i) => 36 + i * 22;
  const fretY = (f) => 32 + f * 38;

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold mb-1" style={{ color: "#2D3436", fontFamily: "'Fredoka', cursive" }}>
        {chord.name}
      </p>
      <svg width="170" height="210" viewBox="0 0 170 210">
        <rect x="34" y="28" width="112" height="4" rx="2" fill="#5D4037" />
        <rect x="34" y="32" width="112" height="152" rx="4" fill="#F5E6D3" />
        {[1, 2, 3, 4].map((f) => (
          <line key={f} x1="34" y1={fretY(f)} x2="146" y2={fretY(f)} stroke="#8D6E63" strokeWidth="1.5" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((s) => (
          <line key={s} x1={stringX(s)} y1="32" x2={stringX(s)} y2="184" stroke="#546E7A" strokeWidth="1.8" />
        ))}
        {chord.fingers.map((f, i) => (
          <g key={i}>
            <circle cx={stringX(f.string)} cy={fretY(f.fret) - 19} r="10" fill="#FF6B6B" />
            <text x={stringX(f.string)} y={fretY(f.fret) - 15} textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">
              {f.finger}
            </text>
          </g>
        ))}
        {chord.open.map((s) => (
          <text key={`o-${s}`} x={stringX(s)} y="22" textAnchor="middle" fontSize="14" fill="#27AE60" fontWeight="bold">O</text>
        ))}
        {chord.muted.map((s) => (
          <text key={`x-${s}`} x={stringX(s)} y="22" textAnchor="middle" fontSize="14" fill="#E74C3C" fontWeight="bold">×</text>
        ))}
        {["E", "A", "D", "G", "B", "e"].map((n, i) => (
          <text key={n} x={stringX(i)} y="205" textAnchor="middle" fontSize="11" fill="#90A4AE">{n}</text>
        ))}
      </svg>
      <p className="text-sm mt-1 text-center px-2" style={{ color: "#636E72", maxWidth: 160 }}>
        💡 {chord.tip}
      </p>
    </div>
  );
}

// ─── MAIN APP ───────────────────────────────────────────────────────────────
export default function GuitarJourneyApp() {
  const [view, setView] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("basics");
  const [activeLesson, setActiveLesson] = useState(null);
  const [completed, setCompleted] = useState(new Set());
  const [videoOpen, setVideoOpen] = useState(false);

  const totalLessons = Object.values(CATEGORIES).reduce((sum, c) => sum + c.lessons.length, 0);
  const progressPercent = Math.round((completed.size / totalLessons) * 100);

  function markComplete(id) {
    setCompleted((prev) => new Set([...prev, id]));
    setView("home");
  }

  // ── LESSON VIEW ─────────────────────────────────────────────────────────
  if (view === "lesson" && activeLesson) {
    const cat = Object.values(CATEGORIES).find((c) => c.lessons.some((l) => l.id === activeLesson.id));
    const isDone = completed.has(activeLesson.id);

    return (
      <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #FFF9F0 0%, #FFE8E8 100%)", fontFamily: "'Work Sans', sans-serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Work+Sans:wght@400;500;600&display=swap');`}</style>
        <div className="max-w-2xl mx-auto p-4 pt-6">
          <button onClick={() => { setView("home"); setVideoOpen(false); }} className="flex items-center gap-1 mb-4 text-sm font-semibold" style={{ color: cat.color, fontFamily: "'Fredoka', cursive" }}>
            <ArrowLeft size={18} /> Back to Lessons
          </button>

          <div className="rounded-3xl p-6 text-white mb-5" style={{ background: `linear-gradient(135deg, ${cat.color}, ${cat.color}bb)` }}>
            <div className="flex items-center gap-3">
              <div className="text-3xl">{cat.icon}</div>
              <div>
                <h1 className="text-2xl font-bold" style={{ fontFamily: "'Fredoka', cursive" }}>{activeLesson.title}</h1>
                <p className="text-sm opacity-90">{activeLesson.duration} · {activeLesson.chord ? `Chord: ${activeLesson.chord}` : "Fundamentals"}</p>
              </div>
            </div>
            <p className="mt-3 text-sm opacity-95 leading-relaxed">{activeLesson.description}</p>
            {activeLesson.chords && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {activeLesson.chords.map((c) => (
                  <span key={c} className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }}>{c}</span>
                ))}
              </div>
            )}
          </div>

          {activeLesson.chord && (
            <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100 flex justify-center">
              <ChordDiagram chordName={activeLesson.chord} />
            </div>
          )}

          <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100">
            <h3 className="font-bold text-base mb-3" style={{ color: "#2D3436", fontFamily: "'Fredoka', cursive" }}>🎯 Practice Steps</h3>
            {activeLesson.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: cat.color }}>
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed mt-0.5" style={{ color: "#2D3436" }}>{step}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-5 mb-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: "#2D3436", fontFamily: "'Fredoka', cursive" }}>
              <Play size={18} color="#E74C3C" /> Watch Tutorial
            </h3>
            {!videoOpen ? (
              <button onClick={() => setVideoOpen(true)} className="w-full py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #E74C3C, #C0392B)", fontFamily: "'Fredoka', cursive" }}>
                <Play size={20} /> Load YouTube Tutorial
              </button>
            ) : (
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${activeLesson.youtubeId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            )}
          </div>

          <button
            onClick={() => markComplete(activeLesson.id)}
            className="w-full py-4 rounded-2xl text-white text-lg font-bold flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.02]"
            style={{ background: isDone ? "linear-gradient(135deg,#27AE60,#229954)" : "linear-gradient(135deg,#FF6B6B,#FF8E53)", fontFamily: "'Fredoka', cursive" }}
          >
            <Check size={22} /> {isDone ? "Completed! ✨" : "Mark as Complete"}
          </button>
        </div>
      </div>
    );
  }

  // ── HOME VIEW ───────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #FFF9F0 0%, #FFE8E8 100%)", fontFamily: "'Work Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Work+Sans:wght@400;500;600&display=swap');`}</style>
      <div className="max-w-2xl mx-auto p-4 pt-6">

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E53)" }}>
              <Music size={32} color="white" />
            </div>
            <h1 className="text-3xl font-bold" style={{ fontFamily: "'Fredoka', cursive", background: "linear-gradient(135deg,#FF6B6B,#FF8E53)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Guitar Journey
            </h1>
          </div>
          <p className="text-sm" style={{ color: "#636E72" }}>Learn guitar at your own pace — inspired by The Beatles 🎸</p>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold" style={{ color: "#2D3436", fontFamily: "'Fredoka', cursive" }}>Your Progress</span>
            <span className="text-sm font-bold" style={{ color: "#FF6B6B" }}>{completed.size} / {totalLessons} lessons</span>
          </div>
          <div className="w-full h-4 rounded-full" style={{ background: "#F0F0F0" }}>
            <div className="h-4 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%`, background: "linear-gradient(90deg, #FF6B6B, #FDCB6E, #4ECDC4)" }} />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs" style={{ color: "#95A5A6" }}>🌱 Absolute Beginner</span>
            <span className="text-xs" style={{ color: "#95A5A6" }}>{progressPercent}%</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Completed", value: completed.size, icon: "✅", bg: "linear-gradient(135deg,#FFE8E8,#FFD6D6)", color: "#FF6B6B" },
            { label: "Remaining", value: totalLessons - completed.size, icon: "📚", bg: "linear-gradient(135deg,#E8F8F5,#D1F2EB)", color: "#4ECDC4" },
            { label: "Level", value: "Beginner", icon: "⭐", bg: "linear-gradient(135deg,#FFF9E6,#FFEECC)", color: "#F39C12" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl p-3 text-center" style={{ background: s.bg }}>
              <div className="text-xl">{s.icon}</div>
              <div className="text-lg font-bold" style={{ color: s.color, fontFamily: "'Fredoka', cursive" }}>{s.value}</div>
              <div className="text-xs" style={{ color: "#636E72" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: selectedCategory === key ? cat.color : "white",
                color: selectedCategory === key ? "white" : "#636E72",
                border: selectedCategory === key ? "none" : "2px solid #E8E8E8",
                boxShadow: selectedCategory === key ? `0 4px 12px ${cat.color}50` : "none",
                fontFamily: "'Fredoka', cursive",
              }}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {CATEGORIES[selectedCategory].lessons.map((lesson, idx) => {
            const cat = CATEGORIES[selectedCategory];
            const isDone = completed.has(lesson.id);
            const isLocked = idx > 0 && !completed.has(cat.lessons[idx - 1].id);

            return (
              <div
                key={lesson.id}
                onClick={() => { if (!isLocked) { setActiveLesson(lesson); setView("lesson"); setVideoOpen(false); } }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 transition-all"
                style={{ cursor: isLocked ? "not-allowed" : "pointer", opacity: isLocked ? 0.5 : 1 }}
                onMouseEnter={(e) => { if (!isLocked) e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: isDone ? "#27AE60" : isLocked ? "#B0B0B0" : cat.color }}>
                  {isDone ? <Check size={22} color="white" /> : isLocked ? <Lock size={20} color="white" /> : <span className="text-lg">{cat.icon}</span>}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-base truncate" style={{ color: "#2D3436", fontFamily: "'Fredoka', cursive" }}>{lesson.title}</h3>
                    {lesson.chord && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: cat.color }}>{lesson.chord}</span>
                    )}
                  </div>
                  <p className="text-xs mt-0.5 truncate" style={{ color: "#636E72" }}>{lesson.description}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs" style={{ color: "#95A5A6" }}>⏱ {lesson.duration}</span>
                    {lesson.chords && <span className="text-xs" style={{ color: "#95A5A6" }}>Chords: {lesson.chords.join(", ")}</span>}
                  </div>
                </div>

                {!isLocked && <ChevronRight size={20} color={cat.color} className="flex-shrink-0" />}
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl p-5 text-white text-center mb-6" style={{ background: "linear-gradient(135deg,#667EEA,#764BA2)" }}>
          <h2 className="text-lg font-bold mb-1" style={{ fontFamily: "'Fredoka', cursive" }}>🎸 You've Got This!</h2>
          <p className="text-sm leading-relaxed opacity-95">
            Every legendary guitarist started exactly where you are. A little practice each day adds up fast — and playing Beatles songs along the way makes it a blast!
          </p>
        </div>
      </div>
    </div>
  );
}
