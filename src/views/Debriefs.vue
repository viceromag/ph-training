<template>
  <h3>Project 15</h3>
  <ul>
    <li>
      What made you smile?
      <p>We were able to use 3DSecureIO server easily.</p>
    </li>
    <li>
      What did you find confusing? Did you encounter any issues?
      <ul class="list-debrief">
        <li>
          When we first tried Rebilly's internal 3DS test server (TestSandbox3dsServer), the popup windows for 3DS was not informative, not clear what was going behind the scene
        </li>
        <li>
          We could not find in documentation 3DS server decline cards for TestSandbox3dsServer. Our decline cards refer to declining from the gateway, not from 3DS. In such case it still passes 3DS server validation.
        </li>
        <img class="img-debrief" src="/src/assets/p15-1.png" alt="">
        <li>
          Not related to 3DS, but on decline "Choose another payment method" redirects to our hosted payment form, which seems incorrect.
        </li>
        <img class="img-debrief" src="/src/assets/p15-3.png" alt="">
        <li>
          We don’t have Canadian bank issued testing card in documentation for 3DS manual challenge in ThreeDSecureIO
        </li>
        <li>
          We tried a random AMEX card for testing (with proper gateway account settings setup) and ThreeDSecureIO declined that transaction. There is nothing in documentation that describes this behavior.
        </li>
        <li>
          The caption for failed 3DS auth has a "player" term that is related to casnino, a "customer" should be used instead.
        </li>
        <img class="img-debrief" src="/src/assets/p15-2.png" alt="">
      </ul>
    </li>
  </ul>

  <h3>Project 14</h3>
  <ul>
    <li>
      What made you smile?
      <p>This project was very easy to complete.</p>
    </li>
    <li>
      What did you find confusing? Did you encounter any issues?
      <ul>
        <li>
          The "DCC offer accepted" timeline message (and other DCC-related messages) doesn't show the markup that's shown in "DCC" hover-window.
        </li>
        <img src="/src/assets/p14-1.png" alt="">
        <li>
          When configuring a gateway account it's possible to set DCC for non-payment card methods, and it won't actually work, because the code
          checks the card's BIN, so for non-payment card methods, the DCC selection will be auto-skipped.
        </li>
        <li>
          We were experimenting with DCC markup and set it as 0. We were able to save those settings, but when we went to edit gateway account
          screen again, DCC offer settings checkbox was unchecked - it was not obvious behavior.
        </li>
        <img src="/src/assets/p14-2.png" alt="">
        <li>
          It's possible to set a negative DCC markup in gateway account settings and it's not obvious how it works. There's
          no documentation example or explanation about this case.
        </li>
        <li>
          When we were updating the gateway account settings, sometimes on our first deposit attempt the payment instruments
          would crash with "No payment instrument available" message - we couldn't reproduce this bug properly.
        </li>
        <li>
          The amount calculation process was not very obvious for us, it would be good to have an explanation in the documentation,
          or some tooltip with the calculation logic somewhere in the DCC-related timeline message.
        </li>
        <li>
          We tried to calculate the quote amount manually, but the result we got didn't fully match the number displayed in Recomm. Probably
          because of rounding.
        </li>
      </ul>
    </li>
  </ul>

  <h3>Project 13</h3>
  <ul>
    <li>
      What made you smile?
      <p>It was clear for us what needs to be done for this project, because it was similar to project 12</p>
    </li>
    <li>
      What did you find confusing? Did you encounter any issues?
      <ul>
        <li>
          It's not possible to limit what payment methods should be displayed in Rebilly Instruments - all payment methods
          that are set in all available gateway accounts will be shown here. For orgs that have a lot of gateway accounts,
          it's only possible to limit payment methods in the Instruments by creating a separate website.
          It would be good to enhance Deposits API to add "paymentMethods" to limit available payment methods.
        </li>
        <li>
          There's nothing in the documentation about how payment method choices are displayed (it was not obvious for us
          that they are picked from all available gateway accounts)
        </li>
        <li>
          No code examples for setting up a custom payment method - https://www.rebilly.com/docs/dev-docs/setup-rebilly-instruments-paypal
        </li>
        <li>
          In PayPal payment method code examples, there are a lot of unrelated payment methods (AliPay, etc) - https://www.rebilly.com/docs/dev-docs/setup-rebilly-instruments-paypal
        </li>
        <li>
          We couldn't style "Deposit amount" text in the Instruments form. We couldn't find the related color option in the
          documentation
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped>
h3, ul {
  text-align: left;
}
</style>

<script setup>
</script>