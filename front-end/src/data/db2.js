import * as Realm from 'realm-web';
var Data = [];

const getData = async () => {
    const app = new Realm.App({ id: "products-fkscd" });
    const credentials = Realm.Credentials.anonymous();
    try {
        const user = await app.logIn(credentials);
        const allData = await user.functions.getAllData();
        Data = [...allData];
        console.log("Data is: ", Data);
    } catch (err) {
        console.error("Failed to log in", err);
    }
}
getData();
// console.log("Data", Data);

export default Data;