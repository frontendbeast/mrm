module Jekyll
  module AssetFilter
    def cf_image_url(input, width)
      "#{input}?fm=jpg&amp;q=50&w=#{width}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
