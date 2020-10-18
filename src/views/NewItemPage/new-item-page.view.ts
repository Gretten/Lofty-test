import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from "vuex-class";
import { FETCH_DATA, GET_DATA } from "@/store/main-store/type-main";


@Component
export default class NewItemPage extends Vue {
    @Action(FETCH_DATA)
    fetchData!: () => void;

    @Getter(GET_DATA)
    getData!: Array<any>;

    isValid = false;

    initialObject = {
        artnumber: '',
        name: '',
        brand: '',
        weight: '',
        quantity: '',
        price: '',
        stock: '',
    }

    nonEmptyRules = [
        (v: any) => (v && v.length <= 10) || 'Это поле не может быть пустым',
    ];

    submit () {
        console.log(this.initialObject)
        alert('Товар ' + this.initialObject.name + ' создан!')
    }

    clear () {
        this.initialObject.artnumber = '',
        this.initialObject.name = '',
        this.initialObject.brand = '',
        this.initialObject.weight = '',
        this.initialObject.quantity = '',
        this.initialObject.price = '',
        this.initialObject.stock = ''
    }

    mounted() {
        this.fetchData();
    }

}
