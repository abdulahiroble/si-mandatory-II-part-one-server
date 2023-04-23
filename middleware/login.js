const authenticate = (req, res) => {
    req.session.isLoggedIn = { 'id': "test" }
    res.send("Logged in")
}

export default authenticate

// export const authenticate = (req, res) => {
//     req.session.isLoggedIn = { 'id': "test" }
//     res.send("Logged in")
// }
