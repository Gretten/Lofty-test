<template>
  <div>
    <v-card
      max-width="500"
    >
      <v-card-title>
        <span class="headline">Новый товар </span>
      </v-card-title>

      <v-card-text>
        <v-container>

          <v-form
              v-model="isValid"
          >
            <v-text-field
                v-model="initialObject.artnumber"
                label="Артикул"
                :rules="nonEmptyRules"
            ></v-text-field>
            <v-text-field
                v-model="initialObject.name"
                label="Название"
                :rules="nonEmptyRules"
            ></v-text-field>
            <v-text-field
                v-model="initialObject.brand"
                label="Бренд"
                :rules="nonEmptyRules"
            ></v-text-field>
            <v-text-field
                v-model="initialObject.weight"
                label="Вес"
                :rules="nonEmptyRules"
            ></v-text-field>
            <v-text-field
                v-model="initialObject.quantity"
                label="Количество"
                :rules="nonEmptyRules"
            ></v-text-field>
            <v-text-field
                v-model="initialObject.price"
                label="Цена"
                :rules="nonEmptyRules"
            ></v-text-field>

            <v-btn
                class="mr-4"
                @click="submit"
                :disabled="!isValid"
            >
              Создать
            </v-btn>
            <v-btn @click="clear">
              Очистить
            </v-btn>
          </v-form>

        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" src="./new-item-page.view.ts"></script>