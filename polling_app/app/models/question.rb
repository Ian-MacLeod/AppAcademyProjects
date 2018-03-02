# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  poll_id    :integer          not null
#  text       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  validates :poll_id, presence: true

  has_many :answer_choices,
           class_name: :AnswerChoice,
           primary_key: :id,
           foreign_key: :question_id

  belongs_to :poll,
             class_name: :Poll,
             primary_key: :id,
             foreign_key: :poll_id

  has_many :responses,
           through: :answer_choices,
           source: :responses

  has_one :author,
          through: :poll,
          source: :author

  def results_good
    AnswerChoice
      .select(:choice, 'COUNT(id)')
      .left_outer_joins(:responses)
      .where(question_id: self.id)
      .group(:id)
  end

  def results_medium
    answers = self.answer_choices.includes(:responses)
    answer_counts = {}
    answers.each do |answer|
      answer_counts[answer.choice] = answer.responses.length
    end
    answer_counts
  end

  def results_bad
    answers = self.answer_choices
    answer_counts = {}
    answers.each do |answer|
      answer_counts[answer.choice] = answer.responses.length
    end
    answer_counts
  end

end
