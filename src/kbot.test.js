const { BotSaludador } = require("./saludador");

describe("Saludador", () => {
    it("Saludar a Andres en idioma espanol en la manana", () => {
        let botSaludador = new BotSaludador();
        expect(botSaludador.saludoPersonalizadoESP("Andres", 20, "masculino", 8)).toEqual("<p>Buenos días, joven Andres</p>");
    });

    it("Saludar a Andres en idioma espanol en la noche", () => {
        let botSaludador = new BotSaludador();
        expect(botSaludador.saludoPersonalizadoESP("Andres", 20, "masculino", 20)).toEqual("<p>Buenas noches, joven Andres</p>");
    });
});

