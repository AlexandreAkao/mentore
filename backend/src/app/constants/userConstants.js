const GOALS = [
  'idea validation',
  'business mentoring',
  'reference for business',
  'personal knowledge',
  'technical knowledge;'
]

const LEVELS = [-3, -2, -1, 0, 1, 2, 3];

const UserProfile = {
  goal: {
    type: String,
    required: true,
    enum: GOALS
  },
  leadership: {
    type: Number,
    required: true
  },
  oratory: {
    type: Number,
    required: true
  },
  teamWork: {
    type: Number,
    required: true
  },
  tecKnowledge: {
    type: Number,
    required: true
  },
  marketingKnowledge: {
    type: Number,
    required: true
  },
  designKnowledge: {
    type: Number,
    required: true
  },
  financeKnowledge: {
    type: Number,
    required: true,
  },
};

module.exports = { GOALS, UserProfile, LEVELS };