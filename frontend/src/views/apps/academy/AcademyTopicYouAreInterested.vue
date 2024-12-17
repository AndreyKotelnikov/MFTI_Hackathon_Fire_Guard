<script setup lang="ts">

const $props = defineProps({
  investigationData: {
    type: Object as () => any|null,
    default: null
  }
})


const borderColor = 'rgba(var(--v-border-color), var(--v-border-opacity))'

// Topics Charts config
const topicsChartConfig = computed(() => {
  return {
    chart: {
      height: 270,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '70%',
        distributed: true,
        borderRadius: 7,
        borderRadiusApplication: 'end',
      },
    },

    colors: [
      'rgba(var(--v-theme-primary),1)', 'rgba(var(--v-theme-info),1)', 'rgba(var(--v-theme-success),1)', 'rgba(var(--v-theme-secondary),1)', 'rgba(var(--v-theme-error),1)', 'rgba(var(--v-theme-warning),1)',
    ],

    grid: {
      borderColor,
      strokeDashArray: 10,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: -35,
        bottom: -12,
      },
    },

    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'],
        fontWeight: 200,
        fontSize: '13px',

      },
      offsetX: 0,
      dropShadow: {
        enabled: false,
      },
      formatter(val: string, opt: any) {
        return chartLabels.value[opt.dataPointIndex]
      },
    },
    labels: chartLabels.value,

    xaxis: {
      categories: ['3', '2', '1'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
          fontSize: '13px',
        },
        formatter(val: string) {
          return `${val}%`
        },
      },
    },

    yaxis: {
      max: 35,
      labels: {
        style: {
          colors: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
          fontSize: '13px',
        },
      },
    },

    tooltip: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },
    legend: {
      show: false,
    },
  }
})

// const topicsChartSeries = [
//   {
//     data: [1, 1, 1],
//   },
// ]

// watch(() => $props.investigationData.values_detail, () => {
//   const values = $props.investigationData.values_detail.map((x: any) => x.value)
//   topicsChartSeries.data = values
// })

const topicsChartSeries = computed(() => {
  if (!$props.investigationData) {
    return []
  }
  return [{
    data: $props.investigationData.values_detail.map((x: any) => x.value ? x.value / 3 : 1)
  }]
})


const systemColors = [
  'primary', 'info', 'success', 'secondary', 'error', 'warning'
]

const chartCategories = computed(() => {
  if (!$props.investigationData) {
    return []
  }
  return $props.investigationData.values_detail.map((x: any, i: number) => i + 1)
})

const chartLabels = computed(() => {
  if (!$props.investigationData) {
    return []
  }
  return $props.investigationData.values_detail.map((x: any) =>x.value + '%')
})

const topicsData = computed(() => {
  if (!$props.investigationData) {
    return []
  }
  return $props.investigationData.values_detail.map((x: any, i: number) => {
    return { title: x.model_name, value: x.value, color: systemColors[i % systemColors.length] }
  })
})
</script>

<template>
  <VCard title="Реагирование моделей на пожары">

    <VCardText v-if="investigationData">
      <VRow>
        <VCol
          cols="12"
          md="6"
          xl="8"
          lg="7"
        >
          <div v-if="topicsChartSeries">
            <VueApexCharts
              type="bar"
              height="260"
              :options="topicsChartConfig"
              :series="topicsChartSeries"
            />
          </div>

          <div class="d-flex ml-5 mt-4">
            <VAvatar size="120"
              color="primary"
              variant="tonal"
              rounded
              :image="investigationData.preview"
            />
            <div class="px-4 py-4">
              <h4>Средневзвешенная вероятность: {{ investigationData.value_mean }}%</h4>
              <p v-if="investigationData.value_mean >= 50" class="text-error">Вероятно есть пожар</p>
              <p v-else class="text-success">Вероятно есть пожар</p>
            </div>
          </div>
        </VCol>

        <VCol
          cols="12"
          md="6"
          lg="5"
          xl="4"
        >
          <div class="topic-progress d-flex flex-wrap gap-x-6 gap-y-4 ms-auto">
            <div
              v-for="topic in topicsData"
              :key="topic.title"
              class="d-flex gap-x-2"
            >
              <VBadge
                dot
                inline
                class="mt-1 custom-badge"
                :color="topic.color"
              />
              <div>
                <div
                  class="text-body-1"
                  style="min-inline-size: 90px;"
                >
                  {{ topic.title }}
                </div>
                <h5 class="text-h5">
                  {{ topic.value }}%
                </h5>
              </div>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
    <VCardText v-else class="text-center">
      <br><br><br><br><br><br><br>
      <span>Ожидание загрузки исследований...</span>
    </VCardText>
  </VCard>
</template>
