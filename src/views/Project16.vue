<script setup>
import { ref } from 'vue';
import RebillyInstruments from '@rebilly/instruments';

const customerId = "test-customer";
const inputValue = ref('100');

(async () => {
  const response = await fetch("https://vercel-fkt1.vercel.app/payout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({currency: "USD", amount: 100}),
  });
  const {token, payoutRequestId} = await response.json();

  // Mount Rebilly Instruments
  RebillyInstruments.mount({
    apiMode: "sandbox",
    payout: {
      payoutRequestId,
    },
    jwt: token,
    theme: {
      colorPrimary: '#5f8667', // Brand color
      colorText: '#fff',
      colorDanger: '#cd5c5c',
      colorBackground: '#484343', // Website background color
      buttonColorText: '#ffffff',
      fontFamily: 'Trebuchet MS, sans-serif', // Website font family
    },
  });


})();

async function swtichToUSD() {
  const response = await fetch("https://vercel-fkt1.vercel.app/payout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({currency: "USD", amount: inputValue.value}),
  });
  const {token, payoutRequestId} = await response.json();

  RebillyInstruments.update({
    payout: {
      payoutRequestId,
    },
    jwt: token,
  });
}

async function swtichToCAD() {
  RebillyInstruments.destroy();
  const response = await fetch("https://vercel-fkt1.vercel.app/payout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({currency: "CAD", amount: inputValue.value}),
  });
  const {token, payoutRequestId} = await response.json();

  RebillyInstruments.mount({
    apiMode: "sandbox",
    payout: {
      payoutRequestId,
    },
    jwt: token,
    theme: {
      colorPrimary: '#5f8667', // Brand color
      colorText: '#fff',
      colorDanger: '#cd5c5c',
      colorBackground: '#484343', // Website background color
      buttonColorText: '#ffffff',
      fontFamily: 'Trebuchet MS, sans-serif', // Website font family
    },
  });
}

</script>

<template>
  <h1>Request payout (USD and CAD)</h1>
  <img src="/src/assets/logo.jfif" alt="">
  <div style="padding: 40px 0 20px 0">
    <input type="text" v-model="inputValue">
    <button style="margin-left: 10px; margin-right: 10px;" @click="swtichToUSD()">Payout in USD</button>
    <button @click="swtichToCAD()">Payout in CAD</button>
  </div>
  <div class="container2">
    <div class="form-wrapper">
      <section class="rebilly-instruments-summary"></section>
      <section class="rebilly-instruments"></section>
    </div>
  </div>
</template>
