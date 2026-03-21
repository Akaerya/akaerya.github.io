// =============================================
// PATH ICONS - Replace each URL with your own image path
// Recommended size: 24x24px
// =============================================
const PATH_ICONS = {
  Nihility:     'https://via.placeholder.com/24/8888aa/fff?text=Ni',
  Erudition:    'https://via.placeholder.com/24/8888aa/fff?text=Er',
  Abundance:    'https://via.placeholder.com/24/8888aa/fff?text=Ab',
  Hunt:         'https://via.placeholder.com/24/8888aa/fff?text=Hu',
  Harmony:      'https://via.placeholder.com/24/8888aa/fff?text=Ha',
  Destruction:  'https://via.placeholder.com/24/8888aa/fff?text=De',
  Preservation: 'https://via.placeholder.com/24/8888aa/fff?text=Pr',
  Remembrance:  'https://via.placeholder.com/24/8888aa/fff?text=Re',
  Elation:      'https://via.placeholder.com/24/8888aa/fff?text=El',
};

// =============================================
// ELEMENT ICONS - Replace each URL with your own image path
// Recommended size: 24x24px
// =============================================
const ELEMENT_ICONS = {
  Fire:      'https://via.placeholder.com/24/e04040/fff?text=Fi',
  Ice:       'https://via.placeholder.com/24/40a0e0/fff?text=Ic',
  Imaginary: 'https://via.placeholder.com/24/e0c040/fff?text=Im',
  Physical:  'https://via.placeholder.com/24/a0a0b0/fff?text=Ph',
  Quantum:   'https://via.placeholder.com/24/8060d0/fff?text=Qu',
  Lightning: 'https://via.placeholder.com/24/c060e0/fff?text=Li',
  Wind:      'https://via.placeholder.com/24/40c080/fff?text=Wi',
};

const ELEMENT_COLORS = {
  Fire: '#e04040', Ice: '#40a0e0', Imaginary: '#e0c040',
  Physical: '#a0a0b0', Quantum: '#8060d0', Lightning: '#c060e0', Wind: '#40c080'
};

