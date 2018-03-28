# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  ord        :integer          not null
#  album_id   :integer          not null
#  lyrics     :string
#  is_bonus   :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  validates :title, :ord, :album_id, presence: true
  validates_numericality_of :ord, only_integer: true

  belongs_to :album
  has_many :notes, dependent: :destroy

  has_one :band,
          through: :album,
          source: :band
end
