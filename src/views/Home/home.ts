import { Component, Vue } from 'vue-property-decorator';
import CommonTable from "@/components/CommonTable/CommonTable.vue";
import {Action, Getter} from "vuex-class";
import { FETCH_DATA, GET_DATA } from "@/store/main-store/type-main";
import { headers } from "@/config/headers";
import { dummyJSON } from "@/services/dummy-data/data";


@Component({
    components: {
        CommonTable,
    }
})
export default class Home extends Vue {
    @Action(FETCH_DATA)
    fetchData!: () => void;

    @Getter(GET_DATA)
    getData!: Array<any>;

    headers = headers.commonHeaders;

    get fetchedData() {
        return dummyJSON;
    }

    created() {
        console.log(dummyJSON)
    }

}
