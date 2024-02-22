export class BotSaludador {
  saludar(nombre) {
      return nombre;
  }

  saludoPersonalizadoESP(nombre, edad, genero, hora) {
      let saludo = "";
      if (hora < 12 && hora > 5) {
          saludo += "<p>Buenos días,";
      } else if (hora < 19 && hora > 11) {
          saludo += "<p>Buenas tardes,";
      } else {
          saludo += "<p>Buenas noches,";
      }
      if (edad > 30) {
          if (genero === "masculino") {
              saludo += " señor ";
          }
          if (genero === "femenino") {
              saludo += " señora ";
          }
      } else {
          if (genero === "masculino") {
              saludo += " joven ";
          }
          if (genero === "femenino") {
              saludo += " señorita ";
          }
      }
      saludo = saludo + nombre + "</p>";
      return saludo;
  }

  saludoPersonalizadoENG(nombre, edad, genero, hora) {
      let saludo = "";
      if (hora < 12 && hora > 5) {
          saludo += "<p>Good morning,";
      } else if (hora < 19 && hora > 11) {
          saludo += "<p>Good afternoon,";
      } else {
          saludo += "<p>Good night,";
      }
      if (edad > 30) {
          if (genero === "masculino") {
              saludo += " Mr. ";
          }
          if (genero === "femenino") {
              saludo += " Mrs. ";
          }
      } else {
          if (genero === "masculino") {
              saludo += " Mr. ";
          }
          if (genero === "femenino") {
              saludo += " Ms. ";
          }
      }
      saludo = saludo + nombre + "</p>";
      return saludo;
  }
}




export function saludar(nombre) {
  return nombre;
}

export function saludoPersonalizadoESP(nombre, edad, genero, hora) {
  let saludo = "";
  if(hora < 12 && hora > 5) {
    saludo += "<p>Buenos días,";
  }
  else if(hora < 19 && hora > 11){
    saludo += "<p>Buenas tardes,";
  }
  else {
    saludo += "<p>Buenas noches,";
  }
  if(edad > 30) {
    if(genero === "masculino") {
        saludo += " señor ";
      }
    if(genero === "femenino") {
        saludo += " señora ";
    }
  }
  else {
    if(genero === "masculino") {
        saludo += " joven ";
      }
    if(genero === "femenino") {
        saludo += " señorita ";
    }
  }
  saludo = saludo + nombre + "</p>";
  return saludo;
}

export function saludoPersonalizadoENG(nombre, edad, genero, hora) {
  let saludo = "";
  if(hora < 12 && hora > 5) {
    saludo += "<p>Good morning,";
  }
  else if(hora < 19 && hora > 11){
    saludo += "<p>Good afternoon,";
  }
  else {
    saludo += "<p>Good night,";
  }
  if(edad > 30) {
    if(genero === "masculino") {
        saludo += " Mr. ";
      }
    if(genero === "femenino") {
        saludo += " Mrs. ";
    }
  }
  else {
    if(genero === "masculino") {
        saludo += " Mr. ";
      }
    if(genero === "femenino") {
        saludo += " Ms. ";
    }
  }
  saludo = saludo + nombre + "</p>";
  return saludo;
}
