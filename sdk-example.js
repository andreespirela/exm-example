const { Exm, ContractType } = require("@execution-machine/sdk");
const { readFileSync } = require("fs");

(async () => {
    const exm = new Exm({ token: "YOUR_TOKEN_GOES_HERE" });
    const appSourceCode = readFileSync('function.js');
    const deployApp = await exm.functions.deploy(appSourceCode, { users: [] }, ContractType.JS);
    console.log(`Successfully deployed with id ${deployApp.id}\n`);

    const writeToApp = await exm.functions.write(deployApp.id, { username: "Clark Kent"});
    console.log(`Successfully written to ${deployApp.id}. State:`);
    console.log(writeToApp.data.execution.state);
})();