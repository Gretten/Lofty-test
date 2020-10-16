import { Component, Vue } from 'vue-property-decorator';
import CommonTable from "@/components/CommonTable/CommonTable.vue";

@Component({
    components: {
        CommonTable,
    }
})
export default class Home extends Vue {

    headers = [
        {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
        },
        {
            text: 'Calories',
            value: 'calories'
        },
        {
            text: 'Fat (g)',
            value: 'fat'
        },
        {
            text: 'Carbs (g)',
            value: 'carbs'
        },
        {
            text: 'Protein (g)',
            value: 'protein'
        },
        {
            text: 'Actions',
            value: 'actions',
            sortable: false,
        },
    ];

    created() {}

}
