import { connect } from "mongoose";

export function conectarDatabase() {
  try {
    connect("mongodb://localhost:27017/googlepassport", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('conectado a MongoDB');
    
  } catch (error) {
    console.log(error);
  }
}

