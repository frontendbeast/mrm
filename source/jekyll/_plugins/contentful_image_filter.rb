module Jekyll
  module RegexFilter
    def cf_image_filter(input)
      input.gsub(/\/\/images.contentful.com\/.*(?=\))/, 'https:\0?fm=jpg&amp;fl=progressive&amp;q=50&w=900')
    end
  end
end

Liquid::Template.register_filter(Jekyll::RegexFilter)
