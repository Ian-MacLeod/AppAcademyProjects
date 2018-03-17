# == Schema Information
#
# Table name: answer_choices
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  choice      :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class AnswerChoice < ApplicationRecord
  validates :question_id, presence: true
  validates :choice, presence: true

  belongs_to :question,
             class_name: :Question,
             primary_key: :id,
             foreign_key: :question_id
  has_many :responses,
           class_name: :Response,
           primary_key: :id,
           foreign_key: :answer_choice_id

  has_one :author,
          through: :question,
          source: :author

end
