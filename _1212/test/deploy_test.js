const { ethers } = require("hardhat");
const { expect, assert } = require("chai");
describe("SimpleStorage", () => {
  let simpleStorageFactory = null;
  let contract = null;
  before(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    contract = await simpleStorageFactory.deploy();
    // await contract.deployed();
  });

  it("Should start with a favorite number of 0", async () => {
    const currentVal = await contract.retrieve("georgayang");
    const expectedValue = "0";
    assert.equal(currentVal.toString(), expectedValue);
    // expect(currentVal.toString()).to.equal(expectedValue);
  });

  // it.only("Should update after we called addPerson", async () => {  // npx hardhat test --network localhost --grep '想看的那个it里的描述内容'
  it("Should update after we called addPerson", async () => {
    const transactionResponse = await contract.addPerson("georgayang", 666);
    await transactionResponse.wait(1);
    console.log("加完第一个人之后count", (await contract.count()).toString());
    const currentVal = await contract.retrieve("georgayang");
    assert.equal(currentVal.toString(), "666");
  });

  it("Should contains two person", async () => {
    const transactionResponse = await contract.addPerson("meimeichen", 888);
    await transactionResponse.wait(1);
    const currentVal = await contract.retrieve("meimeichen");
    console.log("加完第二个人之后count", (await contract.count()).toString());
    assert.equal(currentVal.toString(), "888");
  });

  it("Should return the current size of the mapping which should be 2", async () => {
    const ret = await contract.count();
    assert.equal(ret.toString(), "2");
  });

  it("Should update the favorite number of georgayang, but count remains to 2", async () => {
    const transactionResponse = await contract.addPerson("georgayang", 999);
    await transactionResponse.wait(1);
    const currentVal = await contract.retrieve("georgayang");
    assert.equal(currentVal.toString(), "999");
    const ret = await contract.count();
    assert.equal(ret.toString(), "2");
  });

  // describe("something", () => {});
});
