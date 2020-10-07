export let store = {
    debug: true,
    state: {
        bookDetail: null,
    },
    setBookDetailAction (newValue) {
        if (this.debug) console.log('bookDetail set new value', newValue)
        this.state.bookDetail = newValue
    },
    clearBookDetailAction () {
        if (this.debug) console.log('clear bookDetail')
        this.state.message = null;
    }
};
