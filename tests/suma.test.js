import { suma } from "../src/app.js";
import { test, strict as assert } from "node:test";

test("La función suma debe sumar correctamente", () => {
  assert.equal(suma(2, 3), 5);
});
