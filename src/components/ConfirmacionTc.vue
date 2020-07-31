
<template>
  <button class="botono" v-on:click="pagar()"> Pagar</button>
</template>

<script>
import axios from "axios";

export default {
	name: 'ConfirmacionTs',
	props: ['card'],
  data() {
    return {
			tituloCabecera: "Pago con tarjeta de crédito",
			estado: null
    };
  },
	created: function () {
	},
  methods: {
    async pagar(){
      // this.booleano = true;
				// var obj = [];
        const _this = this;
        await axios.post("http://localhost:3000/pagar", 
        {uuid: this.card.idPago},{headers: {
          'Content-Type': 'application/json'
        }})
        .then(function (response) {
          // obj.response = response.data.estado;
          // obj.responseId = response.data.idPagoPasarela;
					// obj.mensaje = response.data.mensaje;
					console.log('este es el response');
					console.log(response);
					console.log(response.data[0].estado);
					_this.estado = response.data[0].estado
        })
        .catch(function (error) {
          //console.log("fail");
          console.log(error);
        });
        
        // this.$router.push({name:'ResultadoTransaccion', params:{idRes:this.tipoResultado, card: this.card}})
        
    },
  },
};
</script>

