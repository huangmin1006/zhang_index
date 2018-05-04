const STORYGE_KEY = "todos-vuejs";

export default {
	fetch(){
		return JSON.parse(window.localStorage.getItem(STORYGE_KEY) || "[]");
	},
	save(items){
		localStorage.setItem(STORYGE_KEY, JSON.stringify(items));
	}
}