const Yup = require('yup');

const User = require('../models/User');
const { GOALS, LEVELS } = require('../constants/userConstants');

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      phone: Yup.string().required(),
      userProfile: Yup.object().shape({
        goal: Yup.string().oneOf(GOALS).required(),
        leadership: Yup.number().oneOf(LEVELS).required(),
        oratory: Yup.number().oneOf(LEVELS).required(),
        teamWork: Yup.number().oneOf(LEVELS).required(),
        tecKnowledge: Yup.number().oneOf(LEVELS).required(),
        marketingKnowledge: Yup.number().oneOf(LEVELS).required(),
        designKnowledge: Yup.number().oneOf(LEVELS).required(),
        financeKnowledge: Yup.number().oneOf(LEVELS).required(),
      })
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    const user = await User.create(req.body);

    return res.status(201).json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      username: Yup.string(),
      email: Yup.string().email(),
      phone: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findById(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.compareHash(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const updatedUser = await User.findByIdAndUpdate(req.userId, req.body, { new: true });

    return res.json(updatedUser);
  }
}

module.exports = UserController;