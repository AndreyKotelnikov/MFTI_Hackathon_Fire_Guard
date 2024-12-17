<script setup lang="ts">
import AcademyTopicYouAreInterested from '@/views/apps/academy/AcademyTopicYouAreInterested.vue'
import AcademyUpcomingWebinar from '@/views/apps/academy/AcademyUpcomingWebinar.vue'

import AcademyCardPhotoExamples from '@/views/apps/academy/AcademyCardPhotoExamples.vue'

import customCheck from '@images/svg/Check.svg'
import customLaptop from '@images/svg/laptop.svg'
import customLightbulb from '@images/svg/lightbulb.svg'

definePage({
  // alias: '/pages/misc/not-authorized',
  meta: {
    // layout: 'blank',
    public: true,
  },
})

// Donut Chart Colors
const donutChartColors = {
  donut: {
    series1: '#22A95E',
    series2: '#24B364',
    series3: '#56CA00',
    series4: '#53D28C',
    series5: '#7EDDA9',
    series6: '#A9E9C5',
  },
}

// Donuts Chart Config
const timeSpendingChartConfig = {
  chart: {
    height: 157,
    width: 130,
    parentHeightOffset: 0,
    type: 'donut',
  },
  labels: ['36га', '56га', '16га', '32га', '56га', '16га'],
  colors: [
    donutChartColors.donut.series1,
    donutChartColors.donut.series2,
    donutChartColors.donut.series3,
    donutChartColors.donut.series4,
    donutChartColors.donut.series5,
    donutChartColors.donut.series6,
  ],
  stroke: {
    width: 0,
  },
  dataLabels: {
    enabled: false,
    formatter(val: string) {
      return `${Number.parseInt(val)}%`
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    theme: false,
  },
  grid: {
    padding: {
      top: 0,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '75%',
        labels: {
          show: true,
          value: {
            fontSize: '1.125rem',
            color: 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))',
            fontWeight: 500,
            offsetY: -15,
            formatter(val: string) {
              return `${Number.parseInt(val)}%`
            },
          },
          name: {
            offsetY: 20,
          },
          total: {
            show: true,
            fontSize: '15px',
            label: 'Всего',
            color: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
            formatter() {
              return '5 232га'
            },
          },
        },
      },
    },
  },
}

const timeSpendingChartSeries = [23, 35, 10, 20, 35, 23]
</script>

<template>
  <div>
    <VRow class="py-6">
      <!-- 👉 Welcome -->
      <VCol
        cols="12"
        md="8"
        :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'"
      >
        <div class="pe-3">
          <h4 class="text-h4 mb-2">
            Мониторинг лесных пожаров
          </h4>

          <div
            class="text-wrap text-body-1"
            style="max-inline-size: 460px;"
          >
            Терминал оператора. Загрузка фото со спутника.
          </div>

          <div class="d-flex justify-space-between flex-wrap gap-4 flex-column flex-md-row mt-4">
            <div
              v-for="{ title, value, icon, color } in [
                { title: 'Загружено', value: '234 фото', icon: customLaptop, color: 'primary' },
                { title: 'Выявлено', value: '82%', icon: customLightbulb, color: 'success' },
                { title: 'Остановлено', value: '14 пожаров', icon: customCheck, color: 'warning' },
              ]"
              :key="title"
            >
              <div class="d-flex align-center">
                <VAvatar
                  variant="tonal"
                  :color="color"
                  rounded
                  size="54"
                  class="text-primary me-4"
                >
                  <VIcon
                    :icon="icon"
                    size="38"
                  />
                </VAvatar>
                <div>
                  <h6 class="text-h6 text-medium-emphasis">
                    {{ title }}
                  </h6>
                  <h4
                    class="text-h4"
                    :class="`text-${color}`"
                  >
                    {{ value }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VCol>

      <!-- 👉 Time Spending -->
      <VCol
        cols="12"
        md="4"
      >
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex flex-column ps-3">
            <h5 class="text-h5 mb-1 text-no-wrap">
              Отчёт за период
            </h5>
            <div class="text-body-1 mb-7 text-no-wrap">
              Оценочная площадь
            </div>
            <h4 class="text-h4 mb-2 text-no-wrap">
              33 <span class="text-medium-emphasis">га. сегодня</span>
            </h4>
            <div>
              <VChip
                color="success"
                label
                size="small"
              >
                +18.4%
              </VChip>
            </div>
          </div>
          <div>
            <VueApexCharts
              type="donut"
              height="150"
              width="150"
              :options="timeSpendingChartConfig"
              :series="timeSpendingChartSeries"
            />
          </div>
        </div>
      </VCol>
    </VRow>

    <VRow class="match-height" >

      <VCol cols="12" md="4" sm="6" >
        <AcademyUpcomingWebinar />
      </VCol>

      <VCol cols="12" md="8" >
        <AcademyTopicYouAreInterested />
      </VCol>

      <VCol cols="12" md="12" sm="12" >
        <AcademyCardPhotoExamples />
      </VCol>

    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
