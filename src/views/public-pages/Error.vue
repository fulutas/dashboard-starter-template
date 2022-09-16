<template>
      <div class="bg-white flex items-center justify-center min-h-screen min-w-full overflow-hidden">
        <div class="grid justify-center p-2 lg:p-0 m-auto" style="min-width:80%;">
            <div class="mt-5 xl:mt-0 flex items-center justify-center">
                <img src="https://www.primefaces.org/sakai-vue/layout/images/logo-blue.svg" alt="logo" class="mb-5" style="width:81px; height:60px;">
            </div>
            <div class="w-full" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%);">
                <div class="flex justify-center h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="grid flex-col xl:pl-[4rem] xl:pr-[4rem] place-items-center">
                        <div class="flex justify-center items-center bg-pink-500 border-circle rounded-full mb-5" style="height:3.2rem; width:3.2rem;">
                            <i class="pi pi-fw pi-exclamation-circle text-2xl text-white"></i>
                        </div>
                        <h1 class="font-bold text-5xl text-900 mb-2">Hata Oluştu</h1>
                        <span class="text-gray-600">İstek başarısız oldu. Tekrar deneyiniz.</span>
                        <img src="https://www.primefaces.org/sakai-vue/layout/images/asset-error.svg" alt="Error" class="mt-5" width="100%">
                        <div class="col-12 mt-5 text-center">
                            <i class="pi pi-fw pi-arrow-left text-blue-500 mr-2" style="vertical-align:center;"></i>
                            <router-link to="/" class="text-blue-500">Anasayfaya Dön</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>