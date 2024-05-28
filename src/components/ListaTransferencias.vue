<template>
  <v-container>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ListaTransferencias extends Vue {
  transferencias = [];

  headers = [
    { text: 'Conta de Origem', value: 'contaOrigem' },
    { text: 'Conta de Destino', value: 'contaDestino' },
    { text: 'Valor', value: 'valor' },
    { text: 'Data de Transferência', value: 'dataTransferencia' }
  ];

  async mounted() {
    await this.carregarTransferencias();
  }

  async carregarTransferencias() {
    try {
      const response = await fetch('http://localhost:8080/api/transferencias');
      if (!response.ok) {
        throw new Error('Erro ao carregar transferências');
      }
      this.transferencias = await response.json();
    } catch (error) {
      console.error('Erro ao carregar transferências:', error);
    }
  }
}
</script>

<style scoped>
/*  */
</style>
