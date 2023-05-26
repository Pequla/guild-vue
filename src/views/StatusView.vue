<template>
  <div class="about" v-if="status">
    <h3>Currently {{status.players.online}} out of {{status.players.max}} players online</h3>
    <p>{{status}}</p>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {LinkService} from "@/services/link.service";
import {StatusModel} from "@/models/status.model";

const status = ref<StatusModel>();
LinkService.retrieveStatus('atm8.g.akliz.net')
    .then(rsp => status.value = rsp.data)
</script>
