<script setup>
import { ref, reactive, computed } from "vue";
import { RouterView, RouterLink } from "vue-router";
import InputSearch from "@/components/InputSearch.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ChatItem from "@/components/ChatItem.vue";
// import store from "@/store/store.js";
import { mapState } from "vuex";
import { useStore } from "vuex";

const store = useStore();

const search = ref("");

const username = computed(() => store.state.profile.username);
const avatar = computed(() => store.state.profile.avatar);
const status = computed(() => store.state.status);
const role = computed(() => store.state.role);
const channels = computed(() => store.getters["channels/getChannels"]);
</script>

<template>
  <div class="home">
    <aside>
      <InputSearch v-model="search" />
      <ProfileCard :avatar="avatar" :username="username" :status="status" />
      <RouterLink to="/" class="channels-title"
        >Canales <Icon icon="carbon:hashtag"
      /></RouterLink>
      <div class="channels">
        <ChatItem
          v-for="channel in channels(search)"
          :key="channel.id"
          :id="channel.id"
          :name="channel.name"
          :messages="channel.messages"
        />
      </div>
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.home {
  @apply flex h-screen;
  aside {
    @apply flex flex-col w-80 min-w-max px-6 py-5 gap-4 bg-zinc-800;
    .channels-title {
      @apply flex items-center gap-2 mt-2 ml-3 text-xl font-bold text-neutral-200;
    }
    .channels {
      @apply flex flex-col gap-2 overflow-y-auto;
    }
  }
  main {
    @apply w-full;
  }
}
</style>