import { Module } from 'vuex';
import RestService from '@/services/rest';
import * as types from '@/store/main-store/type-main';
import { GoodsStoreInt } from "@/model/goods-store.model";

const restService = new RestService();

const goodsStore: Module<GoodsStoreInt, object> = {
    state: {
        goods: [],
    },
    getters: {
        [types.GET_DATA]: state => state.goods
    },
    mutations: {
        [types.SET_DATA](state, goods) {
            state.goods = goods;
        },
    },
    actions: {
        [types.FETCH_DATA]({ commit }) {
            return restService.retrieve()
                .then(res => {
                    commit(types.SET_DATA, res);
                    return res;
                });
        },
    },
};

export default goodsStore;
