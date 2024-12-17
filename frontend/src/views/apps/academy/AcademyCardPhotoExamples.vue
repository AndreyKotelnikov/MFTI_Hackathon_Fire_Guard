<script setup lang="ts">
import avatar2 from '@images/avatars/avatar-2.png';

  const exampleImagesData = ref<Array<any>|null>(null)

  axios.get('/api/investigations/')
    .then((response) => {
      exampleImagesData.value = response.data
    })

</script>

<template>
  <VCard title="Примеры снимков для загрузки">
    <VCardText>

      {{ exampleImagesData }}

      <VAvatar size="54"
        color="primary"
        variant="tonal"
        rounded
        :image="avatar2"
      />
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.card-list {
  --v-card-list-gap: 1rem;
}
</style>
