<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { useMounted } from '@vueuse/core';
import { required, email,  minLength, sameAs, helpers } from '@vuelidate/validators'

const formData = reactive({
  email: '',
  name: '',
  message: '',
});


const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    name: {
      required: helpers.withMessage('The email field is required', required),
    },
    message: {
      required: helpers.withMessage('The email field is required', required),
      minLength: minLength(16), 
    }
  };
});

const v$ = useVuelidate(rules, formData);


const submitForm = () => {
  console.log('attempting message')
  v$.value.$validate();
  if (!v$.value.$error) {
    //    Some code
    Email.send({
        SecureToken: 'f36dced5-ba7c-4311-a801-ba89cc2d958c',
        To: 'frenzyexists@gmail.com',
        From: v$.value.email.$model,
        Subject: v$.value.name.$model.concat(' - Customer'),
        Body: v$.value.message.$model
      }).then(
        // TODO: Create a better alert component
        (message: string) => alert(message)
      )
  }
};

const validName = (name: string) => {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$")
  return validNamePattern.test(name)
}

if (useMounted()) {
  let smtpjs = document.createElement('script');
  smtpjs.async = true;
  smtpjs.setAttribute('src', 'https://smtpjs.com/v3/smtp.js');
  document.head.appendChild(smtpjs);
}



</script>

<!-- <script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export function validName(name: string) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$")
  return validNamePattern.test(name)
}

export default {
  setup() {

    return {
      v$: useVuelidate()
    }
  },
  mounted() {
    let smtpjs = document.createElement('script')
    smtpjs.async = true
    smtpjs.setAttribute('src', 'https://smtpjs.com/v3/smtp.js')
    document.head.appendChild(smtpjs)
  },
  methods: {
    sendEmail() {
      console.log('attempting message')
      Email.send({
        SecureToken: 'f36dced5-ba7c-4311-a801-ba89cc2d958c',
        To: 'frenzyexists@gmail.com',
        From: this.v$.form.email.$model,
        Subject: this.v$.form.name.$model + ' - Customer',
        Body: this.v$.form.textMessage.$model
      }).then(
        // TODO: Create a better alert component
        (message) => alert(message)
      )
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        textMessage: ''
      }
    }
  },

  validations() {
    return {
      form: {
        name: {
          required,
          name_validation: {
            $validator: validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          }
        },
        email: { required, email },
        textMessage: { required, min: minLength(6) }
      }
    }
  }
}
</script> -->

<script lang="ts" setup>


</script>


<template>
  <div
    class="bg-neutral-100 text-neutral-100 bg-opacity-90 mx-auto mt-10 flex w-full flex-col rounded-lg p-8 shadow-lg md:mt-0 md:w-1/2 lg:w-2/6">
    <div class="text-center mx-auto max-w-4xl px-3">

      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="text-accent-100 mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">Let's Get In Touch</h2>
        <p class="text-accent-200 mx-auto max-w-screen-md text-center md:text-lg">Whether you're interested in working
          with me or just want to say hello, I'd love to hear from you!</p>
      </div>
      <!-- text - end -->

      <!-- Form - Start -->
      <div id="form-messages"></div>
      <!-- <form @submit.prevent="onsubmit" @reset="onReset"> -->
      <form>
        <div class="my-6 ">

          <div class="relative h-11 my-6 w-full">
            <input
              class="text-base-150 border-dark-accent-200 peer h-full w-full border-b bg-transparent pt-4 pb-1.5 text-sm font-normal outline outline-0 transition-all"
              placeholder=" " name="name" id="name" v-model="formData.name"/>
            <label class="inp">
              <span class="text-red-400">*</span> Name
            </label>
          </div>

          <div class="relative h-11 my-7 w-full">
            <input
              class="text-base-150 border-dark-accent-200 peer h-full w-full border-b bg-transparent pt-4 pb-1.5 text-sm font-normal outline outline-0 transition-all"
              placeholder=" " name="email" id="email" v-model="formData.email" @change="v$.email.$touch" />
            <label class="inp">
              <span class="text-red-400">*</span> Email
            </label>
          </div>

          <div class="relative h-36 my-6 w-full">
            <!-- v-model="v$.form.textMessage.$model" -->
            <textarea
              class="text-base-150 border-dark-accent-200 textarea-scroll-style resize-none peer h-full w-full border-b bg-transparent outline-0 pt-4 pb-1.5"
              placeholder=" " data-minlength="10" name="messageText" v-model="formData.message"></textarea>
            <label
              class="text-inp">
              Hi! I'm Contacting you because...
            </label>
          </div>
        </div>

        <div class="flex justify-around sm:flex-row flex-col">
          <!-- @click="sendEmail" -->
          <button type="submit" id="submit" name="submit"
            class="bg-neutral-50 text-dark-accent-200 hover:bg-dark-accent-200 hover:text-neutral-50 drop-shadow-md rounded-full my-4 sm:my-0 font-bold text-lg hover:transition duration-300 hover:ease-in-out p-4 min-w-[10rem]"
            >SEND MESSAGE
          </button>
          <button type="reset" id="submit" name="reset"
            class="bg-neutral-50 text-dark-accent-200 hover:bg-dark-accent-200 hover:text-neutral-50 drop-shadow-md rounded-full my-4 sm:my-0 font-bold text-lg hover:transition duration-300 hover:ease-in-out p-4 min-w-[10rem]">
            RESET
          </button>
        </div>
      </form>
      <br />
    </div>
  </div>
</template>

<style>
.contact-color {
  @apply text-dark-accent-100 after:border-dark-accent-200 peer-focus:after:border-dark-accent-200 peer-placeholder-shown:text-dark-accent-100;
}

.textarea-scroll-style::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  @apply bg-neutral-50;
}

.inp {
  @apply contact-color relative left-0 font-bold uppercase pointer-events-none -top-10 flex h-full w-full select-none text-xs transition-all after:absolute after:bottom-1 after:w-full after:scale-x-0 after:transition-all peer-focus:after:scale-x-100 peer-focus:text-xs peer-focus:leading-tight peer-placeholder-shown:leading-[4.25] after:border-b-4;
}

.text-inp {
  @apply relative left-0 font-bold uppercase pointer-events-none -top-40 h-full w-full flex select-none text-xs text-dark-accent-100 transition-all after:-bottom-1.5 after:block after:scale-x-0 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-xs peer-focus:leading-tight peer-focus:after:scale-x-100;
}

.textarea-scroll-style::-webkit-scrollbar {
  width: 10px;
  @apply bg-neutral-50;
}

.textarea-scroll-style::-webkit-scrollbar-thumb {
  @apply bg-dark-accent-200;
  background-image: -webkit-linear-gradient(45deg,
      rgba(255, 255, 255, .2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, .2) 50%,
      rgba(255, 255, 255, .2) 75%,
      transparent 75%,
      transparent)
}
</style>