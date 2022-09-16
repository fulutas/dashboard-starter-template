<template>
    <div class="bg-white flex items-center justify-center min-h-screen min-w-full overflow-hidden">
        <div class="grid justify-center p-2 lg:p-0 m-auto" style="min-width:80%">
            <div class="mt-5 xl:mt-0 flex items-center justify-center">
                <img src="https://www.primefaces.org/sakai-vue/layout/images/logo-blue.svg" alt="logo" class="mb-5" style="width:81px; height:60px;">
            </div>
            <div class="w-full" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, rgba(33, 150, 243, 0.4) 10%, rgba(33, 150, 243, 0) 30%);">
                <div class="flex justify-center h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="grid flex-col xl:pl-[4rem] xl:pr-[4rem]">
                        <span class="text-blue-500 font-bold text-3xl text-center">404</span>
                        <h1 class=" font-bold text-3xl lg:text-4xl mb-2 mt-4 text-center">Aradığınız sayfa bulunamadı</h1>
                        <span class="text-gray-600 text-center">İstenen sayfa şuanda mevcut değil. </span>
                        <div class=" flex items-center py-5 mt-6 border-bottom-1">
                            <div class="flex justify-center items-center bg-cyan-400 rounded-md" style="height:3.5rem; width:3.5rem;">
                                <i class="pi pi-fw pi-table text-50 text-2xl"></i>
                            </div>
                            <div class="ml-4">
                                <router-link to="/">
                                    <p class=" lg:text-md font-medium mb-0">Frequently Asked Questions</p>
                                </router-link>
                                <span class="text-gray-600 text-sm lg:text-md">Ultricies mi quis hendrerit dolor.</span>
                            </div>
                        </div>
                        <div class=" flex align-center py-5 border-bottom-1">
                            <div class="flex justify-center items-center bg-orange-400 rounded-md" style="height:3.5rem; width:3.5rem;">
                                <i class="pi pi-fw pi-question-circle text-50 text-2xl"></i>
                            </div>
                            <div class="ml-4">
                                <router-link to="/">
                                    <p class=" lg:text-md font-medium mb-0">Solution Center</p>
                                </router-link>
                                <span class="text-gray-600 text-sm lg:text-md">Phasellus faucibus scelerisque eleifend.</span>
                            </div>
                        </div>
                        <div class=" flex items-center py-5 border-bottom-1">
                            <div class="flex justify-center items-center bg-indigo-400 rounded-md" style="height:3.5rem; width:3.5rem;">
                                <i class="pi pi-fw pi-unlock text-50 text-2xl"></i>
                            </div>
                            <div class="ml-4">
                                <router-link to="/">
                                    <p class=" lg:text-md font-medium mb-0">Permission Manager</p>
                                </router-link>
                                <span class="text-gray-600 text-sm lg:text-md">Accumsan in nisl nisi scelerisque</span>
                            </div>
                        </div>
                        <div class=" mt-5 text-center">
                            <i class="pi pi-fw pi-arrow-left text-blue-500 mr-2" style="vertical-align:center;"></i>
                            <router-link to="/" class="text-blue-500">Anasayfaya Dön</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>