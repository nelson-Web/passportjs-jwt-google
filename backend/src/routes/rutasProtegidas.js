import { Router } from "express";
const router = Router();

router.get("/jugadores", (req, res, next) => {
  let jugadores = [
      { id: 1, nombre: "Lebron James" },
      { id: 2, nombre: "Kristaps Porziņģis" },
      { id: 3, nombre: "Nelson Hernandez" }
    ];

    res.json({"jugadores": jugadores})
  next();
});

export default router;
