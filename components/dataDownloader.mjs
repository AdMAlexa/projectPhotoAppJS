export default class dataDownloader {
    static async fetchData() {
        try {
            const resp = await fetch('data.json');
            const data = await resp.json();
            return data;
        }   catch(err) {
            console.log("Eroare", err);
        }
    }
} 