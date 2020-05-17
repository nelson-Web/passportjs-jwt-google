import passport from "passport";
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const User = require("../models/user").default;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Estrategia para Registrarse

passport.use("sign-in-google",new GoogleStrategy(
    {
      clientID:"918qqqsssss4",
      clientSecret: "Q-5anINsQFJ8",
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findById(profile.id);
      if (user) {
        done(null, false);
      } else {
        let newUser = new User();
            newUser._id = profile.id
            newUser.nombre = profile.displayName
            newUser.avatar = profile.photos[0].value
           await newUser.save() //guardamos en la base de datos
        done(null, profile); //guardamos en la base de datos
      }
    }
  )
);




// Estrategia para Iniciar Sesion


passport.use("sign-up-google",new GoogleStrategy(
  {
    clientID:"9184414362222adsfefr4e",
    clientSecret: "Q-5anf3f3f3fd3w3edwedsde3wdsw3sdwsw3sde",
    callbackURL: "http://localhost:4000/auth/google/signup",
  },
  async (accessToken, refreshToken, profile, done) => {
    const user = await User.findById(profile.id);// si existe en la base de datos
                                                 //  puede iniciar sesion
    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
    
  }
)
);
