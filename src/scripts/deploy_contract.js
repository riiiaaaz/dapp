
import dotenv from "dotenv";
import algosdk from "algosdk";
import { open, readFile } from "node:fs/promises";
dotenv.config();

const baseServer = process.env.ALGOD_SERVER || "https://testnet-api.algonode.cloud";
const algodToken = process.env.ALGOD_TOKEN || "";
const algodClient = new algosdk.Algodv2(algodToken, baseServer, '');


const MNEMONIC = process.env.MNEMONIC || "eagle trip attract arctic window hammer flock naive daughter hawk exile canyon index pact slim sadness smoke involve stuff baby industry calm master absent swarm";
let myAccount = algosdk.mnemonicToSecretKey(MNEMONIC);
let sender = myAccount.addr;

async function compileProgram(client, tealSource) {
    let encoder = new TextEncoder();
    let programBytes = encoder.encode(tealSource);
    let compileResponse = await client.compile(programBytes).do();
    let compiledBytes = new Uint8Array(Buffer.from(compileResponse.result, "base64"));
    return compiledBytes;
}

(async () => {
    try {
        const localInts = 0;
        const localBytes = 0;
        const globalInts = 2;
        const globalBytes = 0;
        const approvalProgramFile = await open("./contracts/artifacts/smart_contract_approval.teal");
        const clearProgramFile = await open("./contracts/artifacts/smart_contract_clear.teal");

        const approvalProgram = await readFile(approvalProgramFile, { encoding: 'utf-8' });
        const clearProgram = await readFile(clearProgramFile, { encoding: 'utf-8' });

        const approvalProgramBinary = await compileProgram(algodClient, approvalProgram);
        const clearProgramBinary = await compileProgram(algodClient, clearProgram);

        let params = await algodClient.getTransactionParams().do();
        const onComplete = algosdk.OnApplicationComplete.NoOpOC;

        console.log("Deploying Application. . . . ");
        let txn = algosdk.makeApplicationCreateTxn(
            sender,
            params,
            onComplete,
            approvalProgramBinary,
            clearProgramBinary,
            localInts,
            localBytes,
            globalInts,
            globalBytes
        );
        let txId = txn.txID().toString();
        console.log("Signed transaction with txID: ", txId);

        let signedTxn = algosdk.signTransaction(txn, myAccount.sk);
        await algodClient.sendRawTransaction(signedTxn.blob).do();
        await algosdk.waitForConfirmation(algodClient, txId, 2);

        let transactionResponse = await algodClient.pendingTransactionInformation(txId).do();
        let appId = transactionResponse["application-index"];
        console.log("Created new app with app-id: ", appId);
    } catch (err) {
        console.error("Failed to deploy!", err);
        process.exit(1);
    }
})();
