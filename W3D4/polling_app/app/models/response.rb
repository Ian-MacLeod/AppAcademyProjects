# == Schema Information
#
# Table name: responses
#
#  id               :integer          not null, primary key
#  user_id          :integer          not null
#  answer_choice_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Response < ApplicationRecord
  validates :user_id, presence: true
  validates :answer_choice_id, presence: true

  validate :user_cannot_respond_more_than_once
  validate :user_cannot_respond_to_own_poll


  belongs_to :answer_choice,
             class_name: :AnswerChoice,
             primary_key: :id,
             foreign_key: :answer_choice_id

  belongs_to :respondent,
             class_name: :User,
             primary_key: :id,
             foreign_key: :user_id

  has_one :question,
          through: :answer_choice,
          source: :question

  def sibling_responses
    self.question.responses.where.not(id: self.id)
  end

  def respondent_already_answered?
    siblings = sibling_responses
    siblings.pluck(:user_id).include? self.user_id
  end

  def user_cannot_respond_more_than_once
    if respondent_already_answered?
      errors[:user_id] << "can't respond twice"
    end
  end

  def respondent_is_author?
    self.user_id == self.question.author.id
  end

  def user_cannot_respond_to_own_poll
    if respondent_is_author?
      errors[:user_id] << "can't respond to authored poll"
    end
  end
end
