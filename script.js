// Expanded data for albums - user can add photos to img folder and update descriptions here
const albums = [
  {
    title: "Наши совместные фото",
    description: "Лучшие моменты, проведённые вместе.",
    photos: [
      "img/Us/us.jpg",
      "img/Us/us1.jpg",
      "img/Us/us2.jpg",
      "img/Us/us4.jpg",
      "img/Us/us5.jpg",
      "img/Us/us6.jpg",
      "img/Us/us7.jpg",
      "img/Us/us8.jpg",
      "img/Us/us9.jpg",
      "img/Us/us10.jpg",
      "img/Us/us11.jpg",
      "img/Us/us12.jpg",
      "img/Us/us13.jpg",
      "img/Us/us15.jpg",
    ]
  },
  {
    title: "Её фото",
    description: "Моя девушка самая самая красивая",
    photos: [
      "img/myGirl/love1.jpg",
      "img/myGirl/love2.jpg",
      "img/myGirl/love4.jpg",
      "img/myGirl/love5.jpg",
      "img/myGirl/love6.jpg",
      "img/myGirl/love7.jpg",
      "img/myGirl/love8.jpg",
      "img/myGirl/love9.jpg",
      "img/myGirl/love10.jpg",
      "img/myGirl/love11.jpg",
      "img/myGirl/love12.jpg",
      "img/myGirl/love13.jpg",
    ]
  },
  {
    title: "Смешная Лера",
    description: "Ты тут такая смешная, рофельна и самое главное - любимая",
    photos: [
      "img/rofl/rofl.jpg",
      "img/rofl/rofl1.jpg",
      "img/rofl/rofl2.jpg",
      "img/rofl/rofl3.jpg",
      "img/rofl/rofl4.jpg",
      "img/rofl/rofl5.jpg",
      "img/rofl/rofl6.jpg",
      "img/rofl/rofl7.jpg",
    ]
  },
  
];

// Expanded wishes and compliments data
const wishes = [
  "Ты — самое прекрасное, что случилось в моей жизни.",
  "Каждый день с тобой — это счастье.",
  "Ты делаешь меня лучше и счастливее.",
  "Спасибо за твою любовь и поддержку.",
  "Ты — моя вдохновляющая муза.",
  "Твоя улыбка озаряет мой мир.",
  "С тобой я чувствую себя дома.",
  "Ты — моя самая большая радость.",
  "Люблю тебя больше всего на свете.",
  "Ты делаешь мою жизнь волшебной.",
  "Спасибо, что всегда рядом.",
  "Ты — мое солнце в пасмурные дни.",
  "С тобой каждый момент особенный.",
  "Ты — моя нежность и сила.",
  "Люблю тебя за твою доброту и красоту.",
  "Ты — Любовь всей моей жизни.",
  "С тобой я хочу пройти весь путь.",
  "Ты делаешь меня счастливым каждый день.",
  "Спасибо за твою заботу и понимание.",
  "Ты — мое вдохновение и счастье.",
  "Ты — чудо, о котором я даже не мечтал.",
  "Ты украшаешь собой этот мир.",
  "Ты особенная, и это невозможно не заметить.",
  "Ты умеешь делать обычные моменты волшебными.",
  "Ты такая настоящая и искренняя.",
  "Ты — мой уют в этом беспокойном мире.",
  "Ты словно песня, которую хочется слушать вечно.",
  "Ты даришь свет даже в самую тёмную ночь.",
  "С тобой хочется мечтать и верить в лучшее.",
  "Ты — мой идеал во всём.",
  "Ты как книга, которую хочется перечитывать снова и снова.",
  "Ты — дыхание счастья.",
  "Ты заслуживаешь всего самого лучшего в жизни.",
  "Ты умеешь быть сильной и хрупкой одновременно.",
  "Ты такая, что сердце замирает при виде тебя.",
  "Ты — мой маленький космос.",
  "Ты делаешь этот мир лучше только своим присутствием.",
  "Ты — тишина, в которой хочется остаться навсегда.",
  "Ты красива даже в своей неуверенности.",
  "Ты как чашка чая в холодный вечер — тёплая и нужная.",
  "Ты — моя тихая гавань.",
  "Ты даёшь мне крылья.",
  "Ты умеешь слушать — это редкий дар.",
  "Ты — моя стихия и мой покой.",
  "Ты светишься изнутри, и это видно.",
  "Ты такая заботливая — это бесценно.",
  "Ты умеешь удивлять и вдохновлять.",
  "Ты не просто красивая — ты ослепительно прекрасна.",
  "Ты делаешь этот мир добрее.",
  "Ты — моя главная причина улыбаться.",
  "Ты — как рассвет после долгой ночи.",
  "Ты умеешь быть собой — и это самое притягательное.",
  "Ты как праздник, который всегда с тобой.",
  "Ты вдохновляешь меня быть лучше каждый день.",
  "Ты даёшь тепло, которое остаётся надолго.",
  "Ты как волшебство, в которое хочется верить.",
  "Ты умеешь делать людей счастливыми.",
  "Ты — сама гармония.",
  "Ты просто невероятная.",
  "Ты — моя стабильность в нестабильном мире.",
  "Ты словно сон, который стал явью.",
  "Ты всегда в моём сердце.",
  "Ты такая лёгкая и глубокая одновременно.",
  "Ты — подарок судьбы.",
  "Ты придаёшь смысл моим дням.",
  "Ты — как музыка без слов, но с сильными эмоциями.",
  "Ты — мой любимый человек.",
  "Ты умеешь быть сильной, когда нужно, и мягкой, когда хочется.",
  "Ты заслуживаешь всех звёзд на небе.",
  "Ты — огонёк, который согревает даже на расстоянии.",
  "Ты — лучшее, что могло случиться со мной.",
  "Ты как вдох — без тебя не могу.",
  "Ты — душевное спокойствие.",
  "Ты — моя поддержка и опора.",
  "Ты придаёшь смысл слову 'любовь'.",
  "Ты такая нежная и сильная — это восхищает.",
  "Ты умеешь быть рядом именно тогда, когда нужно.",
  "Ты не просто девушка, ты — чудо.",
  "Ты — как радуга после дождя.",
  "Ты умеешь делать счастливыми даже своими взглядами.",
  "Ты — моё любимое «здесь и сейчас».",
  "Ты как тёплый плед в холодную ночь.",
  "Ты делаешь всё с душой — и это видно.",
  "Ты словно солнце в январе — редкая и нужная.",
  "Ты умеешь любить так, как никто другой.",
  "Ты — главная причина, по которой я улыбаюсь.",
  "Ты умеешь быть настоящей — и это прекрасно.",
  "Ты даришь лёгкость и спокойствие.",
  "Ты — мой уют, моё счастье, моя радость.",
  "Ты — мой самый тёплый человек.",
  "Ты как магнит — к тебе тянет всё моё существо.",
  "Ты — вдохновение даже в самых простых вещах.",
  "Ты — как глоток свежего воздуха.",
  "Ты умеешь наполнять день смыслом и светом.",
  "Ты — моё доброе утро и сладкие сны.",
  "Ты — моё всё.",
  "Ты как чудо, которое всегда рядом.",
  "Ты даёшь мне больше, чем я могу выразить словами.",
  "Ты — светлая, глубокая и настоящая.",
  "Ты моя самая красивая случайность.",
  "Ты — единственная, с кем хочется быть всегда.",
  "Ты наполняешь мою жизнь любовью и смыслом.",
  "Ты — мой мир."
];

