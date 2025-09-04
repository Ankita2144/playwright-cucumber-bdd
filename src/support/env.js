const ENV = {
  dev: {
    BASE_URL: "https://www.saucedemo.com",
    PASSWORD: "secret_sauce",
    USERS: {
      standard: "standard_user",
      locked: "locked_out_user",
      problem: "problem_user",
      glitch: "performance_glitch_user",
      error: "error_user",
      visual: "visual_user"
    },
    ProductPage_URL: "https://www.saucedemo.com/inventory.html"
  }
};

const currentEnv = process.env.TEST_ENV || "dev";
module.exports = ENV[currentEnv];
