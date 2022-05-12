import React, { useEffect, useState } from 'react'
import * as Realm from 'realm-web';

const GetAllData = () => {
    const [productData, setProductData] = useState([])
    const getData = async () => {
        const app = new Realm.App({ id: "products-fkscd" });
        const credentials = Realm.Credentials.anonymous();
        try {
            const user = await app.logIn(credentials);
            const allData = await user.functions.getAllData();
            setProductData(allData)
            // console.log("data", allData)
        } catch (err) {
            console.error("Failed to log in", err);
        }
    }

    useEffect(() => {
        getData();
    }, [])
    console.log("datafinal", productData)
    return <>
        {/* {data.map((item, index) => {
            return <li></li>
        })} */}
    </>
}

export default GetAllData;