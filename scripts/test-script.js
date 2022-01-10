const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    const signers = await hre.ethers.getSigners();

    console.log("Signers: ", signers.length);
    console.log("Deployer: ", deployer);
    console.log("Account Balance: ", accountBalance);

    console.log("Estimate gas: ", await deployer.estimateGas());
    console.log("Resolved name of tchag.eth: ", await deployer.resolveName("tchag.eth"));

}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();