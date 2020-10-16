import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    components: {

    }
})
export default class CommonTable extends Vue {
    @Prop() public headers!: [];

    get dummyData(): [] {
        return [];
    }

}