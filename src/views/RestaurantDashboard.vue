<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} }</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} }</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 21,
    name: "Ike Wyman",
    tel: "(969) 303-5480 x8859",
    address: "44250 Toney Points",
    opening_hours: "08:00",
    description: "et",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=0.0228325281143249",
    viewCounts: 0,
    createdAt: "2021-07-05T09:58:39.000Z",
    updatedAt: "2021-07-05T09:58:39.000Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
    },
    Comments: [
      {
        id: 21,
        text: "Ea a alias ut et ut quia sint totam voluptatibus.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-07-05T09:58:39.000Z",
        User: {
          id: 1,
          name: "root123",
          email: "root@example.com",
          password:
            "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
          isAdmin: true,
          image: "https://i.imgur.com/KVFFj35.jpeg",
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-08-08T16:49:05.000Z",
        },
      },
      {
        id: 71,
        text: "Quod quasi autem.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-07-05T09:58:39.000Z",
        User: {
          id: 1,
          name: "root123",
          email: "root@example.com",
          password:
            "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
          isAdmin: true,
          image: "https://i.imgur.com/KVFFj35.jpeg",
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-08-08T16:49:05.000Z",
        },
      },
      {
        id: 121,
        text: "Velit est assumenda nihil fugit repellendus numquam.",
        UserId: 2,
        RestaurantId: 21,
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-07-05T09:58:39.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
          isAdmin: false,
          image: null,
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-08-21T14:30:09.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);
      const { restaurant } = dummyData;
      const { id, name, Category, viewCounts, Comments } = restaurant;
      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        viewCounts,
        commentsLength: Comments.length,
      };
    },
  },
};
</script>