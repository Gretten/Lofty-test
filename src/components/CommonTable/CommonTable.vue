<template>
    <div>
      <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Поиск"
            single-line
            hide-details
        />
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          sort-by="calories"
          class="elevation-1"
          :custom-filter="searchNamesOnly"
      >
        <template #item.name="{ item }">
          <span :inner-html.prop="item.name | highlight(search)"></span>
        </template>
        <template v-slot:item.weight="{ item }">
          <span>
            {{ item.weight | breakUpToLocale }}
          </span>
        </template>
        <template v-slot:item.quantity="{ item }">
          <span>
            {{ item.quantity | breakUpToLocale }}
          </span>
        </template>
        <template v-slot:item.price="{ item }">
          <span>
            {{ item.price | breakUpToLocale }}
          </span>
        </template>
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <router-link to="/new">
              <v-btn
                  color="success"
                  dark
                  class="mb-2"
              ><v-icon left>
                mdi-arrow-down
              </v-icon>
                Создать новый товар
              </v-btn>
            </router-link>
            <EditModal
                :formTitle="'Редактировать товар'"
                :editedItem="editedItem"
                :editedIndex="editedIndex"
                :save="save"
                :close="close"
                :dialog="dialog"
            />
            <v-dialog v-model="dialogDelete" max-width="300px">
              <v-card>
                <v-card-title class="headline">Точно удалить?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Отмена</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div>
</template>
<script lang="ts" src="./common-table-component.ts"></script>