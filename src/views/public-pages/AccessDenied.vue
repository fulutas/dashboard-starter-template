

<template>
    <div class="bg-white flex items-center justify-center min-h-screen min-w-full overflow-hidden">
        <div class="grid justify-center p-2 lg:p-0" style="min-width:80%">
            <div class="mt-5 xl:mt-0 flex items-center justify-center">
                <img src="https://www.primefaces.org/sakai-vue/layout/images/logo-blue.svg" alt="logo" class="mb-5" style="width:81px; height:60px;">
            </div>
            <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%);">
                <div class="h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="grid flex-col place-items-center xl:pl-[4rem] xl:pr-[4rem]">
                        <div class="flex justify-center items-center bg-orange-500 border-circle rounded-full" style="width:3.2rem; height:3.2rem;">
                            <i class="pi pi-fw pi-lock text-2xl text-white"></i>
                        </div>
                        <h1 class="font-bold text-3xl lg:text-4xl mb-2 mt-4 text-center">Erişim Reddedildi</h1>
                        <span class="text-gray-600 text-center text-sm xl:text-lg">Gerekli izinlere sahip değilsiniz. Lütfen yöneticilerle iletişime geçin.</span>
                        <img src="https://www.primefaces.org/sakai-vue/layout/images/asset-access.svg" alt="Access denied" class="mt-5" width="100%">
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