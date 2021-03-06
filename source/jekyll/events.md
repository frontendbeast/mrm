---
layout: default
back: "/"
---

{% assign events_by_day = site.data.contentful.spaces.mrm.event | sort: 'date' | group_by_exp: "event", "event.date | date: '%A'" %}

{% for events_day in events_by_day %}
  <h1 class="c-heading c-heading--h3 c-event__day">{{ events_day.name }}</h1>
  {% for event in events_day.items %}
  <div class="o-grid__feature">
    <a href="{{ event.name | datapage_url: 'events' }}" class="c-image-aspect c-image-aspect--event-listing">
      <div class="c-image-aspect__content c-image-aspect__content--bottom{% if event.image_listing.url == nil %} c-image-aspect__content--no-bg {% endif %}" style="background-image: url({{ event.image_listing.url | cf_image_url: 900 }})">
        <div class="c-image-aspect__overlay"></div>
        <div class="c-image-aspect__overlay-content">
          <div class="c-event__tape">
            <div class="c-heading c-heading--h2 c-tape">{{ event.name }}</div>
          </div>
          {% capture minutes %}{{ event.date | date: '%M' }}{% endcapture %}
          <div class="c-heading c-heading--h3 c-tape c-tape--alt">{% if minutes != "00" %}{{ event.date | date: '%l:%M%P' }}{% else %}{{ event.date | date: '%l%P' }}{% endif %} @ {{ event.venue.name }}</div>
        </div>
      </div>
    </a>
  </div>
  {% endfor %}
{% endfor %}
