#!/usr/bin/env zx
let [lagoonSite] = argv["_"];
const lagoonEnvironment = argv["environment"] || argv["e"] || "main";

if (!lagoonSite) {
  lagoonSite = await question(
    `From which ${chalk.blue(
      "Lagoon production site"
    )} do you want to get a one time login? `
  );
  if (!lagoonSite) {
    console.error(chalk.red("You must provide a Lagoon site name!"));
    process.exit(1);
  }
}

let message = `Fetching one time login for Lagoon site ${chalk.blue(lagoonSite)}`;
if (lagoonEnvironment !== "main") {
  message += ` on environment ${chalk.blue(lagoonEnvironment)}`;
}

await spinner(
  `${message}...`,
  async () => {
    try {
      const output = $`lagoon -p ${lagoonSite} -e ${lagoonEnvironment} ssh --command "drush uli"`;
      for await (const chunk of output.stdout) {
        echo(chunk);
      }
    } catch (err) {
      console.error(
        chalk.red(
          `An error occurred while trying to fetch one time login for Lagoon site ${lagoonSite}. Please try again.`
        )
      );
      process.exit(1);
    }
  }
);
