import { suma } from "../src/app.js";

test("La función suma debe sumar correctamente", () => {
  expect(suma(2, 3)).toBe(6);
});
