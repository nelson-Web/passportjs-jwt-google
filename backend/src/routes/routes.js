import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
const router = Router()

//rutas para Google

//ruta para Registrarse

router.get("/auth/google/callback",passport.authenticate("sign-in-google", {scope: ['https://www.googleapis.com/auth/plus.login'], session: false }),
  function (req, res) {
    if (req.user) {
      const token = jwt.sign({id: req.user._id}, 'top_secret', {
        expiresIn: 60 * 60 * 24 // equivalente a 24 horas
      })
      res.cookie('token', token)        
      res.redirect('http://localhost:3000/jugadores')

    } else {
      res.redirect('http://localhost:3000/registrarse')
    }
  }
);


//rutas para Iniciar Sesion
router.get(
  "/auth/google/signup",
  passport.authenticate("sign-up-google", {scope: ['https://www.googleapis.com/auth/plus.login'], session: false }),
  function (req, res) {
    if (req.user) { 
      const token = jwt.sign({id: req.user._id}, 'top_secret', {
        expiresIn: 60 * 60 * 24 // equivalente a 24 horas
      })
      res.cookie('token', token)        
      res.redirect('http://localhost:3000/jugadores')
    } else {
      res.redirect('http://localhost:3000/iniciarsesion')
    } 
  }
);

export default router;