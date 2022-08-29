import data from "../components/Data/Data.json";

let dataClone = data.slice();
let resultFilterGoods = [];

function filterData(key) {
    const keyArr = key;
    if(keyArr.length > 0) {
        for (const i in keyArr) {
            resultFilterGoods[i] = dataClone.find( argument => argument.article === keyArr[i]);
        }
    }
    return resultFilterGoods;
}

export {filterData};