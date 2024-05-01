import algosdk from "algosdk";

const algoToken="a".repeat(64);
const server :string="http://localhost";
const port :string="4001"
const mnemonic:string="theme cause undo mean jump wish feel off legend wine ladder blind oppose manage indoor squeeze typical clerk snap enemy pudding cactus bus absent glimpse"

export function getClient():algosdk.Algodv2{
    let client=new algosdk.Algodv2(algoToken,server,port);
    return client;
}

export function getAccount():algosdk.Account{
    let acc= algosdk.mnemonicToSecretKey(mnemonic);
    return acc;
}