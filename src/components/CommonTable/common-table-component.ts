import { Component, Vue, Prop } from 'vue-property-decorator';
import { highlight, breakUpToLocale } from "@/services/filetrs"
import {Getter, Mutation} from "vuex-class";
import {GET_DATA, SET_DATA} from "@/store/main-store/type-main";

@Component({
    filters: {
        highlight,
        breakUpToLocale,
    }
})
export default class CommonTable extends Vue {
    @Prop() public headers!: [];

    @Prop() public items!: [];

    @Getter(GET_DATA)
    getData!: Array<any>;

    @Mutation(SET_DATA)
    setData!: (payload: any) => void;

    search = '';
    dialog = false
    dialogDelete = false

    desserts: any = []
    editedIndex = -1
    editedItem = {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
    }
    defaultItem = {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
    }

    get formTitle () {
        return this.editedIndex === -1 ? 'Добавить товар' : 'Редактировать товар'
    }

    get currentStore() {
        return this.getData;
    }

    editItem (item: any): void {
        this.editedIndex = this.currentStore.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
    }

    deleteItem (item: any) {
        this.editedIndex = this.currentStore.indexOf(item)
        this.dialogDelete = true

    }

    deleteItemConfirm () {
        const currentStore = this.currentStore;
        currentStore.splice(this.editedIndex, 1)
        this.setData(currentStore);
        this.closeDelete()
    }

    close () {
        this.dialog = false
        this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
        })
    }

    closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
        })
    }

    save () {
        if (this.editedIndex > -1) {
            const currentStore = this.currentStore;
            const startIndex = this.editedIndex;
            const elementsToEdit = 1;
            currentStore.splice(startIndex, elementsToEdit, this.editedItem);
            this.setData(currentStore);
        } else {
            this.setData(this.editedItem)
        }
        this.close()
    }

}