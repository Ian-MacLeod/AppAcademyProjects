require 'json'

class Flash
  attr_reader :now, :flash
  def initialize(req)
    @now = {}
    @flash = {}
    if req.cookies.key?('_rails_lite_app_flash')
      @now = JSON.parse(req.cookies['_rails_lite_app_flash'])
    end
  end

  def [](key)
    now.merge(flash)[key.to_s] || now.merge(flash)[key.to_sym]
  end

  def []=(key, val)
    flash[key.to_s] = val
  end

  def store_flash(res)
    res.set_cookie('_rails_lite_app_flash', path: '/', value: JSON.generate(flash))
  end
end
