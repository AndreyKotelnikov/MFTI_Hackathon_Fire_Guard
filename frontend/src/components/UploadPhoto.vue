<template>
  <div>
    <VBtn block @click="$refs.file?.click()"
      :loading="isProcessing"
    >
      Загрузить снимок
    </VBtn>

    <input
      ref="file"
      type="file"
      name="photo"
      class="form-control"
      required
      style="opacity: 0;"
      @change="changeSelectedFile"
    >
  </div>
</template>

<script setup lang="ts">

  const $emit = defineEmits()
  const $props = defineProps({
    apiUrl: {
      type: String,
      required: true
    }
  })

  const isProcessing = ref(false)
  
  const changeSelectedFile = (e: Event) => {
    if (!e.target) {
      return
    }

    const fileInput : HTMLInputElement = e.target as HTMLInputElement
    const files = fileInput.files
    if (files && files.length) {

      isProcessing.value = true
      $emit('start')
      const selectedFile = files[0]
      const formData = new FormData()
      formData.append('photo', selectedFile)

      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      axios.post($props.apiUrl, formData, headers)
        .then((response) => {
          console.log('SUCCESS!!', response)
          isProcessing.value = false
          // alert(response.data)
          $emit('uploaded', response.data)
        })
        .catch((error) => {
          console.log('FAILURE!!', error)
          $emit('error', error)
          isProcessing.value = false
        })
    }
  }

</script>
