require 'json'

class Session
  # find the cookie for this app
  # deserialize the cookie into a hash
  attr_reader :modified

  def initialize(req)
    @modified = false
    @data = {}
    if req.cookies.key?('_rails_lite_app')
      @data = JSON.parse(req.cookies['_rails_lite_app'])
    end
  end

  def [](key)
    @data[key]
  end

  def []=(key, val)
    @data[key] = val
    @modified = true
  end

  def modified?
    modified
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
    res.set_cookie('_rails_lite_app', path: '/', value: JSON.generate(@data)) if modified?
  end
end
