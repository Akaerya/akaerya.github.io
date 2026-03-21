// =============================================
// PATH ICONS - Replace each URL with your own image path
// Recommended size: 24x24px
// =============================================
const PATH_ICONS = {
  Nihility:     '/images/nihility.webp',
  Erudition:    '/images/erudition.webp',
  Abundance:    '/images/abundance.webp',
  Hunt:         '/images/hunt.webp',
  Harmony:      '/images/harmony.webp',
  Destruction:  '/images/destruction.webp',
  Preservation: '/images/preservation.webp',
  Remembrance:  '/images/remembrance.webp',
  Elation:      '/images/elation.webp',
};

// =============================================
// ELEMENT ICONS - Replace each URL with your own image path
// Recommended size: 24x24px
// =============================================
const ELEMENT_ICONS = {
  Fire:      '/images/fire.webp',
  Ice:       '/images/ice.webp',
  Imaginary: '/images/imaginary.webp',
  Physical:  '/images/physical.webp',
  Quantum:   '/images/quantum.webp',
  Lightning: '/images/lightning.webp',
  Wind:      '/images/wind.webp',
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
  {n:"Acheron", p:"Nihility", e:"Lightning", r:5, img:"/images/character/acheron.webp", page:"/pages/acheron.html"},
  {n:"Aglaea", p:"Remembrance", e:"Lightning", r:5, img:"/images/character/aglaea.webp", page:"/pages/aglaea.html"},
  {n:"Anaxa", p:"Erudition", e:"Wind", r:5, img:"/images/character/anaxa.webp", page:"/pages/anaxa.html"},
  {n:"Archer", p:"Hunt", e:"Quantum", r:5, img:"/images/character/archer.webp", page:"/pages/archer.html"},
  {n:"Argenti", p:"Erudition", e:"Physical", r:5, img:"/images/character/argenti.webp", page:"/pages/argenti.html"},
  {n:"Ashveil", p:"Hunt", e:"Lightning", r:5, img:"/images/character/ashveil.webp", page:"/pages/ashveil.html"},
  {n:"Aventurine", p:"Preservation", e:"Imaginary", r:5, img:"/images/character/aventurine.webp", page:"/pages/aventurine.html"},
  {n:"Bailu", p:"Abundance", e:"Lightning", r:5, img:"/images/character/bailu.webp", page:"/pages/bailu.html"},
  {n:"Black Swan", p:"Nihility", e:"Wind", r:5, img:"/images/character/black-swan.webp", page:"/pages/black-swan.html"},
  {n:"Blade", p:"Destruction", e:"Wind", r:5, img:"/images/character/blade.webp", page:"/pages/blade.html"},
  {n:"Boothill", p:"Hunt", e:"Physical", r:5, img:"/images/character/boothill.webp", page:"/pages/boothill.html"},
  {n:"Bronya", p:"Harmony", e:"Wind", r:5, img:"/images/character/bronya.webp", page:"/pages/bronya.html"},
  {n:"Castorice", p:"Remembrance", e:"Quantum", r:5, img:"/images/character/castorice.webp", page:"/pages/castorice.html"},
  {n:"Cerydra", p:"Harmony", e:"Wind", r:5, img:"/images/character/cerydra.webp", page:"/pages/cerydra.html"},
  {n:"Clara", p:"Destruction", e:"Physical", r:5, img:"/images/character/clara.webp", page:"/pages/clara.html"},
  {n:"Cyrene", p:"Remembrance", e:"Ice", r:5, img:"/images/character/cyrene.webp", page:"/pages/cyrene.html"},
  {n:"Dan Heng • Imbibitor Lunae", p:"Destruction", e:"Imaginary", r:5, img:"/images/character/dhil.webp", page:"/pages/dhil.html"},
  {n:"Dan Heng • Permansor Terrae", p:"Preservation", e:"Physical", r:5, img:"/images/character/dhpt.webp", page:"/pages/dhpt.html"},
  {n:"Dr. Ratio", p:"Hunt", e:"Imaginary", r:5, img:"/images/character/ratio.webp", page:"/pages/ratio.html"},
  {n:"Evanescia", p:"Elation", e:"Physical", r:5, img:"/images/character/evanescia.webp", page:"/pages/evanescia.html"},
  {n:"Evernight", p:"Remembrance", e:"Ice", r:5, img:"/images/character/evernight.webp", page:"/pages/evernight.html"},
  {n:"Feixiao", p:"Hunt", e:"Wind", r:5, img:"/images/character/feixiao.webp", page:"/pages/feixiao.html"},
  {n:"Firefly", p:"Destruction", e:"Fire", r:5, img:"/images/character/firefly.webp", page:"/pages/firefly.html"},
  {n:"Fu Xuan", p:"Preservation", e:"Quantum", r:5, img:"/images/character/fuxuan.webp", page:"/pages/fuxuan.html"},
  {n:"Fugue", p:"Nihility", e:"Fire", r:5, img:"/images/character/fugue.webp", page:"/pages/fugue.html"},
  {n:"Gepard", p:"Preservation", e:"Ice", r:5, img:"/images/character/gepard.webp", page:"/pages/gepard.html"},
  {n:"Himeko", p:"Erudition", e:"Fire", r:5, img:"/images/character/himeko.webp", page:"/pages/himeko.html"},
  {n:"Huohuo", p:"Abundance", e:"Wind", r:5, img:"/images/character/huohuo.webp", page:"/pages/huohuo.html"},
  {n:"Hysilens", p:"Nihility", e:"Physical", r:5, img:"/images/character/hysilens.webp", page:"/pages/hysilens.html"},
  {n:"Jade", p:"Erudition", e:"Quantum", r:5, img:"/images/character/jade.webp", page:"/pages/jade.html"},
  {n:"Jiaoqiu", p:"Nihility", e:"Fire", r:5, img:"/images/character/jiaoqiu.webp", page:"/pages/jiaoqiu.html"},
  {n:"Jing Yuan", p:"Erudition", e:"Lightning", r:5, img:"/images/character/jingyuan.webp", page:"/pages/jingyuan.html"},
  {n:"Jingliu", p:"Destruction", e:"Ice", r:5, img:"/images/character/jingliu.webp", page:"/pages/jingliu.html"},
  {n:"Kafka", p:"Nihility", e:"Lightning", r:5, img:"/images/character/kafka.webp", page:"/pages/kafka.html"},
  {n:"Lingsha", p:"Abundance", e:"Fire", r:5, img:"/images/character/lingsha.webp", page:"/pages/lingsha.html"},
  {n:"Luocha", p:"Abundance", e:"Imaginary", r:5, img:"/images/character/luocha.webp", page:"/pages/luocha.html"},
  {n:"Mydei", p:"Destruction", e:"Imaginary", r:5, img:"/images/character/mydei.webp", page:"/pages/mydei.html"},
  {n:"Phainon", p:"Destruction", e:"Physical", r:5, img:"/images/character/phainon.webp", page:"/pages/phainon.html"},
  {n:"Rappa", p:"Erudition", e:"Imaginary", r:5, img:"/images/character/rappa.webp", page:"/pages/rappa.html"},
  {n:"Robin", p:"Harmony", e:"Physical", r:5, img:"/images/character/robin.webp", page:"/pages/robin.html"},
  {n:"Ruan Mei", p:"Harmony", e:"Ice", r:5, img:"/images/character/ruanmei.webp", page:"/pages/ruanmei.html"},
  {n:"Seele", p:"Hunt", e:"Quantum", r:5, img:"/images/character/seele.webp", page:"/pages/seele.html"},
  {n:"Silver Wolf", p:"Nihility", e:"Quantum", r:5, img:"/images/character/silverwolf.webp", page:"/pages/silverwolf.html"},
  {n:"Sparkle", p:"Harmony", e:"Quantum", r:5, img:"/images/character/sparkle.webp", page:"/pages/sparkle.html"},
  {n:"Sparxie", p:"Elation", e:"Fire", r:5, img:"/images/character/sparxie.webp", page:"/pages/sparxie.html"},
  {n:"Sunday", p:"Harmony", e:"Imaginary", r:5, img:"/images/character/sunday.webp", page:"/pages/sunday.html"},
  {n:"The Dahlia", p:"Nihility", e:"Fire", r:5, img:"/images/character/the-dahlia.webp", page:"/pages/the-dahlia.html"},
  {n:"The Herta", p:"Erudition", e:"Ice", r:5, img:"/images/character/the-herta.webp", page:"/pages/the-herta.html"},
  {n:"Topaz & Numby", p:"Hunt", e:"Fire", r:5, img:"/images/character/topaz-numby.webp", page:"/pages/topaz-numby.html"},
  {n:"Tribbie", p:"Harmony", e:"Quantum", r:5, img:"/images/character/tribbie.webp", page:"/pages/tribbie.html"},
  {n:"Welt", p:"Nihility", e:"Imaginary", r:5, img:"/images/character/welt.webp", page:"/pages/welt.html"},
  {n:"Yanqing", p:"Hunt", e:"Ice", r:5, img:"/images/character/yanqing.webp", page:"/pages/yanqing.html"},
  {n:"Yao Guang", p:"Elation", e:"Physical", r:5, img:"/images/character/yao-guang.webp", page:"/pages/yao-guang.html"},
  {n:"Yunli", p:"Destruction", e:"Physical", r:5, img:"/images/character/yunli.webp", page:"/pages/yunli.html"},
  {n:"Trailblazer (Destruction)", p:"Destruction", e:"Physical", r:5, img:"/images/character/dmc.webp", page:"/pages/dmc.html"},
  {n:"Trailblazer (Preservation)", p:"Preservation", e:"Fire", r:5, img:"/images/character/pmc.webp", page:"/pages/pmc.html"},
  {n:"Trailblazer (Harmony)", p:"Harmony", e:"Imaginary", r:5, img:"/images/character/hmc.webp", page:"/pages/hmc.html"},
  {n:"Trailblazer (Remembrance)", p:"Remembrance", e:"Ice", r:5, img:"/images/character/rmc.webp", page:"/pages/rmc.html"},

  {n:"Arlan", p:"Destruction", e:"Lightning", r:4, img:"/images/character/arlan.webp", page:"/pages/arlan.html"},
  {n:"Asta", p:"Harmony", e:"Fire", r:4, img:"/images/character/asta.webp", page:"/pages/asta.html"},
  {n:"Dan Heng", p:"Hunt", e:"Wind", r:4, img:"/images/character/dan-heng.webp", page:"/pages/dan-heng.html"},
  {n:"Gallagher", p:"Abundance", e:"Fire", r:4, img:"/images/character/gallagher.webp", page:"/pages/gallagher.html"},
  {n:"Guinaifen", p:"Nihility", e:"Fire", r:4, img:"/images/character/guinaifen.webp", page:"/pages/guinaifen.html"},
  {n:"Hanya", p:"Harmony", e:"Physical", r:4, img:"/images/character/hanya.webp", page:"/pages/hanya.html"},
  {n:"Herta", p:"Erudition", e:"Ice", r:4, img:"/images/character/herta.webp", page:"/pages/herta.html"},
  {n:"Hook", p:"Destruction", e:"Fire", r:4, img:"/images/character/hook.webp", page:"/pages/hook.html"},
  {n:"Luka", p:"Nihility", e:"Physical", r:4, img:"/images/character/luka.webp", page:"/pages/luka.html"},
  {n:"Lynx", p:"Abundance", e:"Quantum", r:4, img:"/images/character/lynx.webp", page:"/pages/lynx.html"},
  {n:"March 7th", p:"Preservation", e:"Ice", r:4, img:"/images/character/march.webp", page:"/pages/march.html"},
  {n:"March 7th (Hunt)", p:"Hunt", e:"Imaginary", r:4, img:"/images/character/marchhunt.webp", page:"/pages/marchhunt.html"},
  {n:"Misha", p:"Destruction", e:"Ice", r:4, img:"/images/character/misha.webp", page:"/pages/misha.html"},
  {n:"Moze", p:"Hunt", e:"Lightning", r:4, img:"/images/character/moze.webp", page:"/pages/moze.html"},
  {n:"Natasha", p:"Abundance", e:"Physical", r:4, img:"/images/character/natasha.webp", page:"/pages/natasha.html"},
  {n:"Pela", p:"Nihility", e:"Ice", r:4, img:"/images/character/pela.webp", page:"/pages/pela.html"},
  {n:"Qingque", p:"Erudition", e:"Quantum", r:4, img:"/images/character/qingque.webp", page:"/pages/qingque.html"},
  {n:"Sampo", p:"Nihility", e:"Wind", r:4, img:"/images/character/sampo.webp", page:"/pages/sampo.html"},
  {n:"Serval", p:"Erudition", e:"Lightning", r:4, img:"/images/character/serval.webp", page:"/pages/serval.html"},
  {n:"Sushang", p:"Hunt", e:"Physical", r:4, img:"/images/character/sushang.webp", page:"/pages/sushang.html"},
  {n:"Tingyun", p:"Harmony", e:"Lightning", r:4, img:"/images/character/tingyun.webp", page:"/pages/tingyun.html"},
  {n:"Xueyi", p:"Destruction", e:"Quantum", r:4, img:"/images/character/xueyi.webp", page:"/pages/xueyi.html"},
  {n:"Yukong", p:"Harmony", e:"Imaginary", r:4, img:"/images/character/yukong.webp", page:"/pages/yukong.html"}
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
    card.onclick = (e) => {
      e.preventDefault();
      if (c.page) {
        window.location.href = c.page;
      } else {
        showCharPage(c);
      }
    };
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
