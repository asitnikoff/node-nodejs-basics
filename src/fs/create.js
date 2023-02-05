import fs from "fs";

const create = async () => {
  const file = "./src/fs/files/fresh.txt";
  if (fs.existsSync(file)) {
    throw Error("FS operation failed");
  }
  fs.writeFile("./src/fs/files/fresh.txt", "I am fresh and young", (err) => {
    if (err) throw err;
    console.log("Saved!");
  });
};

await create();
