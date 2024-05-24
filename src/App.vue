<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Agendador de Transferências</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <div>
        <v-text-field v-model="contaOrigem" label="Conta de Origem"></v-text-field>
        <v-text-field v-model="contaDestino" label="Conta de Destino"></v-text-field>
        <v-text-field v-model="valor" label="Valor"></v-text-field>
        <v-text-field v-model="dataTransferencia" label="Data de Transferência"></v-text-field>
        <v-btn @click="agendarTransferencia">Agendar</v-btn>
      </div>
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
      contaOrigem: '',
      contaDestino: '',
      valor: '',
      dataTransferencia: ''
    };
  },
  methods: {
    agendarTransferencia() {
      const requestBody = {
        contaOrigem: this.contaOrigem,
        contaDestino: this.contaDestino,
        valor: parseFloat(this.valor),
        dataTransferencia: this.dataTransferencia
      };

      fetch('http://localhost:8080/api/transferencias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
          return response.json();
        })
        .then(data => {
          console.log('Transferência agendada com sucesso:', data);
          // Você pode adicionar feedback para o usuário aqui se desejar
        })
        .catch(error => {
          console.error('Erro ao agendar transferência:', error);
          // Você pode adicionar feedback para o usuário aqui se desejar
        });
    }
  }
};
</script>

<style>
/* Seus estilos globais aqui */
</style>
