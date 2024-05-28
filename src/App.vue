<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Agendador de Transferências</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>Agendar Transferência</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="agendarTransferencia">
              <v-text-field v-model="transferencia.contaOrigem" label="Conta de Origem" required></v-text-field>
              <v-text-field v-model="transferencia.contaDestino" label="Conta de Destino" required></v-text-field>
              <v-text-field v-model="transferencia.valor" label="Valor" type="number" required></v-text-field>
              <v-text-field v-model="transferencia.dataTransferencia" label="Data de Transferência" type="date" required></v-text-field>
              <v-btn type="submit" color="primary">Agendar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-title>Lista de Transferências</v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="transferencias" class="elevation-1">
              <template v-slot:item.dataTransferencia="{ item }">
                {{ new Date(item.dataTransferencia).toLocaleDateString() }}
              </template>
              <template v-slot:item.valor="{ item }">
                {{ item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transferencia: {
        contaOrigem: '',
        contaDestino: '',
        valor: 0,
        dataTransferencia: ''
      },
      transferencias: [],
      headers: [
        { text: 'Conta de Origem', value: 'contaOrigem' },
        { text: 'Conta de Destino', value: 'contaDestino' },
        { text: 'Valor', value: 'valor' },
        { text: 'Data de Transferência', value: 'dataTransferencia' }
      ]
    };
  },
  methods: {
    agendarTransferencia() {
      console.log(this.transferencia);
    }
  }
};
</script>

<style scoped>
/* */
</style>
