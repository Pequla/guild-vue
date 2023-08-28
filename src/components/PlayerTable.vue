<template>
  <table id="player-table" class="center"  v-if="players.length > 0">
    <tr>
      <th class="icon">icon</th>
      <th class="minecraft">minecraft</th>
      <th class="discord">discord</th>
      <th class="created_at">created_at</th>
      <th class="cached_at">cached_at</th>
      <th class="action">actions</th>
    </tr>
    <tr v-for="d in players">
      <td class="icon">
        <img :src="d.avatar" class="avatar">
        <img :src="`https://visage.surgeplay.com/face/32/${d.uuid}`" class="avatar">
      </td>
      <td class="minecraft">{{ d.name }}</td>
      <td class="discord">{{ d.nickname }}</td>
      <DateFormat :date="d.createdAt" class="created_at"/>
      <DateFormat :date="d.cachedAt" class="cached_at"/>
      <td class="action">
        <button type="button" class="details" @click="(e) => details(d.uuid)" title="details"><i
            class="fa-solid fa-circle-info"></i></button>
        <button type="button" class="update" @click="(e) => update(d.uuid)" title="updated"><i
            class="fas fa-sync"></i></button>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import {DataModel} from "@/models/data.model";
import DateFormat from "@/components/DateFormat.vue";
import {CacheService} from "@/services/cache.service";
import {useRouter} from "vue-router";

export interface TableProps {
  players: DataModel[],
  loadData: Function
}

const {players, loadData} = defineProps<TableProps>();
const router = useRouter();

function details(uuid: string) {
  router.push({
    path: '/details/' + uuid
  })
}

function update(uuid: any) {
  CacheService.updatePlayer(uuid)
      .then(rsp => loadData())
}
</script>
