<template>
  <div class="status" v-if="status">
    <h1>Server Status</h1>
    <h3>Currently {{ status.players.online }} out of {{ status.players.max }} players online</h3>
    <PlayerTable
        :players="status.players.sample"
        :load-data="loadData"
    />
  </div>
</template>

<script setup lang="ts">

import {onBeforeMount, onBeforeUnmount, ref} from "vue";
import {CacheService} from "@/services/cache.service";
import {StatusModel} from "@/models/status.model";
import PlayerTable from "@/components/PlayerTable.vue";

const status = ref<StatusModel>();

function loadData() {
  CacheService.retrieveServerStatus()
      .then(rsp => status.value = rsp.data)
}

// retrieve data on mount
onBeforeMount(() => loadData())

// auto update data every 5 sec
const interval = setInterval(loadData, 5000)
onBeforeUnmount(() => clearInterval(interval));
</script>