---
layout: default
---

<div class="o-grid">
  {% for item in site.data.contentful.spaces.mrm.settings[0].home_grid %}
    <div{% if forloop.first %} class="o-grid__feature"{% endif %}>
      <a href="{{ item.title | datapage_url: '' }}" class="o-grid__item">
        <div class="o-grid__content" style="background-image: url({{ item.image.url }}?fm=jpg&amp;q=50&w={% if forloop.first %}900{% else %}450{% endif %})">
          <span class="c-tape{% if forloop.first %} c-tape--feature{% endif %}">{{ item.title }}</span>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
