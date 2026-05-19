<template>
  <img src="../assets/images/branch.svg" class="hidden" alt="">
  <div class="flex">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-secondary btn-sm mx-1">
        <div
          class="w-4 h-4 bg-secondary-content branch">
        </div>
        main
        <span class="text-[0.5rem]">▼</span>
      </div>
      <div tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <div>stuff</div>
        <div>more stuff</div>
        <div>even more stuff</div>
      </div>
    </div>

    <div class="hidden sm:flex align-middle gap-2">
      <button class="btn-sm">
        <img src="../assets/images/branch.svg" alt="" class="w-4 inline-block align-text-top">
        2 branches
      </button>
      <button class="btn-sm">
        <img src="../assets/images/tag.svg" alt="" class="w-4 inline-block align-text-top">
        4 tags
      </button>
    </div>

    <div class="ml-auto">
      <button class="btn btn-secondary btn-sm mx-1">Go to file</button>
      <button class="btn btn-secondary btn-sm mx-1">Add file</button>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-primary btn-sm mx-1">
          &lt; &gt; Code
          <span class="text-[0.5rem]">▼</span>
        </div>
        <div tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <div>stuff</div>
          <div>more stuff</div>
          <div>even more stuff</div>
        </div>
      </div>
    </div>
  </div>
</template>
