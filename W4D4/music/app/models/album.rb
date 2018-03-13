# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  band_id    :integer          not null
#  title      :string           not null
#  year       :integer          not null
#  is_live    :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :band_id, :title, :year, null: false
  validates_numericality_of :year, only_integer: true

  belongs_to :band
  has_many :tracks, dependent: :destroy
end
