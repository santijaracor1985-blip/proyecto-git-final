import { suma } from "../src/app.js";
import test from "node:test";
import assert from "node:assert";

test("La función suma debe sumar correctamente", () => {
  assert.equal(suma(2, 3), 5);
});
