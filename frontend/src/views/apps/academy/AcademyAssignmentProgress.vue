<script setup lang="ts">
const assignmentData = [
  { title: 'Промзона Вищняковского завода', tasks: 120, progress: 72, color: 'primary' },
  { title: 'Югозападный берег реки Карасуны', tasks: 32, progress: 48, color: 'success' },
  { title: 'Восточное предлесье', tasks: 182, progress: 15, color: 'error' },
  { title: 'Берег реки Зелёная', tasks: 56, progress: 24, color: 'info' },
]
</script>

<template>
  <VCard>
    <VCardItem title="В процессе обработки">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="assignment in assignmentData"
          :key="assignment.title"
        >
          <template #prepend>
            <VProgressCircular
              v-model="assignment.progress"
              :size="54"
              class="me-4"
              :color="assignment.color"
            >
              <span class="text-body-1 text-high-emphasis font-weight-medium">
                {{ assignment.progress }}%
              </span>
            </VProgressCircular>
          </template>
          <VListItemTitle class="font-weight-medium mb-2 me-2">
            {{ assignment.title }}
          </VListItemTitle>

          <VListItemSubtitle class="me-2">
            {{ assignment.tasks }} Tasks
          </VListItemSubtitle>
          <template #append>
            <VBtn
              icon
              variant="tonal"
              color="secondary"
              rounded
              size="30"
            >
              <VIcon
                icon="tabler-chevron-right"
                size="20"
                class="flip-in-rtl"
              />
            </VBtn>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 2rem;
}
</style>
