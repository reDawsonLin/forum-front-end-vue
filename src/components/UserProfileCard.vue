<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          src="https://i.imgur.com/WMsHuNP.jpeg"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{ profile.commentsLength }}</strong> 已評論餐廳</li>
            <li><strong>{{ profile.favoritedRestaurantsLength }}</strong> 收藏的餐廳</li>
            <li><strong>{{ profile.followingsLength }}</strong> followings (追蹤者)</li>
            <li><strong>{{ profile.followersLength }}</strong> followers (追隨者)</li>
          </ul>
          <p>
            <template v-if="currentUser.isAdmin">
              <button class="btn btn-primary">
                edit
              </button>
            </template>
            <template v-else>
              <button
                v-if="profile.isFollowed"
                @click.stop.prevent="deleteFollowing"
                type="submit"
                class="btn btn-danger"
              >
                取消追蹤
              </button>
              <button
                v-else
                @click.stop.prevent="addFollowing"
                type="submit"
                class="btn btn-primary"
              >
                追蹤
              </button>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: "https://i.imgur.com/58ImzMM.png",
    isAdmin: true,
  },
  isAuthenticated: true,
};


export default {
  props: {
    initialProfile: {
      type: Object,
      reqiured: true,
    }
  },
  data() {
    return {
      profile: this.initialProfile,
      currentUser: dummyUser.currentUser,
    }
  },
  methods: {
    addFollowing() {
      this.profile = {
        ...this.profile,
        isFollowed: true,
      };
    },
    deleteFollowing() {
      this.profile = {
        ...this.profile,
        isFollowed: false,
      };
    },
  }
}
</script>