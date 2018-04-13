module Jekyll
  module RegexFilter
    def cf_image_extraction_filter(input)
      input.scan(/\/\/images.contentful.com\/.*(?=\))/)
    end
  end
end

Liquid::Template.register_filter(Jekyll::RegexFilter)
