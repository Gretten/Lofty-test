import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class EditModal extends Vue {
    @Prop() public formTitle!: string;

    @Prop() public editedItem!: object;

    @Prop() public editedIndex!: number;

    @Prop() public save?: null;

    @Prop() public close?: null;

    @Prop() dialog!: boolean;

}
