class Note < ActiveRecord::Base
  validates :body, presence: true
  validates :user_id, presence: true
  validates :track_id, presence: true

  belongs_to :user
  belongs_to :track
end
