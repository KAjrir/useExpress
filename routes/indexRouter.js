const { Router } = require('express');

const indexRouter = Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render('index', {messages})
});

indexRouter.get("/new", (req, res) => {
  res.render('form' )
});

indexRouter.post('/new', (req, res) => {
  const {message, user} = req.body

  if(!message || !user) return res.json({ message: 'Both fields must be filled out' })

  messages.push({ text: message, user: user, added: new Date() });


  res.redirect('/')
})


module.exports = indexRouter;