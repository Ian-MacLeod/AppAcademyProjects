# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :generate_session_token
  attr_reader :password

  has_many :notes

  def self.find_by_credentials(email, password)
    user = self.find_by_email(email)
    if user && user.is_password?(password)
      user
    end
  end

  def generate_session_token
    self.session_token ||= SecureRandom::base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom::base64(16)
    self.save!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end
end
