<script setup lang="ts">
const coursesData = [
  { title: 'Промзона Вищняковского завода', views: '1.2k', icon: 'tabler-brand-zoom', color: 'primary' },
  { title: 'Югозападный берег реки Карасуны', views: '834', icon: 'tabler-code', color: 'info' },
  { title: 'Восточное предлесье', views: '3.7k', icon: 'tabler-camera', color: 'success' },
  { title: 'Нижневартовский Национальный Заповедник', views: '2.5k', icon: 'tabler-brand-dribbble', color: 'warning' },
  { title: 'Берег реки Зелёная', views: '948', icon: 'tabler-microphone-2', color: 'error' },
]
</script>

<template>
  <VCard>
    <VCardItem title="История исследований">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="(course, index) in coursesData"
          :key="index"
        >
          <template #prepend>
            <VAvatar
              rounded
              variant="tonal"
              :color="course.color"
            >
              <VIcon
                :icon="course.icon"
                size="24"
              />
            </VAvatar>
          </template>

          <VListItemTitle class="me-4">
            <div class="d-flex flex-column">
              <h6 class="text-h6 text-truncate">
                {{ course.title }}
              </h6>
              <div>
                <VChip
                  variant="tonal"
                  color="secondary"
                  label
                  size="small"
                >
                  {{ course.views }} фото
                </VChip>
              </div>
            </div>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
