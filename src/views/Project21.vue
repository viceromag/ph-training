<script setup>
async function setup() {
  // Call the server endpoint to create a deposit request
  const response = await fetch('https://vercel-fkt1.vercel.app/create-deposit-request', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  const mountElement = document.querySelector('#deposit');
  const token = data.token;
  if (window.RebillyCashier) {
    RebillyCashier.renderDeposit({
      mountElement,
      token,
    });
  } else {
    console.error('RebillyCashier library not loaded');
  }
}
setup();

</script>

<template>
  <h1>Deposit</h1>
  <img src="/src/assets/logo.jfif" alt="">
  <div class="container2">
    <div class="form-wrapper">
      <div id="deposit">
        <!-- Any HTMLElement may contain the Rebilly Cashier JavaScript library. -->
      </div>
    </div>
  </div>
</template>
