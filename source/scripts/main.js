const nav = document.getElementById('nav');
const navBtn = document.getElementById('nav-btn');

navBtn.addEventListener('click', event => {
  nav.classList.toggle('is-visible');
  navBtn.classList.toggle('is-active');
});

const advertsDisplayed = [];

function getAdvert(type) {
  const advertsAvailable = adverts
    .filter(advert => !advertsDisplayed.includes(advert.sys.id))
    .reduce((advertsFiltered, advert) => {
      if (advert.advert_type.toLowerCase() === type) {
        advertsFiltered[advert.sys.id] = advert;
      }
      return advertsFiltered;
    }, {});

  if (!Object.keys(advertsAvailable).length) {
    return false;
  }

  const randomKey = Object.keys(advertsAvailable)[Math.floor(Math.random()*Object.keys(advertsAvailable).length)];
  advertsDisplayed.push(randomKey);

  return adverts.filter(advert => advert.sys.id === randomKey)[0];
};

function renderAdvert(advert, type) {
  var a = document.createElement('a');
  var div = document.createElement('div');

  a.href = advert.link;
  a.classList.add('c-image-aspect', `c-image-aspect--${type}`);

  div.classList.add('c-image-aspect__content');
  div.style.backgroundImage = `url(https:${advert.image.url}?fm=jpg&fl=progressive&q=50&w=900)`;

  a.appendChild(div);

  return a;
}

const advertBanner = document.getElementById('advert');
const advertPoster = document.getElementById('advert-poster');
const advertSpacing = 4;

if (advertBanner) {
  var gridItems = Array.from(advertBanner.children);

  gridItems.forEach((item, index) => {
    if (index === 0 || index % advertSpacing == 0 && index !== gridItems.length-1) {
      const advert = getAdvert('banner');

      if (advert) {
        const div = document.createElement('div');
        const element = renderAdvert(advert, 'shallow');

        div.classList.add('o-grid__feature');
        div.appendChild(element);

        advertBanner.insertBefore(div, item.nextSibling);
      }
    }
  });
}

if (advertPoster) {
  const advert = getAdvert('poster');
  const element = renderAdvert(advert, 'poster');

  advertPoster.appendChild(element);
}
