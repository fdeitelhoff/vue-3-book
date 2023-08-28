<template>
  <div>
    <ul>
      <li v-for="item in paginate" :key="item.id">{{ item.name }}</li>
    </ul>
    <template v-for="pageNumber in totalPages">
      <span
        v-if="
          Math.abs(pageNumber - currentPage) < 3 ||
          pageNumber == totalPages ||
          pageNumber == 1
        "
        :key="pageNumber"
      >
        <a :key="pageNumber" href="#" @click="setPage(pageNumber)">
          {{ pageNumber }}</a
        ></span
      >&nbsp;
    </template>
  </div>
</template>

<script>
export default {
  name: "ListRendering",
  data() {
    return {
      filter: "Artikel",
      sort: "id",
      sortOrder: "ASC",
      currentPage: 1,
      itemsPerPage: 1,
      shopItems: [
        { id: 1, name: "Artikel 1" },
        { id: 2, name: "Artikel 2" },
        { id: 3, name: "Artikel 3" },
        { id: 4, name: "Artikel 4" },
        { id: 5, name: "Artikel 5" },
        { id: 6, name: "Artikel 6" },
      ],
    };
  },
  computed: {
    sortAndFilter() {
      let data = this.shopItems;

      if (this.filter !== "") {
        data = data.filter((item) => item.name.includes(this.filter));
      }

      if (this.sort !== "") {
        data = data.sort((a, b) => a < b);
      }

      if (this.sortOrder === "DESC") {
        data.reverse();
      }

      return data;
    },
    totalPages() {
      return Math.ceil(this.shopItems.length / this.itemsPerPage);
    },
    paginate() {
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
      return this.shopItems.slice(index, index + this.itemsPerPage);
    },
  },
  methods: {
    setPage(pageNumber) {
      if (pageNumber > this.totalPages) {
        this.currentPage = this.totalPages;
      } else if (pageNumber < 1) {
        this.pageNumber = 1;
      } else {
        this.currentPage = pageNumber;
      }
    },
  },
};
</script>

<style>
a.first::after {
  content: "...";
}

a.last::before {
  content: "...";
}
</style>
