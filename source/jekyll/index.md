---
layout: default
---

<div class="o-grid" id="advert">
  {% for item in site.data.contentful.spaces.mrm.settings[0].home_grid %}
    <div{% if forloop.first %} class="o-grid__feature"{% endif %}>
      <a href="{{ item.title | datapage_url: '' }}" class="c-image-aspect">
        {% assign width = 450 %}
        {% if forloop.first %}
          {% assign width = 900 %}
        {% endif %}
        <div class="c-image-aspect__content{% if forloop.first %} c-image-aspect__content--center-bottom{% endif %}" style="background-image: url({{ item.image.url | cf_image_url: width }})">
          <span class="c-heading c-tape{% if forloop.first %} c-tape--feature c-heading--h1{% else %} c-heading--h2{% endif %}">{{ item.title }}</span>
        </div>
      </a>
    </div>
  {% endfor %}
  <div class="o-grid__feature" id="advert-poster"></div>
</div>
