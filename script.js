/* =====================================================
   KENANGAN WEBSITE — script.js
   Jangan ubah file ini.
   ===================================================== */

const wrap    = document.getElementById('wrap');
const navEl   = document.getElementById('navDots');
const audio   = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
const visEl   = document.getElementById('visualizer');
const slides  = [...document.querySelectorAll('.slide')];

// ---- Generate nav dots ----
slides.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'nav-dot';
  d.title = `Slide ${i + 1}`;
  d.addEventListener('click', () => toSlide(i + 1));
  navEl.appendChild(d);
});

const dots = [...document.querySelectorAll('.nav-dot')];

function setDot(n) {
  dots.forEach((d, i) => d.classList.toggle('active', i === n));
}

// ---- Scroll to slide (global, dipakai di onclick di HTML) ----
function toSlide(num) {
  const el = document.querySelector(`[data-slide="${num}"]`);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
window.toSlide = toSlide; // ekspos ke global scope

// ---- Intersection Observer: aktifkan slide saat masuk viewport ----
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const idx = slides.indexOf(e.target);
      e.target.classList.add('on');
      setDot(idx);
      curSlide = idx;
    }
  });
}, { threshold: 0.45 });

slides.forEach(s => io.observe(s));

// Aktifkan slide pertama setelah halaman load (dengan delay kecil untuk efek sinematik)
window.addEventListener('load', () => {
  setTimeout(() => {
    slides[0]?.classList.add('on');
    setDot(0);
  }, 350);
});

// ---- Keyboard navigation ----
let curSlide = 0;

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    const next = Math.min(curSlide + 1, slides.length - 1);
    toSlide(next + 1);
  }
  if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    const prev = Math.max(curSlide - 1, 0);
    toSlide(prev + 1);
  }
});

// ---- Music player ----
function toggleMusic() {
  if (audio.paused) {
    audio.play()
      .then(() => {
        playBtn.classList.add('paused');
        document.getElementById('playIcon').textContent = '⏸';
        document.getElementById('playText').textContent = 'Pause';
        visEl.classList.add('on');
      })
      .catch(() => {
        // Autoplay diblokir browser — tidak apa-apa, user sudah klik tombol
        console.warn('Tidak bisa memutar audio. Pastikan file lagu sudah di assets/music/');
      });
  } else {
    audio.pause();
    playBtn.classList.remove('paused');
    document.getElementById('playIcon').textContent = '▶';
    document.getElementById('playText').textContent = 'Putar Musik';
    visEl.classList.remove('on');
  }
}
window.toggleMusic = toggleMusic; // ekspos ke global scope
