const activeTabFromLocal = window.localStorage.getItem('activeTab')

const store = {
	state: {
		count: 0,
		activeTab: activeTabFromLocal || 'trends'
	},
	mutations: {
		increment (state) {
			state.count++
		},
		selectTab ( state, newTab) {
			state.activeTab = newTab
		}
	}
}

window.addEventListener('beforeunload', e => window.localStorage.setItem('activeTab',store.state.activeTab))


export default store
