<template>
  <div class="details">
    <h1>Player Details</h1>
    <table class="center" v-if="player">
      <tr>
        <th>icon</th>
        <td>
          <img :src="player.avatar" class="avatar">
          <img :src="`https://visage.surgeplay.com/face/32/${player.uuid}`" class="avatar">
        </td>
      </tr>
      <tr>
        <th>name</th>
        <td>{{ player.name }}</td>
      </tr>
      <tr>
        <th>uuid</th>
        <td>{{ player.uuid }}</td>
      </tr>
      <tr>
        <th>discord_id</th>
        <td>{{ player.discordId }}</td>
      </tr>
      <tr>
        <th>tag</th>
        <td>{{ player.tag }}</td>
      </tr>
      <tr>
        <th>nickanme</th>
        <td>{{ player.nickname }}</td>
      </tr>
      <tr>
        <th>guild_id</th>
        <td>{{ player.guildId }}</td>
      </tr>
      <tr>
        <th>skin</th>
        <td>
          <img :src="`https://visage.surgeplay.com/bust/64/${player.uuid}`" class="skin">
        </td>
      </tr>
      <tr>
        <th>created_at</th>
        <DateFormat :date="player.createdAt"/>
      </tr>
      <tr>
        <th>cached_at</th>
        <DateFormat :date="player.cachedAt"/>
      </tr>
    </table>
    <p v-else>No data found for player {{ uuid }}</p>
  </div>
</template>

<script lang="ts" setup>
import {CacheService} from '@/services/cache.service';
import {DataModel} from '@/models/data.model';
import {ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import DateFormat from "@/components/DateFormat.vue";

const route = useRoute()
const uuid = route.params.uuid as string;
const player = ref<DataModel>()

CacheService.retrieveByUuid(uuid).then(rsp => {
  player.value = rsp.data
})
</script>