// Mini-game variables
let catHappy = false;
let feedCount = 0;
const maxFeed = 5;

// Utility to create elements with classes and attributes
function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  if (options.className) el.className = options.className;
  if (options.text) el.textContent = options.text;
  if (options.src) el.src = options.src;
  if (options.alt) el.alt = options.alt;
  if (options.id) el.id = options.id;
  if (options.html) el.innerHTML = options.html;
  if (options.placeholder) el.placeholder = options.placeholder;
  return el;
}

// Render Albums page
function renderAlbums() {
  const container = createElement('div', {className: 'page'});
  albums.forEach(album => {
    const albumDiv = createElement('div', {className: 'album'});
    const title = createElement('h2', {text: album.title});
    const desc = createElement('p', {className: 'album-description', text: album.description});
    const photosDiv = createElement('div', {className: 'album-photos'});
    album.photos.forEach(photo => {
      const img = createElement('img', {src: photo, alt: album.title});
      img.addEventListener('click', () => openPhotoViewer(photo));
      photosDiv.appendChild(img);
    });
    albumDiv.appendChild(title);
    albumDiv.appendChild(desc);
    albumDiv.appendChild(photosDiv);
    container.appendChild(albumDiv);
  });
  return container;
}

// Render Wishes page
function renderWishes() {
  const container = createElement('div', {className: 'page'});
  const ul = createElement('ul', {className: 'wishes-list'});
  wishes.forEach(wish => {
    const li = createElement('li', {text: wish});
    ul.appendChild(li);
  });
  container.appendChild(ul);
  return container;
}

// Render Mini-game page
function renderGame() {
  const container = createElement('div', {className: 'page game-container'});
  const cat = createElement('img', {className: 'cat-image', id: 'cat', src: './img/cat.jpg', alt: 'Кот'});
  const feedBtn = createElement('button', {className: 'food-button', text: 'Покормить кота'});
  const feedCountText = createElement('p', {id: 'feed-count', text: `Кормлений: ${feedCount} / ${maxFeed}`});

  feedBtn.addEventListener('click', () => {
    if (feedCount < maxFeed) {
      feedCount++;
      feedCountText.textContent = `Кормлений: ${feedCount} / ${maxFeed}`;
      cat.classList.add('happy');
      setTimeout(() => cat.classList.remove('happy'), 1000);
      if (feedCount === maxFeed) {
        alert('Кот сыт и счастлив! Спасибо за заботу!');
      }
    }
  });

  container.appendChild(cat);
  container.appendChild(feedBtn);
  container.appendChild(feedCountText);
  return container;
}

