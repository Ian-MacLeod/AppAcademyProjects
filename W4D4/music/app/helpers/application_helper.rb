module ApplicationHelper
  def ugly_lyrics(lyrics)
    contents = lyrics.split("\n").map { |line| "&#9835; #{h(line)}" }.join("\n")
    "<pre>#{contents}</pre>".html_safe
  end
end
