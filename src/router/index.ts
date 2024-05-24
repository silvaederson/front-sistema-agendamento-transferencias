import Vue from 'vue';
import Router from 'vue-router';
import AgendarTransferencia from '../components/AgendarTransferencia.vue';
import ListaTransferencias from '../components/ListaTransferencias.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: AgendarTransferencia },
    { path: '/transferencias', component: ListaTransferencias }
  ]
});
