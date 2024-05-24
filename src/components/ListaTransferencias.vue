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
  transferencias = [
    // Exemplo de transferências para exibição
    { contaOrigem: '1234567890', contaDestino: '0987654321', valor: 1500, dataTransferencia: '2024-05-30' }
  ];

  headers = [
    { text: 'Conta de Origem', value: 'contaOrigem' },
    { text: 'Conta de Destino', value: 'contaDestino' },
    { text: 'Valor', value: 'valor' },
    { text: 'Data de Transferência', value: 'dataTransferencia' }
  ];
}
</script>

<style scoped>
/* Seus estilos específicos para este componente aqui */
</style>
