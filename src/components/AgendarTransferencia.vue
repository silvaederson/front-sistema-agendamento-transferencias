agendarTransferencia() {
  // Converte a data para o formato esperado pelo back-end
  this.transferencia.dataTransferencia = new Date(this.transferencia.dataTransferencia).toISOString().split('T')[0];

  // Faz a requisição POST para agendar a transferência
  fetch('http://localhost:8080/api/transferencias', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.transferencia)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  })
  .then(data => {
    console.log('Transferência agendada com sucesso:', data);
    this.carregarTransferencias();
  })
  .catch(error => {
    console.error('Erro ao agendar transferência:', error);
  });
}
