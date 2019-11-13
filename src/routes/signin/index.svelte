<script>
  import { onMount } from "svelte";
  let emailInput;

  onMount(function() {
    emailInput.focus();
  });
</script>

<style>
  .container.auth-container {
    width: 50%;
  }

  .form-container {
    border: 2px solid #c3cfd9;
    border-radius: 0.35rem;
    padding: 4rem;
    margin: 2rem 0;
  }
</style>

<svelte:head>
  <title>Sign in | Holdex</title>
</svelte:head>

<div class="container auth-container">
  <a href="/signup" class="u-pull-right">Create account</a>
  <h5>[Holdex Logo]</h5>

  <div class="form-container">
    <h5>
      Sign in
      <br />
      <small>Please enter your email</small>
    </h5>

    <form>
      <label for="email">Email</label>
      <input
        class="u-full-width"
        type="email"
        id="email"
        bind:this={emailInput}
        required />
      <div class="text-center">
        <button class="button-primary" type="submit">Next</button>
      </div>

    </form>
  </div>

  <div class="text-center">
    <p>
      Welcome to Holdex account
      <br />
      <a href="/about">Learn more</a>
    </p>

  </div>
</div>
