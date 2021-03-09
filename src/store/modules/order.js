const state = {
    all: []
}

const mutations = {
    setOrderList(state, list) {
        state.all = list;
    },
    updateOrderList(state,newList){
        let arr=[...state.all];
        newList.map(item=>{
            let findIndex = state.all.findIndex(order=>order.id===item.id);
            // console.log(findIndex,newList.length)
            if(findIndex!=-1){
                arr.splice(findIndex,1,item);
            } else{
                arr.unshift(item);
                // state.all.unshift(item);
            }
        });
        state.all=arr;
    }
}

const actions = {
    receiveOrderList({ commit }, list) {
        // do something async
        // console.log(list)
        commit('updateOrderList',list);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
