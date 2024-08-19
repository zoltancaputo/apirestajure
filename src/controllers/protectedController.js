exports.getprotectedData = (req, res) => {
    res.send(`Hello, ${req.user.name}. You have accessed a protected`)
}