<template>
  <div class="home">
    <h1>Home Page</h1>
    <h3 v-if="stats">Displaying total of {{ stats.count }} players from {{ stats.guilds.count }} different
      guilds</h3>
    <PlayerTable
        :players="data"
        :load-data="loadData"
        v-if="data"
    />
  </div>
</template>

<script lang="ts" setup>
import {DataModel} from '@/models/data.model';
import {StatsModel} from '@/models/stats.model';
import {CacheService} from '@/services/cache.service';
import {onBeforeMount, onBeforeUnmount, ref} from 'vue';
import {useRouter} from 'vue-router';
import DateFormat from "@/components/DateFormat.vue";
import PlayerTable from "@/components/PlayerTable.vue";

const data = ref<DataModel[]>();
const stats = ref<StatsModel>();

function loadData() {
  CacheService.retrieveAll()
      .then(rsp => data.value = rsp.data)
  CacheService.retrieveStats()
      .then(rsp => stats.value = rsp.data)
}

// retrieve data on mount
onBeforeMount(() => loadData())

// auto update data every 15 sec
const interval = setInterval(loadData, 15000)
onBeforeUnmount(() => clearInterval(interval));
</script>
