module Jekyll
  module RegexFilter
    def cf_image_filter(input)
      input.gsub(/\(\/\/images.contentful.com\/.*(?=\))/, '\0?fm=jpg&amp;q=50&w=900')
    end
  end
end

Liquid::Template.register_filter(Jekyll::RegexFilter)
