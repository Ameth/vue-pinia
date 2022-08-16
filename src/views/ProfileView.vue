<template>
  <div class="profile">
    <div class="box">
      <img src="/avatars/avatar.jpg" alt="avatar" />
      <label for="username">Nombre de usuario</label>
      <input
        type="text"
        placeholder="Jane Smith"
        :value="username"
        @input="actualizar($event.target.value)"
      />
      <input
        type="text"
        placeholder="Admin"
        :value="role"
        @input="actualizarRole($event.target.value)"
      />
      <button @click="$router.push('/')">Acceder</button>
      <button @click="obtenerUser">Generar role</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const username = computed(() => store.state.profile.username);
const role = computed(() => store.state.role);

const actualizar = (value) => store.commit("profile/updateUsername", value);
const actualizarRole = (value) => store.commit("updateRole", value);
const obtenerUser = () => store.dispatch("obtenerUsername");
</script>

<style lang="scss" scoped>
.profile {
  @apply flex justify-center items-center h-screen;
  .box {
    @apply flex flex-col items-center gap-2 p-6 rounded-xl bg-zinc-800;
    img {
      @apply w-32 rounded-full border-8 border-zinc-600;
    }
    label {
      @apply w-full;
    }
    input {
      @apply px-3 py-2 rounded-md bg-zinc-900;
    }
    button {
      @apply w-full px-3 py-2 mt-2 rounded-md bg-zinc-600;
    }
  }
}
</style>
