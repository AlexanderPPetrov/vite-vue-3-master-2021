export default {
    getApplesTotalPrice: state => {
        return state.apples * state.pricePerApple
    }
}