// Render "От души" page - static content placeholder for user to write letter in code
function renderFromHeart() {
  const container = createElement('div', {className: 'page'});
  // Write your letter to your girlfriend here in the code below:
  container.innerHTML = `
    <h2>От души</h2>
    <p>
            <b>Лера, Лера, Лерочка…</b><br><br>

    Вот уже год, как мы вместе. А за годом — два, потом и двадцать…<br>
    И я с уверенностью могу сказать: этот год с тобой стал самым прекрасным в моей жизни.<br>
    Каждая минута, каждое мгновение рядом с тобой наполняют мой мир светом, теплом и смыслом.<br><br>

    С тобой мне не страшно думать о будущем.<br>
    Не страшно, что будет завтра — потому что я знаю: ты рядом.<br>
    Ты поддержишь, поймёшь, обнимешь, когда нужно — просто будешь. И мне этого достаточно.<br><br>

    Мне очень важна твоя любовь. Твоя забота, твое внимание, твое тепло — всё это стало для меня необходимым, как воздух.<br>
    Иногда просто хочется лечь рядом с тобой, молча прижаться — и ничего больше не нужно.<br>
    Только ты.<br>
    Только этот момент.<br><br>

    Мне нравится в тебе всё.<br>
    Когда ты только просыпаешься.<br>
    Когда шутишь.<br>
    Когда улыбаешься своей самой настоящей улыбкой.<br>
    Когда смеёшься так искренне, что хочется смеяться вместе с тобой.<br>
    Когда рассказываешь, как прошёл день — даже если день был не самый лучший.<br>
    Когда делишься своими планами, мечтами, переживаниями.<br>
    Когда говоришь: <i>«люблю»</i> — я будто слышу это первым разом, каждый раз.<br><br>

    Я люблю тебя.<br>
    Люблю твою улыбку, твои прекрасные глаза, твой голос, твои волосы, твой характер, твою душу, тебя всю — от и до.<br>
    С каждым днём — только сильнее.<br><br>

    Ты — мой самый родной и самый любимый человек.<br>
    Ты — лучшее, что есть в этом мире.<br>
    Ты — самая красивая, милая, добрая, нежная, умная, вдохновляющая.<br><br>

    Ты как весна — тёплая и пробуждающая.<br>
    Как луч солнца в пасмурный день.<br>
    Как спокойствие в этом хаосе.<br>
    Как магия, к которой привыкаешь с первой встречи.<br>
    Ты — мой личный антистресс.<br>
    Ты — та, с кем хорошо молчать и говорить.<br>
    Та, кого хочется держать за руку всегда, в любом моменте жизни.<br>
    Ты — особенная. И этого уже более чем достаточно.<br><br>

    Я люблю тебя, Лера. И буду любить всегда.<br>
    Любить несмотря ни на что.<br>
    Любить даже если весь мир будет против.<br>
    Любить в радости, в счастье, в любой момент.<br>
    Любить — всю свою жизнь.<br><br>

    Спасибо тебе, моя родная.<br>
    Ты — самая прекрасная девушка на свете.<br>
    И я тебя люблю.
    <br><br><br><br>  
    </p>
    <p>
      Песня на фоне для тебя любимой
    </p>
    
  `;
  return container;
}

// Photo viewer functions
function openPhotoViewer(src) {
  const viewer = document.getElementById('photoViewer');
  const viewerImage = document.getElementById('viewerImage');
  viewerImage.src = src;
  viewer.classList.remove('hidden');
}

function closePhotoViewer() {
  const viewer = document.getElementById('photoViewer');
  viewer.classList.add('hidden');
  const viewerImage = document.getElementById('viewerImage');
  viewerImage.src = '';
}

// Routing logic
function router() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  const hash = window.location.hash || '#albums';
  const route = hash.replace('#', '');

  // Update active link
  document.querySelectorAll('nav a').forEach(link => {
    if (link.dataset.route === route) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  let page;
  switch(route) {
    case 'albums':
      page = renderAlbums();
      break;
    case 'wishes':
      page = renderWishes();
      break;
    case 'game':
      page = renderGame();
      break;
    case 'fromHeart':
      page = renderFromHeart();
      break;
    default:
      page = renderAlbums();
  }
  app.appendChild(page);
}

// Background music setup
function setupMusic() {
  const audio = document.getElementById('background-music');
  audio.volume = 0.3;
  audio.play().catch(() => {
    console.log('Autoplay blocked, user interaction needed to start music.');
  });
}

document.addEventListener('click', function once() {
  setupMusic();
  document.removeEventListener('click', once); // чтобы не запускать повторно
});

// Initialize app
function init() {
  window.addEventListener('hashchange', router);
  router();

  // Setup photo viewer close button
  const closeBtn = document.getElementById('closeViewer');
  closeBtn.addEventListener('click', closePhotoViewer);

  setupMusic();
}

document.addEventListener('DOMContentLoaded', init);
