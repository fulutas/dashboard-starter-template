<template>
  <div class="bg-white h-screen">
    <div class="w-full flex flex-wrap">
      <!-- Login Section -->
      <div class="w-full md:w-1/2 flex flex-col">
        <div
          class="flex relative justify-center md:justify-start pt-12 md:pl-12 md:-mb-24"
        >
          <a href="#" class="bg-black text-white font-bold text-xl p-4">Logo</a>
        </div>

        <div
          class="flex flex-col justify-center items-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
        >
          <form
            class="flex flex-col pt-3 md:pt-8 w-full md:w-full lg:w-full xl:w-3/6"
            onsubmit="event.preventDefault();"
          >
            <div class="relative w-full text-left mb-4">
              <label
                class="flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between"
                ><div>Email <span class="text-sm text-red-500"> * </span></div>
              </label>
              <div class="flex flex-col mt-1">
                <div class="relative rounded-md shadow-sm" name="email">
                  <input
                    name="email"
                    type="email"
                    class="block w-full sm:text-sm border-gray-200 rounded-md text-black focus:ring-indigo-400 focus:border-indigo-400"
                  />
                </div>
              </div>
            </div>

            <div class="relative w-full text-left mb-4">
              <label
                class="flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between"
                ><div>Şifre <span class="text-sm text-red-500"> * </span></div>
              </label>
              <div class="flex flex-col mt-1">
                <div class="relative rounded-md shadow-sm" name="password">
                  <input
                    name="password"
                    type="password"
                    class="block w-full sm:text-sm border-gray-200 rounded-md text-black pr-10 focus:ring-indigo-400 focus:border-indigo-400"
                  />
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-5 w-5 w-5 h-5 mr-1 text-gray-500 cursor-pointer"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="mt-3 text-sm text-indigo-400">
                  <p>
                    <a href="register.html" class="text-sm font-semibold"
                      >Şifremi unuttum</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <input
              type="submit"
              value="Giriş yap"
              class="bg-indigo-500 text-white font-bold text-lg hover:bg-indigo-700 p-2 mt-8 rounded-md"
            />
          </form>
        </div>
      </div>
      

      <!-- Image Section -->
      <div class="w-1/2 shadow-2xl">
        <img
          class="object-cover w-full h-screen hidden md:block"
          src="https://source.unsplash.com/IXUM4cJynP0"
        />
      </div>
      <div
          class="absolute bottom-0 right-0 left-0 text-center md:text-left md:justify-start pt-12 md:pl-12 mt-0 text-sm not-italic font-medium leading-relaxed text-gray-400 md:pt-40"
        >
          <p class="mb-3">Copyright @ [Brand] Inc. 2022</p>
        </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
