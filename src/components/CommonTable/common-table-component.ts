import { Component, Vue, Prop } from 'vue-property-decorator';
import { highlight, breakUpToLocale } from "@/services/filetrs"

@Component({
    filters: {
        highlight,
        breakUpToLocale,
    }
})
export default class CommonTable extends Vue {
    @Prop() public headers!: [];

    @Prop() public items!: [];

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
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }


    editItem (item: any): void {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
    }

    deleteItem (item: any) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
    }

    deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
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
            Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
            this.desserts.push(this.editedItem)
        }
        this.close()
    }

}