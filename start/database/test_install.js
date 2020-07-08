// https://github.com/orbitdb/orbit-db#module-with-ipfs-instance
// https://github.com/orbitdb/orbit-db/blob/master/API.md

// Make a React version while you refer to it.
// https://medium.com/@rossbulat/orbitdb-deploying-the-distributed-ipfs-database-with-react-79afa1a7fabb

const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

// For js-ipfs >= 0.38

// Create IPFS instance
const initIPFSInstance = async () => {
  return await IPFS.create({ repo: "./js-ipfs" });
};

initIPFSInstance().then(async ipfs => {

  const orbitdb = await OrbitDB.createInstance(ipfs);

  // You can give write control with it.
  // https://github.com/orbitdb/orbit-db/blob/master/API.md#orbitdbcreatename-type-options
  const publicKey = orbitdb.identity.id;
  console.log(`\nYour public key is ${publicKey}\n`);

  console.log("Create a database.\n");
  const db = await orbitdb.log("hello");
  await db.load();

  // /orbitdb/<hash>/<databasename>
  const address = db.address.toString();
  console.log(`The address of the orbitdb you want to use is ${address}\n`);

  // Update UI with this after you make a React example?
  // https://github.com/orbitdb/orbit-db/blob/master/GUIDE.md#replicating-a-database
  console.log("Listen for updates from peers.\n");
  db.events.on("replicated", address => {
    console.log(db.iterator({ limit: -1 }).collect());
  });

  console.log("Write a data.\n");
  const hash = await db.add("world");
  console.log(`The hash of world is ${hash}.\n`);

  // https://github.com/orbitdb/orbit-db/blob/master/API.md#addevent
  console.log("Read the database.\n");
  const result = db.iterator({ limit: -1 }).collect();
  console.log(JSON.stringify(result, null, 2));
});

