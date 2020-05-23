const dependencies = {
  /**
   * Imaginary SaaS callback dependencies
   */
  saas: async () => true,
};

const handler = async (_0, _1, callback) => {
  const { saas } = dependencies;

  if (await saas()) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    });
  } else {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message: "SaaS request failed.",
      }),
    });
  }
};

module.exports = { dependencies, handler };