// =============================================
// CHARACTER DATA
// Each character has an 'img' field for the tile image.
// Recommended size: 400x460px
// Yes, everything is hardcoded
// =============================================
const characters = [
  {n:"Acheron",         p:"Nihility",     e:"Lightning", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Acheron"},
  {n:"Aglaea",          p:"Remembrance",  e:"Lightning", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Aglaea"},
  {n:"Anaxa",           p:"Erudition",    e:"Wind",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Anaxa"},
  {n:"Archer",          p:"Hunt",         e:"Quantum",   r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Archer"},
  {n:"Argenti",         p:"Erudition",    e:"Physical",  r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Argenti"},
  {n:"Ashveil",         p:"Hunt",         e:"Lightning", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Ashveil"},
  {n:"Aventurine",      p:"Preservation", e:"Imaginary", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Aventurine"},
  {n:"Bailu",           p:"Abundance",    e:"Lightning", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Bailu"},
  {n:"Black Swan",      p:"Nihility",     e:"Wind",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Black+Swan"},
  {n:"Blade",           p:"Destruction",  e:"Wind",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Blade"},
  {n:"Boothill",        p:"Hunt",         e:"Physical",  r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Boothill"},
  {n:"Bronya",          p:"Harmony",      e:"Wind",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Bronya"},
  {n:"Castorice",       p:"Remembrance",  e:"Quantum",   r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Castorice"},
  {n:"Clara",           p:"Destruction",  e:"Physical",  r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Clara"},
  {n:"Cyrene",          p:"Remembrance",  e:"Ice",       r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Cyrene"},
  {n:"Dan Heng • Imbibitor Lunae", p:"Destruction", e:"Imaginary", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=DHIL"},
  {n:"Dan Heng • Permansor Terrae",p:"Preservation", e:"Physical", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=DHPT"},
  {n:"Dr. Ratio",       p:"Hunt",         e:"Imaginary", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Dr.+Ratio"},
  {n:"Evanescia",       p:"Elation",      e:"Physical",  r:5, img:"/images/character/evanescia.webp"},
  {n:"Evernight",       p:"Remembrance",  e:"Ice",       r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Evernight"},
  {n:"Feixiao",         p:"Hunt",         e:"Wind",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Feixiao"},
  {n:"Firefly",         p:"Destruction",  e:"Fire",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Firefly"},
  {n:"Fu Xuan",         p:"Preservation", e:"Quantum",   r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Fu+Xuan"},
  {n:"Fugue",           p:"Nihility",     e:"Fire",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Fugue"},
  {n:"Gepard",          p:"Preservation", e:"Ice",       r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Gepard"},
  {n:"Himeko",          p:"Erudition",    e:"Fire",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Himeko"},
  {n:"Huohuo",          p:"Abundance",    e:"Wind",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Huohuo"},
  {n:"Jade",            p:"Erudition",    e:"Quantum",   r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Jade"},
  {n:"Jiaoqiu",         p:"Nihility",     e:"Fire",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Jiaoqiu"},
  {n:"Jing Yuan",       p:"Erudition",    e:"Lightning", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Jing+Yuan"},
  {n:"Jingliu",         p:"Destruction",  e:"Ice",       r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Jingliu"},
  {n:"Kafka",           p:"Nihility",     e:"Lightning", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Kafka"},
  {n:"Lingsha",         p:"Abundance",    e:"Fire",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Lingsha"},
  {n:"Luocha",          p:"Abundance",    e:"Imaginary", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Luocha"},
  {n:"Mydei",           p:"Destruction",  e:"Imaginary", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Mydei"},
  {n:"Phainon",         p:"Destruction",  e:"Physical",  r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Phainon"},
  {n:"Rappa",           p:"Erudition",    e:"Imaginary", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Rappa"},
  {n:"Robin",           p:"Harmony",      e:"Physical",  r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Robin"},
  {n:"Ruan Mei",        p:"Harmony",      e:"Ice",       r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Ruan+Mei"},
  {n:"Seele",           p:"Hunt",         e:"Quantum",   r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Seele"},
  {n:"Silver Wolf",     p:"Nihility",     e:"Quantum",   r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Silver+Wolf"},
  {n:"Sparkle",         p:"Harmony",      e:"Quantum",   r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Sparkle"},
  {n:"Sparxie",         p:"Elation",      e:"Fire",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Sparxie"},
  {n:"Sunday",          p:"Harmony",      e:"Imaginary", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Sunday"},
  {n:"The Dahlia",      p:"Nihility",     e:"Fire",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=The+Dahlia"},
  {n:"The Herta",       p:"Erudition",    e:"Ice",       r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=The+Herta"},
  {n:"Topaz & Numby",   p:"Hunt",         e:"Fire",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Topaz"},
  {n:"Tribbie",         p:"Harmony",      e:"Quantum",   r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Tribbie"},
  {n:"Welt",            p:"Nihility",     e:"Imaginary", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Welt"},
  {n:"Yanqing",         p:"Hunt",         e:"Ice",       r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Yanqing"},
  {n:"Yao Guang",       p:"Elation",      e:"Physical",  r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Yao+Guang"},
  {n:"Yunli",           p:"Destruction",  e:"Physical",  r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=Yunli"},
  {n:"Trailblazer (Destruction)",  p:"Destruction",  e:"Physical",  r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=TB+Dest"},
  {n:"Trailblazer (Preservation)", p:"Preservation", e:"Fire",      r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=TB+Pres"},
  {n:"Trailblazer (Harmony)",      p:"Harmony",      e:"Imaginary", r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=TB+Harm"},
  {n:"Trailblazer (Remembrance)",  p:"Remembrance",  e:"Ice",       r:5, img:"https://via.placeholder.com/200x230/2a1a4a/fff?text=TB+Remm"},
  {n:"Arlan",           p:"Destruction",  e:"Lightning", r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Arlan"},
  {n:"Asta",            p:"Harmony",      e:"Fire",      r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Asta"},
  {n:"Dan Heng",        p:"Hunt",         e:"Wind",      r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Dan+Heng"},
  {n:"Gallagher",       p:"Abundance",    e:"Fire",      r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Gallagher"},
  {n:"Guinaifen",       p:"Nihility",     e:"Fire",      r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Guinaifen"},
  {n:"Hanya",           p:"Harmony",      e:"Physical",  r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Hanya"},
  {n:"Herta",           p:"Erudition",    e:"Ice",       r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Herta"},
  {n:"Hook",            p:"Destruction",  e:"Fire",      r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Hook"},
  {n:"Luka",            p:"Nihility",     e:"Physical",  r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Luka"},
  {n:"Lynx",            p:"Abundance",    e:"Quantum",   r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Lynx"},
  {n:"March 7th",       p:"Preservation", e:"Ice",       r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=March+7th"},
  {n:"March 7th (Hunt)",p:"Hunt",         e:"Imaginary", r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=March+Hunt"},
  {n:"Misha",           p:"Destruction",  e:"Ice",       r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Misha"},
  {n:"Moze",            p:"Hunt",         e:"Lightning", r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Moze"},
  {n:"Natasha",         p:"Abundance",    e:"Physical",  r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Natasha"},
  {n:"Pela",            p:"Nihility",     e:"Ice",       r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Pela"},
  {n:"Qingque",         p:"Erudition",    e:"Quantum",   r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Qingque"},
  {n:"Sampo",           p:"Nihility",     e:"Wind",      r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Sampo"},
  {n:"Serval",          p:"Erudition",    e:"Lightning", r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Serval"},
  {n:"Sushang",         p:"Hunt",         e:"Physical",  r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Sushang"},
  {n:"Tingyun",         p:"Harmony",      e:"Lightning", r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Tingyun"},
  {n:"Xueyi",           p:"Destruction",  e:"Quantum",   r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Xueyi"},
  {n:"Yukong",          p:"Harmony",      e:"Imaginary", r:4, img:"https://via.placeholder.com/200x230/1a2a4a/fff?text=Yukong"},
];

// =============================================
// Filter config
// =============================================
const paths = ["All","Preservation","Erudition","Abundance","Hunt","Harmony","Nihility","Destruction","Remembrance","Elation"];
const elements = ["All","Fire","Ice","Imaginary","Physical","Quantum","Lightning","Wind"];
const ratings = ["All","5★","4★"];

let activePath = "All", activeElement = "All", activeRating = "All";

// =============================================
// Build filter pills
// =============================================
function buildPills(containerId, items, type) {
  const el = document.getElementById(containerId);
  items.forEach(item => {
    const pill = document.createElement('span');
    pill.className = 'pill' + (item === 'All' ? ' active' : '');

    if (type === 'element' && item !== 'All') {
      pill.innerHTML = `<img class="pill-icon" src="${ELEMENT_ICONS[item]}" alt="${item}"> ${item}`;
    } else if (type === 'path' && item !== 'All') {
      pill.innerHTML = `<img class="pill-icon" src="${PATH_ICONS[item]}" alt="${item}"> ${item}`;
    } else {
      pill.textContent = item;
    }

    pill.onclick = () => {
      el.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      if (type === 'path') activePath = item;
      else if (type === 'element') activeElement = item;
      else activeRating = item;
      render();
    };
    el.appendChild(pill);
  });
}

// =============================================
// Render character grid
// =============================================
function render() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const grid = document.getElementById('charGrid');
  grid.innerHTML = '';

  const filtered = characters.filter(c => {
    if (q && !c.n.toLowerCase().includes(q)) return false;
    if (activePath !== 'All' && c.p !== activePath) return false;
    if (activeElement !== 'All' && c.e !== activeElement) return false;
    if (activeRating === '5★' && c.r !== 5) return false;
    if (activeRating === '4★' && c.r !== 4) return false;
    return true;
  });

  filtered.forEach(c => {
    const card = document.createElement('a');
    card.className = `card rarity-${c.r}`;
    card.href = '#';
    card.onclick = (e) => { e.preventDefault(); showCharPage(c); };
    card.innerHTML = `
      <div class="card-img">
        <img src="${c.img}" alt="${c.n}">
        <div class="card-badges">
          <span class="badge badge-element" style="background:${ELEMENT_COLORS[c.e]}90" title="${c.e}">
            <img src="${ELEMENT_ICONS[c.e]}" alt="${c.e}">
          </span>
          <span class="badge badge-path" title="${c.p}">
            <img src="${PATH_ICONS[c.p]}" alt="${c.p}">
          </span>
        </div>
      </div>
      <div class="card-info">
        <div class="card-name" title="${c.n}">${c.n}</div>
        <div class="card-stars">${'★'.repeat(c.r)}</div>
      </div>`;
    grid.appendChild(card);
  });
}

// =============================================
// Character detail page
// =============================================
function showCharPage(c) {
  document.querySelector('.main-list').classList.add('hidden');
  const page = document.getElementById('charPage');
  page.classList.add('visible');
  page.innerHTML = `
    <button class="back-btn" onclick="hideCharPage()">← Back to Characters</button>
    <div class="char-header">
      <div class="char-portrait rarity-${c.r}">
        <img src="${c.img}" alt="${c.n}">
      </div>
      <div class="char-details">
        <h2>${c.n}</h2>
        <div class="char-stars-lg">${'★'.repeat(c.r)}</div>
        <div class="char-meta">
          <div class="char-meta-row">
            <span class="char-meta-label">Path</span>
            <span class="char-meta-value">
              <img src="${PATH_ICONS[c.p]}" alt="${c.p}"> ${c.p}
            </span>
          </div>
          <div class="char-meta-row">
            <span class="char-meta-label">Element</span>
            <span class="char-meta-value">
              <img src="${ELEMENT_ICONS[c.e]}" alt="${c.e}"> ${c.e}
            </span>
          </div>
          <div class="char-meta-row">
            <span class="char-meta-label">Rarity</span>
            <span class="char-meta-value">${c.r}-Star</span>
          </div>
        </div>
      </div>
    </div>`;
}

function hideCharPage() {
  document.getElementById('charPage').classList.remove('visible');
  document.getElementById('charPage').innerHTML = '';
  document.querySelector('.main-list').classList.remove('hidden');
}

// =============================================
// Init
// =============================================
buildPills('pathFilters', paths, 'path');
buildPills('elementFilters', elements, 'element');
buildPills('ratingFilters', ratings, 'rating');
document.getElementById('searchInput').addEventListener('input', render);
render();
