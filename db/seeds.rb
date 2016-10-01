page = Nokogiri::HTML(open("http://www.d20pfsrd.com/magic/spell-lists-and-domains/spell-lists---sorcerer-and-wizard?tmpl=%2Fsystem%2Fapp%2Ftemplates%2Fprint%2F"))
spell_links = page.css("a").select{ |link| link["href"].include?("magic/all-spells") unless link["href"].nil? }
spell_links.each do |link|
  unless link.children.text == link.children.text.downcase
    spell = Spell.new(name: link.children.text, level: link.parent.parent.parent.parent.children[1].text[0].to_i, url: link.attributes["href"].value)
    if spell.save
      print "#{spell.level.to_s}: #{spell.name}. "
    end
  end
end
