const { dependencies, handler } = require("./hello.js");
const test = require("ava");

test("should success", async (t) => {
  await handler({}, {}, (_0, res) => {
    t.is(res.statusCode, 200);
  });
});

test("should fail", async (t) => {
  // dependencies injection
  dependencies.saas = () => false;
  await handler({}, {}, (_0, res) => {
    t.is(res.statusCode, 500);
  });
});
