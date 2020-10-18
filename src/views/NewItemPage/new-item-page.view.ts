import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from "vuex-class";
import { FETCH_DATA, GET_DATA } from "@/store/main-store/type-main";

@Component
export default class NewItemPage extends Vue {
    @Action(FETCH_DATA)
    fetchData!: () => void;

    @Getter(GET_DATA)
    getData!: Array<any>;

    mounted() {
        this.fetchData();
    }

}
