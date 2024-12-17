<template>
  <div class="h-100 d-flex align-center justify-md-space-between justify-center">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center text-medium-emphasis">
      &copy;
      {{ new Date().getFullYear() }}
      Специально для 
      <VIcon
        icon="tabler-heart-filled"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      <a
        href="https://mipt.ru/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >МФТИ</a>
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_MIT"
        target="noopener noreferrer"
      >License</a>
    </span>
  </div>
</template>
