<template>
  <div>
    <Card style="width: 25rem; margin-bottom: 2em">
      <template #title> Simple Card </template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
    </Card>

    <Card style="width: 25em">
      <template #header>
        <img
          src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png"
          style="height: 15rem"
        />
      </template>
      <template #title> Advanced Card </template>
      <template #subtitle> Card subtitle </template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button
          icon="pi pi-times"
          label="Cancel"
          class="p-button-secondary"
          style="margin-left: 0.5em"
        />
      </template>
    </Card>
    <div>
        <h5>Basic</h5>
        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />

        <h5>Preview</h5>
        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />
    </div>
  </div>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import Image from 'primevue/image';

export default {
  components: {
    Card,
    Button,
    Image
  }
};
</script>

<style scoped>
p {
  line-height: 1.5;
  margin: 0;
}
</style>
