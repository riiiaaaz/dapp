import algosdk from "algosdk";

const algoToken="a".repeat(64);
const server :string="http://localhost";
const port :string="4001"
const mnemonic:string="alert correct local caution intact leopard swim delay crumble hotel horn supply pulse dinosaur explain stand bag goddess rookie amount figure glad genius absorb laptop"

export function getClient():algosdk.Algodv2{
    let client=new algosdk.Algodv2(algoToken,server,port);
    return client;
}

export function getAccount():algosdk.Account{
    let acc= algosdk.mnemonicToSecretKey(mnemonic);
    return acc;
}