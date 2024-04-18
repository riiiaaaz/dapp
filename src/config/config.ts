import algosdk from "algosdk";

const algoToken="a".repeat(64);
const server :string="http://localhost";
const port :string="4001"
const mnemonic:string="truck birth reopen doctor capital pledge scan test family run motion defy unusual candy wrist motion afraid hurry idea bid trouble addict powder absorb example"

export function getClient():algosdk.Algodv2{
    let client=new algosdk.Algodv2(algoToken,server,port);
    return client;
}

export function getAccount():algosdk.Account{
    let acc= algosdk.mnemonicToSecretKey(mnemonic);
    return acc;
}