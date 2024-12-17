<script setup lang="ts">

import UploadPhoto from '@/components/UploadPhoto.vue';
import girlWithLaptop from '@images/illustrations/laptop-girl.png';

</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-center  align-start pb-0 px-3 pt-3 mb-4 bg-light-primary rounded">
        <VImg
          :src="girlWithLaptop"
          width="145"
          height="140"
        />
      </div>
      <div>
        <h5 class="text-h5 mb-2">
          Форма приёма отчётов
        </h5>
        <div class="text-body-2">
          Загрузите снимки местности для дальнейшей обработки
        </div>
        <div class="d-flex justify-space-between my-4 flex-wrap gap-4">
          <div
            v-for="{ icon, title, value } in [{ icon: 'tabler-calendar', title: 'Загружено:', value: '87 фото' }, { icon: 'tabler-clock', title: 'Обнаружено:', value: '67 пожаров' }]"
            :key="title"
            class="d-flex gap-x-3 align-center"
          >
            <VAvatar
              color="primary"
              variant="tonal"
              rounded
            >
              <VIcon
                :icon="icon"
                size="28"
              />
            </VAvatar>
            <div>
              <h6 class="text-h6">
                {{ title }}
              </h6>
              <div class="text-sm">
                {{ value }}
              </div>
            </div>
          </div>
        </div>
        <UploadPhoto api-url="/api/investigations/"
          @uploaded="$emit('investigation-ready', $event)"
        />
      </div>
    </VCardText>
  </VCard>
</template>
