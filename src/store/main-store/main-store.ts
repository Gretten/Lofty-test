import { Module } from 'vuex';
import RestService from '@/services/rest';
import * as types from '@/store/main-store/type-main';
import { GoodsStoreInt } from "@/model/goods-store.model";
import { dummyJSON } from "@/services/dummy-data/data";

const restService = new RestService();

const goodsStore: Module<GoodsStoreInt, object> = {
    state: {
        goods: [],
    },
    getters: {
        [types.GET_DATA]: state => state.goods
    },
    mutations: {
        [types.SET_DATA](state, payload) {
            state.goods = payload;
        },
    },
    actions: {
        [types.FETCH_DATA]({ commit }) {
            return commit(types.SET_DATA, dummyJSON);
        },
    },
};

export default goodsStore;
