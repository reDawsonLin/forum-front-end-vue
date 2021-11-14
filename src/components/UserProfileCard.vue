<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img
          :src="profile.image | emptyImage"
          width="200px"
          height="200px"
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
            <template v-if="profile.id === currentUser.id">
              <router-link
              :to="{ name: 'user-edit', params: { id: profile.id } }"  class="btn btn-primary"
              >
                Edit
              </router-link>
            </template>
            <template v-else>
              <button
                v-if="isFollowed"
                @click.stop.prevent="deleteFollowing(profile.id)"
                type="submit"
                class="btn btn-danger"
              >
                取消追蹤
              </button>
              <button
                v-else
                @click.stop.prevent="addFollowing(profile.id)"
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
import { emptyImageFilter } from './../utils/mixins'
import userAPI from './../apis/users'
import { Toast } from './../utils/helpers'





export default {
  name: 'UserProfileCard',
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      reqiured: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
    isFollowed: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      profile: this.initialProfile,
    }
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await userAPI.addFollowing({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$emit('after-add-following')        
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試',
        })
      }


      
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await userAPI.deleteFollowing({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$emit('after-delete-following')
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試',
        })
      }
    },
  }
}
</script>