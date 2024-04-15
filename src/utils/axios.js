import axios from "axios";

import pinia from '@/stores/store'
// import { storeToRefs } from "pinia";
// import { useloadingStore } from "@/stores/loading";
// const store = useloadingStore(pinia);
// // const loadingStatus = store.loadingStatus;
// const { loadingStatus } = storeToRefs(store);


import { storeToRefs } from "pinia";
import { useloadingStore } from "@/stores/loading";
const store = useloadingStore(pinia);
// const { loadingStatus } = storeToRefs(store);




// import { useSystemDataStore } from "@/stores/index";
// // SystemDataStore 可以在本文件中随意使用
// const SystemDataStore = useSystemDataStore(pinia);
// SystemDataStore.apiDomain 
//  useSystemDataStore().apiDomain 


export function axiosPost(url, senddata, callback) {
    store.$patch({
        loadingStatus: true
    })
    const { loadingStatus } = storeToRefs(store);
    console.log(loadingStatus, 'loading')
    // loadingStatus=true;
    // console.log(loadingStatus)
    setTimeout(() => {
        axios
            // .post(`http://${url}/api`, { params: { status: urlParams } })
            .post(url, senddata)
            .then((res) => {
                //獲取伺服器的回傳資料
                store.$patch({
                    loadingStatus: false
                })
                callback(res);
            })
            .catch((error) => {
                console.log(error, "失敗");
            });
    }, 3000);
}


