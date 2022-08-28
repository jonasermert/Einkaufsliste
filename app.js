"use strict"

const fs = require("fs").promises;

function writeFile() {
    try {
        const TITLE = "Name, Anzahl, Preis"

        const WRITE = () => {
            fs.writeFile(liste.txt, TITLE, { encoding: "utf-8" }).then(() => {
                console.log("Titel gesetzt");
            });
        }
        WRITE();

    } catch (error) {
        console.log("Du hast die Einkaufsliste vergessen" + error.message);
    }

}

function addItem(name, anzahl, preis) {
    try {
        const ITEM = '\n${name}, ${anzahl}, ${preis}';

        const WRITE = () => {
            fs.writeFile("liste.txt", ITEM, { flag: "a", encoding: "utf8" }).then((){
                console.log("Item hinzugefügt");
            })
            WRITE();
        }
    } catch (error) {
        console.log("Diesen Artikel kannst du nicht aufschreiben", error.message);
    }
}

(async function () {
    await writeFile();
    await addItem("Apfel", 8, "3,00€");
    await addItem("Schokolade", 2, "1,80");
})