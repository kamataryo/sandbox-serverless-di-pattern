const { dependencies, handler } = require("./hello.js");
const test = require("ava");

test("should success without DI", async (t) => {
  await handler({}, {}, (_0, res) => {
    t.is(res.statusCode, 200);
  });
});

test("should fail with negative DI", async (t) => {
  dependencies.saas = () => false;
  await handler({}, {}, (_0, res) => {
    t.is(res.statusCode, 500);
  });
});
