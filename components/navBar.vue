<template>
  <div>
    <nav class="border-red-500">
      <div class="flex flex-row gap-3 h-15 bg-teal-500 text-white">
        <a href="/"><img class="h-8 " src="../assets/icons/logo.png" alt=""></a>
        <div>
            <a class="mx-2" href="#">Home </a>
            <a class="mx-2" href="#">Cart </a>
            <a class="mx-2" href="#">Your orders </a>
            <button v-on:click="" class="mx-2"><NuxtLink to="/Account">Account</NuxtLink></button>
        </div>
      </div>
    </nav>
  </div>
</template>
