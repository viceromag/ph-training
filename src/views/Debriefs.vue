<template>
  <h3>Project 17</h3>
  <ul>
    <li>
      What made you smile?
      <p>No coding was needed.</p>
    </li>
    <li>
      What did you find confusing? Did you encounter any issues?
      <ul class="list-debrief">
        <li>
          We were unable to use payout with echeck. The ready-to-pay API returns echeck as available payment method but doesn't render it.
        </li>
        <img class="img-debrief" src="/src/assets/p17-1.png" alt="">
        <li>
          When we tried to add a echeck instrument via Recomm, a validation error was displayed as raw JSON.
        </li>
        <img class="img-debrief" src="/src/assets/p17-2.png" alt="">
        <li>
          "Interac" as a payout method won't actually work in Live environment with 2/3 gateways that support Interac as a payment method.
          For example, Gigadat only supports "Interac-eTransfer" and "Interac-express". The merchant might create a gateway account thinking it can support Interac payouts, but it won't.
          It won't be obvious for the merchant why the payout gets declined. We might need to gather and display payment methods available for payout for a gateway account. Currently only
          a developer can check the payout method implementation in related gateway integrations to find what methods can be used for payout - see
          <a href="https://github.com/Rebilly/rebilly/blob/d3fd9d17c7d5f5a02e2e306e1a8a550823c43dec/backend/core/packages/payment-gateways/src/Adapters/Gigadat/Gigadat.php#L209">Gigadat code</a>
        </li>
        <li>
          "Interac" method added through customer management in Rebilly dashboard doesn't specify what kind of "identification" should be used when making Interac payouts - like IBAN for bank transfer.
        </li>
        <li>
          When we were looking to add a payment instrument via Customer management in Rebilly dashboard, we tried clicking "Set up payment instrument" - it took us to adding a bank account
          for paramount-eft, which was very confusing.
        </li>
        <img class="img-debrief" src="/src/assets/p17-3.png" alt="">
        <img class="img-debrief" src="/src/assets/p17-4.png" alt="">
      </ul>
    </li>
  </ul>
  <h3>Project 16</h3>
  <ul>
    <li>
      What made you smile?
      <p>We were able to quickly reuse existing deposit setup for payouts.</p>
    </li>
    <li>
      What did you find confusing? Did you encounter any issues?
      <ul class="list-debrief">
        <li>
          If a customer doesn't have a bank account in their payment instruments, they are still able to request a bank-transfer payout.
          It's displayed in a weird way in Recomm with no gateway account associated, even though our organization had one.
        </li>
        <img class="img-debrief" src="/src/assets/p16-1.png" alt="">
        <li>
          When we tried to add a bank account via Recomm using a random fake account number and routing number, a validation error was displayed as raw JSON
        </li>
        <img class="img-debrief" src="/src/assets/p16-2.png" alt="">
        <li>
          In instruments, it looks like customer should be able to add a bank account as there's a "Use existing bank transfer" / "Add new bank transfer" button.
          But it never allowed us to enter a bank information, we were only able to edit the billing address.
        </li>
        <img class="img-debrief" src="/src/assets/p16-3.png" alt="">
        <li>
          The "Allocate" input displayed CAD as just $ (maybe it's expected).
        </li>
        <img class="img-debrief" src="/src/assets/p16-4.png" alt="">
        <li>
          It was not obvious for us if it's even possible to change the "it will be fullfilled in 48 hours" text after successful payout processing.
          We couldn't find that in the documentation.
        </li>
        <img class="img-debrief" src="/src/assets/p16-5.png" alt="">
      </ul>
    </li>
  </ul>

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