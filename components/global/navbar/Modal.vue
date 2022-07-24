<template>
  <div>
    <button @click="isOpen = true" class="btn block" type="button">
      <span class="hidden md:inline-block">Get in</span> Contact
    </button>
    <div class="container">
      <div class="flex justify-start">
        <!-- Modal -->
        <div
          v-show="isOpen"
          class="pl-20 modal absolute inset-0 flex items-start justify-start xs:items-center xs:justify-center z-20"
        >
          <div class="modal-form rounded-md">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl">Let's keep in touch!</h3>
            </div>
            <div class="mt-4">
              <form
                class="w-full"
                action="/success"
                name="contact"
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <p>
                  <label class="hidden">
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>
                <div class="flex flex-col md:flex-row items-center">
                  <p class="w-full">
                    <label class="block uppercase text-xs font-bold mb-2">Name: </label>
                    <input class="mb-2 md:mb-0 w-full" type="text" name="name" />
                  </p>
                  <p class="w-full m-0 pl-0 md:pl-5">
                    <label class="block uppercase text-xs font-bold mb-2">Email:</label>
                    <input class="w-full" type="text" name="email" required />
                  </p>
                </div>

                <p class="mt-5 w-full">
                  <label class="block uppercase text-xs font-bold mb-2">Message:</label>
                  <textarea class="w-full" name="message"></textarea>
                </p>
                <p class="mt-5 w-full mb-5">
                  <label class="block uppercase text-xs font-bold mb-2">Your Role:</label>
                  <select class="w-full" name="role[]" multiple>
                    <option value="recruiters">Recruiters</option>
                    <option value="companies">Companies</option>
                    <option value="start_ups">Start Ups</option>
                    <option value="companies">Artists</option>
                  </select>
                </p>

                <div class="flex flex-row items-center">
                  <p>
                    <button @click="isOpen = false" class="btn">Cancel</button>
                  </p>
                  <p class="m-0 pl-5">
                    <button class="btn" type="submit">Send</button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style lang="postcss">
.modal-form {
  background-color: var(--bg-body);
}

.modal {
  background-color: var(--bg-body);
}

@media (max-width: 425px) {
  .modal {
    left: 57px;
    top: 86px;
  }
}
</style>
