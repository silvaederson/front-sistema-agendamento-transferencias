<template>
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
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AgendarTransferencia extends Vue {
  transferencia = {
    contaOrigem: '',
    contaDestino: '',
    valor: 0,
    dataTransferencia: ''
  };

  agendarTransferencia() {
    // Lógica para agendar a transferência
    console.log(this.transferencia);
  }
}
</script>

<style scoped>
/* Seus estilos específicos para este componente aqui */
</style>
