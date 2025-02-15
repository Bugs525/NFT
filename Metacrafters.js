const NFTs = [];

function mintNFT(_name, _eyeColor, _shirtType, _bling) {
    const NFT = {
        id: NFTs.length + 1, // Unique ID based on array length
        name: _name,
        eyeColor: _eyeColor,
        shirtType: _shirtType,
        bling: _bling
    };
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log(`\nID: \t\t${NFTs[i].id}`);
        console.log(`Name: \t\t${NFTs[i].name}`);
        console.log(`Eye Color: \t${NFTs[i].eyeColor}`);
        console.log(`Shirt Type: \t${NFTs[i].shirtType}`);
        console.log(`Bling: \t\t${NFTs[i].bling}`);
    }
}

function getTotalSupply() {
    console.log(`\nTotal NFTs Minted: ${NFTs.length}`);
}

// Mint some NFTs
mintNFT("Bob", "Blue", "Hoodie", "Gold Chain");
mintNFT("Sue", "Blue", "Hoodie", "Gold Chain");
mintNFT("Tim", "Blue", "Hoodie", "Gold Chain");
mintNFT("John", "Blue", "Hoodie", "Gold Chain");

// List NFTs and total supply
listNFTs();
getTotalSupply();
