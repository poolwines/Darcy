import Cookies from 'cookies'


export default (req, res) => {
  const cookies = new Cookies(req, res)
  cookies.set('email')
  cookies.set('token')
  cookies.set('tokenAdmin')
  cookies.set('clientEmail')
  cookies.set('adminEmail')
    res.writeHead(302, {'Location': '/'})
    res.end()
}