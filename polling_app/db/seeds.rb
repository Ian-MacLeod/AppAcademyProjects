# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Poll.destroy_all
Question.destroy_all
AnswerChoice.destroy_all
Response.destroy_all

user_names = ["Joe", "Mary", "Arnold", "Kathy", "Gerald"]

user_names.each do |user_name|
  User.create!(user_name: user_name)
end

poll_titles = ["Poll 1", "Banana", "123", "Lorem ipsum"]

poll_titles.each do |title|
  Poll.create!(title: title, author_id: User.all.pluck("id").sample)
end

Poll.all.each_with_index do |poll, idx|
  Question.create!(poll_id: poll.id, text: "#{idx} What is your name?")
  Question.create!(poll_id: poll.id, text: "#{idx} What is your story?")
  Question.create!(poll_id: poll.id, text: "#{idx} What is your favorite color?")
end

Question.all.each do |question|
  AnswerChoice.create!(question_id: question.id, choice: "Yes")
  AnswerChoice.create!(question_id: question.id, choice: "No")
  AnswerChoice.create!(question_id: question.id, choice: "Maybe so")
end

Question.all.each do |question|
  User.all.each do |user|
    Response.create!(user_id: user.id, answer_choice_id: question.answer_choices.sample.id)
  end
end
