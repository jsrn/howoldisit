#!/usr/bin/env ruby

require 'json'
require 'date'

def years_since(date_string)
  years = if date_string =~ /^\d{4}$/
            Date.today.year - date_string.to_i
          else
            date = Date.parse(date_string)
            ((Date.today - date) / 365).to_i
          end

  if years.zero?
    'hardly any time at all!'
  elsif years == 1
    '1 year'
  else
    "#{years} years"
  end
end

def icon(key)
  svg_data = @icons[key] || @icons['default']

  <<-SVG
  <svg class="icon" viewBox="#{svg_data['viewBox'] || '0 0 1024 1024'}" transform="#{svg_data['transform'] || 'scale(1, 1)'}">
    #{svg_data['path'].map do |k, i| %(<path d="#{k}" key="#{i}"></path>) end.join}
  </svg>
  SVG
end

template = File.read('index.template')
technologies = JSON.parse(File.read('technologies.json'))
@icons = JSON.parse(File.read('icons.json'))

technology_html = technologies.map do |tech|
  <<-HTML
  <p data-name="#{tech['name']}">
    <a target="_blank" rel='noopener noreferrer' href="#{tech['link']}">
      #{icon(tech['icon'])}
      <strong>#{tech['name']}</strong>
    </a> has been out for <strong class="date-field" data-date="#{tech['released']}">#{years_since(tech['released'])}</strong>
  </p>
  HTML
end.join

dropdown_html = technologies.map do |tech|
  <<-HTML
  <option value="#{tech['name']}"></option>
  HTML
end.join

generated_html = template.sub("TECH_GOES_HERE", technology_html)
generated_html = generated_html.sub("DROPDOWN_OPTIONS", dropdown_html)

File.write("index.html", generated_html)
