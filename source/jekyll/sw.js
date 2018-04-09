---
layout: null
---
{% assign urls_to_cache = "'/','/favicon.ico','/fonts/bebasneue_bold-webfont.woff','/fonts/bebasneue_bold-webfont.woff2','/fonts/zillaslab-lightitalic-webfont.woff','/fonts/zillaslab-lightitalic-webfont.woff2','/fonts/zillaslab-regular-webfont.woff','/fonts/zillaslab-regular-webfont.woff2','/fonts/zillaslab-semibold-webfont.woff','/fonts/zillaslab-semibold-webfont.woff2'" %}

{%- for item in site.data.contentful.spaces.mrm.settings[0].home_grid -%}
  {% assign width = 450 %}{% if forloop.first %}{% assign width = 900 %}{% endif %}
  {% if item.image %}{% capture urls_to_cache = '' %}{% if urls_to_cache != '' %}{{ urls_to_cache }},{% endif %}'{{ item.image.url | cf_image_url: width }}'{% endcapture %}{% endif %}
{%- endfor -%}

{%- for page in site.data.contentful.spaces.mrm.settings[0].menu -%}
  {% capture urls_to_cache = '' %}{{ urls_to_cache }},'{{ page.title | datapage_url: "" | replace: "home.html", "index.html" }}'{% endcapture %}
  {% if page.image %}{% capture urls_to_cache = '' %}{{ urls_to_cache }},'{{ page.image.url | cf_image_url: 900 }}'{% endcapture %}{% endif %}

{%- endfor -%}

{%- for event in site.data.contentful.spaces.mrm.event -%}
  {% capture urls_to_cache = '' %}{{ urls_to_cache }},'/{{ event.name | datapage_url: "events" }}'{% endcapture %}
  {% if event.image_detail %}{% capture urls_to_cache = '' %}{{ urls_to_cache }},'{{ event.image_detail.url | cf_image_url: 900 }}'{% endcapture %}{% endif %}
  {% if event.image_listing %}{% capture urls_to_cache = '' %}{{ urls_to_cache }},'{{ event.image_listing.url | cf_image_url: 900 }}'{% endcapture %}{% endif %}
{%- endfor -%}

{% assign urls_inline_to_cache = '' %}
{%- for page in site.data.contentful.spaces.mrm.settings[0].menu -%}
  {% if page.copy != nil %}{% capture urls_inline_to_cache = '' %}{{ urls_inline_to_cache }}{{ page.copy | cf_image_extraction_filter | join: "?fm=jpg&fl=progressive&q=50&w=900','https:" }}{% endcapture %}{% endif %}
{%- endfor -%}

var urlsToCache = [{{ urls_to_cache | replace: 'amp;','' }},'https:{{ urls_inline_to_cache }}?fm=jpg&fl=progressive&q=50&w=900'];

const staticCacheName = 'mrm-{{ site.time | date: "%Y%m%d%H%M" }}';
const expectedCaches = [
  staticCacheName
];

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!expectedCaches.includes(key)) return caches.delete(key);
      })
    ))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(staticCacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
