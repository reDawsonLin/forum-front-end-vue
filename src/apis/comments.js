import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')


export default {
  createComment({
      restaurantId,
      text
    }) {
    return apiHelper.post('/comments', {
          restaurantId,
          text
        })
  },
  deleteComment({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}