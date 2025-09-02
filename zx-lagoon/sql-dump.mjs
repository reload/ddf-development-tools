#!/usr/bin/env zx
let [lagoonSite] = argv["_"];
const lagoonEnvironment = argv["environment"] || argv["e"] || "main";

if (!lagoonSite) {
  lagoonSite = await question(
    `From which ${chalk.blue(
      "Lagoon production site"
    )} do you want to download the SQL dump? `
  );
  if (!lagoonSite) {
    console.error(chalk.red("You must provide a Lagoon site name!"));
    process.exit(1);
  }
}
let message = `Fetching SQL dump for Lagoon site ${chalk.blue(lagoonSite)}`;
if (lagoonEnvironment !== "main") {
  message += ` on environment ${chalk.blue(lagoonEnvironment)}`;
}

await spinner(
  `${message}...`,
  async () => {
    $.quiet = true;
    try {
      await $`lagoon -p ${lagoonSite} -e ${lagoonEnvironment} ssh --command "drush sql:dump" > /tmp/${lagoonSite}.sql`;
    } catch (err) {
      console.error(chalk.red(`An error occurred while trying to download SQL dump for Lagoon site ${lagoonSite}. Please try again.`));
      process.exit(1);
    } finally {
      $.quiet = false;
    }
  }
);

console.log(
  `SQL dump for Lagoon site ${chalk.blue(
    lagoonSite
  )} has been saved to ${chalk.green(`/tmp/${lagoonSite}.sql`)}`
);
    