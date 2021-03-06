# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true

  has_many :submitted_urls,
           class_name: :ShortenedUrl,
           primary_key: :id,
           foreign_key: :creator_id

  has_many :url_visits,
           class_name: :Visit,
           primary_key: :id,
           foreign_key: :visitor_id

  has_many :visited_urls,
           through: :url_visits,
           source: :sites

  has_many :unique_visited_urls,
           -> { distinct },
           through: :url_visits,
           source: :sites
end
